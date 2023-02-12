var express = require("express");
var router = express.Router();
const { getMysql } = require("../utils/mysql");

const queryGoods = (callback) => {
  getMysql(`SELECT * FROM goods`, (rows) => {
    callback(rows);
  });
};

const queryGoodsDetail = (id, callback) => {
  getMysql(`SELECT * FROM goods where id = ${id}`, (rows) => {
    callback(rows);
  });
};

/* GET home page. */
router.get("/detail", function (req, res, next) {
  const { id } = req.query;
  queryGoodsDetail(id, (rows) => {
    res.send({
      data: rows[0],
    });
  });
});

/* GET home page. */
router.get("/", function (req, res, next) {
  queryGoods((rows) => {
    res.send({
      data: rows,
    });
  });
});

module.exports = router;
