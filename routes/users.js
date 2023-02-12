var express = require("express");
var router = express.Router();
const { getMysql } = require("../utils/mysql");

const queryUsers = (callback) => {
  getMysql(`SELECT * FROM user`, (rows) => {
    callback(rows);
  });
};

const queryUsersDetail = (id, callback) => {
  getMysql(`SELECT * FROM user where id = ${id}`, (rows) => {
    callback(rows);
  });
};

/* GET home page. */
router.get("/detail", function (req, res, next) {
  const { id } = req.query;
  queryUsersDetail(id, (rows) => {
    res.send({
      data: rows[0],
    });
  });
});

/* GET home page. */
router.get("/", function (req, res, next) {
  queryUsers((rows) => {
    res.send({
      data: rows,
    });
  });
});

module.exports = router;
