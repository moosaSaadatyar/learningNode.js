const http = require("http")
const port = 3500

const friends = [
  { name: 'moosa', family: 'saadatyar' },
  { name: 'mohamad reza', family: 'siamak' },
  { name: 'sadegh', family: 'azarkaman' },
  { name: 'javad', family: 'babai' },
  { name: 'mohamad', family: 'tavakoli' }
]

const server = http.createServer((req, res) => {
  const items = req.url.split('/')
  const lastNumber = Number(items[items.length - 1])

  if (items[1] === 'friends') {
    res.setHeader('Content-Type', 'application/json')
    if (req.method === 'POST') {
          req.on('data', (data) => {
            console.log(data.toString());
            const friend = data.toString()
            friends.push(JSON.parse(friend))
    
          })
        }
    if (
      Number.isInteger(lastNumber) &&
      lastNumber >= 0 &&
      lastNumber < friends.length
    ) {
      res.statusCode = 200
      return res.end(JSON.stringify(friends[lastNumber]))
    }

    // /friends
    if (items.length === 2) {
      res.statusCode = 200
      return res.end(JSON.stringify(friends))
    }

    // /friends/invalid
    res.statusCode = 404
    return res.end(JSON.stringify({ message: 'Friend not found' }))
  }

  // /mesages
  if (items[1] === 'mesages') {
    res.setHeader('Content-Type', 'text/html')
    res.statusCode = 200
    return res.end(`<h1>there was no message</h1>`)
  }

  // Not found
  res.statusCode = 404
  res.end('Not Found')
})

server.listen(port, () => {
  console.log(`listening on port ${port}`)
})

