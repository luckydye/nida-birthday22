import fs from "node:fs";
import path from "node:path";
import { parse } from "csv-parse";

const csv = fs.readFileSync("./data.csv");
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
      const data = {
        date: record[0],
        message: record[1],
        media: record[2],
        name: record[3],
      };
      records.push(data);
    }
    index++;
  }
});
parser.on("error", function (err) {
  console.error(err.message);
});

parser.write(csvString);
parser.end();

const data = {
  cards: records,
};

if (!fs.existsSync("dist")) {
  fs.mkdirSync("dist");
}
fs.writeFileSync("dist/cards.json", JSON.stringify(data));
