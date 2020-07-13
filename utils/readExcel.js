const path = require("path");
const readXlsxFile = require("read-excel-file/node");

exports.readXlsxFile = async () => {
  const filePath = path.resolve(__dirname, "../data/templateShedule.xlsx");
  const rows = await readXlsxFile(filePath);
  rows.shift();
  return rows;
};
