const http = require('http')
const fs = require("fs")
const port = 8080;
const hostname = "127.0.0.1"
const kullay = fs.readFileSync('file')
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/plain' })
    res.end(kullay)
}).listen(port, hostname, () => {
    console.log(`server is running at port 8080......----> http://${hostname}:${port}`)
})
