const links = {}
const linkTime = 120000

function pushLink(key, ws) {
  links[key] = ws
}

function sendMsg(data) {
  Object.keys(links).forEach((key) => {
    links[key].send(data)
  })
}

function delLink(key) {
  delete links[key]
}

module.exports = {
  links,
  linkTime,
  pushLink,
  sendMsg,
  delLink,
}
