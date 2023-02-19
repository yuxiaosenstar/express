var express = require('express')
var expressWs = require('express-ws')
const { pushLink, delLink, linkTime } = require('../utils/scoket')

var router = express.Router()
expressWs(router) //将 express 实例上绑定 websocket 的一些方法

router.ws('/user', function (ws, req) {
  ws.on('message', function (msg) {
    ws.send('服务器收到了：' + msg)
  })
  const key = new Date().valueOf()
  pushLink(key, ws)
  setTimeout(() => {
    delLink(key)
  }, linkTime)
})

module.exports = router
