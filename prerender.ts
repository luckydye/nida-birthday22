import fs from "node:fs";
import { parse } from "csv-parse";

async function fetchCSV() {
  const dbID = "12xrdWnC6YPo3bXyjJ0UPtGrDUu8Ms8oXb_Qd_S1XAX8";
  const sheet = process.env.NODE_ENV === "production" ? "responses" : "debug";
  console.log("[SSG] fetching from " + sheet);

  const csvURL = `https://docs.google.com/spreadsheets/d/${dbID}/gviz/tq?tqx=out:csv&sheet=${sheet}`;
  const data = await fetch(csvURL).then((res) => {
    if (res.status !== 200) throw new Error("Failed to fetch data");
    return res.text();
  });
  fs.writeFileSync(`dist/data.csv`, data);
}

function getImageId(link) {
  const url = new URL(link);
  const params = new Map(
    url.search
      .slice(1)
      .split("&")
      .map((param) => param.split("="))
  );
  return params.get("id");
}

async function fetchImage(url) {
  if (!url) return null;
  const imageId = getImageId(url);
  const image = await fetch(`https://lh3.googleusercontent.com/d/${imageId}`);
  const type = image.headers.get("content-type").split("/");
  const file = `${imageId}.${type[1]}`;

  fs.writeFileSync(
    `dist/media/${file}`,
    new Uint8Array(await image.arrayBuffer())
  );

  let src = `dist/media/${file}`;
  if (process.env.NODE_ENV === "production") {
    src = `media/${file}`;
  }

  return {
    src,
    type: type.join("/"),
  };
}

async function parseCard(record) {
  return {
    date: record[0],
    message: record[1],
    media: await fetchImage(record[2]),
    name: record[3],
  };
}

export async function fetchPage() {
  console.log("[SSG] Fetching content for page '/'");

  if (!fs.existsSync("dist")) {
    fs.mkdirSync("dist");
  }
  if (!fs.existsSync("dist/media")) {
    fs.mkdirSync("dist/media");
  }

  await fetchCSV();

  const csv = fs.readFileSync("dist/data.csv");
  const csvString = csv.toString();

  const records = [];
  const parser = parse({
    delimiter: ",",
  });

  let index = 0;
  parser.on("readable", function () {
    let record;
    while ((record = parser.read()) !== null) {
      if (index > 0) {
        records.push(record);
      }
      index++;
    }
  });
  parser.on("error", function (err) {
    console.error(err.message);
  });

  parser.write(csvString);
  parser.end();

  const totalCards = records.length;
  let progress = 0;

  await Promise.all(
    records.map((rec) =>
      parseCard(rec).then((card) => {
        progress++;
        console.log(`[SSG] fetched data ${progress}/${totalCards}`);
        return card;
      })
    )
  ).then((cards) => {
    const data = {
      cards,
    };
    fs.writeFileSync("dist/cards.json", JSON.stringify(data, null, "\t"));
  });
}
