const db = require("./database/database");

const { readXlsxFile } = require("./utils/readExcel");

(async () => {
  try {
    await db.createTable();
    const rows = await readXlsxFile();
    await db.executeQuery("INSERT INTO `employee_info` VALUES ?", rows);
    const result = await db.executeQuery("SELECT * FROM employee_info");
    console.log(result);
  } catch (error) {
    console.log(error);
  }
})();
