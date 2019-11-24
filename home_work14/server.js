const http = require('http');

http.createServer(function (req, resp) {
    if (req.url == '/') {
        resp.end("Hello, world")
    }
    else if (req.url == '/about') {
        console.log(req);
        resp.end()
    }
    resp.end()
}).listen(3000);