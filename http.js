const { send, read } = require('./internal')
function makeRequest(url, data) {
  send(url, data)
  read()
}

makeRequest('www.codeYad.com', 'node.js')
