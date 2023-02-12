const getMysql = (sql, callback) => {
  const mysql = require("mysql");
  const connection = mysql.createConnection({
    host: "101.43.51.163",
    user: "root",
    password: "123456",
    database: "db1",
    port: "3307",
  });
  connection.connect();
  connection.query(sql, (err, rows, fields) => {
    if (err) throw err;
    callback(rows);
  });
  connection.end();
};

module.exports = {
  getMysql,
};
