const http = require('http');
const request = require('request');
const port = 3000;
const url = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

function jsonData(cb) {
    request(url, function (er, resp, body) {
        return cb(body)
    })
}

http.createServer(function (req, res) {
    jsonData(function (data) {
        res.write(data);
        res.end(); })
}).listen(port, function () {
    console.log('Server is up')
});
