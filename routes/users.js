var express = require('express')
var router = express.Router()
const { execMysql } = require('../utils/mysql')

router.post('/add', (req, res, next) => {
  const { username, password } = req.body
  const sql = 'INSERT INTO user(username, password) VALUES(?,?);'
  const addParams = [username, password]
  execMysql(sql, addParams, (rows) => {
    res.send({
      data: 'success',
    })
  })
})

router.get('/detail', (req, res, next) => {
  const { id } = req.query
  const sql = `SELECT * FROM user where id = ${id};`
  execMysql(sql, (rows) => {
    res.send({
      data: rows[0],
    })
  })
})

router.get('/', (req, res, next) => {
  const sql = `SELECT * FROM user;`
  execMysql(sql, (rows) => {
    res.send({
      data: rows,
    })
  })
})

module.exports = router
