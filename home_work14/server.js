const http = require('http');
const fs = require('fs');

http.createServer(function (req, resp) {
    if (req.url == '/') {
        resp.end("Hello, world")
    }
    else if (req.url == '/about') {
        console.log(req);
        resp.end()
    }
    else if (req.url == '/contact') {
        let file = fs.readFileSync('index.html');
        resp.end(file)
    }
    resp.end()

}).listen(3000);