const mysql = require("mysql");
const util = require("util");
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
  try {
    await executeQuery("DROP TABLE IF EXISTS `employee_info`");
    const query = fs.readFileSync(`${__dirname}/create-table.sql`, { encoding: "utf-8" });
    return await executeQuery(query);
  } catch (error) {
    throw new Error(error)
  }
};

module.exports = {
  createTable,
  executeQuery,
};
