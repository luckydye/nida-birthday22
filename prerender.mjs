import fs from "node:fs";
import path from "node:path";
import { parse } from "csv-parse";

const csv = fs.readFileSync("./data.csv");
const csvString = csv.toString();

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
  const imageId = getImageId(url);
  const image = await fetch(`https://lh3.googleusercontent.com/d/${imageId}`);
  const type = image.headers.get("content-type").split("/");
  const file = `${imageId}.${type[1]}`;

  fs.writeFileSync(
    `dist/media/${file}`,
    new Uint8Array(await image.arrayBuffer())
  );
  return `media/${file}`;
}

const records = [];
const parser = parse({
  delimiter: ",",
});

async function parseCard(record) {
  return {
    date: record[0],
    message: record[1],
    media: await fetchImage(record[2]),
    name: record[3],
  };
}

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

if (!fs.existsSync("dist")) {
  fs.mkdirSync("dist");
}
if (!fs.existsSync("dist/media")) {
  fs.mkdirSync("dist/media");
}

await Promise.all(records.map(parseCard)).then((cards) => {
  const data = {
    cards,
  };
  fs.writeFileSync("dist/cards.json", JSON.stringify(data, null, "\t"));
});
