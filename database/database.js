const mysql = require("mysql");
const fs = require("fs");

const db = mysql.createConnection({
  host: "localhost",
  user: "admin",
  password: "12345678",
  database: "import-xls",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
});

const executeQuery = (query, rows = null) => {
  return new Promise((resolve, reject) => {
    db.query(query, [rows], (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};

const createTable = async () => {
  await executeQuery("DROP TABLE IF EXISTS `employee_info`");
  const query = fs.readFileSync(`${__dirname}/create-table.sql`, {
    encoding: "utf-8",
  });
  return await executeQuery(query);
};

module.exports = {
  createTable,
  executeQuery,
};
