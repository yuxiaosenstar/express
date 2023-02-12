var express = require('express')
var router = express.Router()
const { execMysql } = require('../utils/mysql')

router.get('/detail', (req, res, next) => {
  const { id } = req.query
  const sql = `SELECT * FROM goods where id = ${id}`
  execMysql(sql, (rows) => {
    res.send({
      data: rows[0],
    })
  })
})

router.get('/', (req, res, next) => {
  const sql = `SELECT * FROM goods;`
  execMysql(sql, (rows) => {
    res.send({
      data: rows,
    })
  })
})

module.exports = router
