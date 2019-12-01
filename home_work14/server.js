const http = require('http');
const fs = require('fs');
const request = require('request-promise');
let nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'zaheugene80@gmail.com',
        pass: '14__80'
    }
});

let mailOptions = {
    from: 'zaheugene80@gmail.com',
    to: 'eugenezaharchenko@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

function handleError(error, resp) {
    resp.writeHead(500, {'Content-Type': 'text/plain'});
    resp.end(error.message)
}

http.createServer(function (req, resp) {
    switch (req.url) {
        case '/':
            resp.end("Hello, world");
            break;

        case '/about':
            console.log(req);
            console.log(req.url);
            console.log(req.method);
            console.log(req.headers);
            resp.end();
            break;

        case '/contact':
            let file = fs.readFileSync('index.html');
            resp.writeHead(200, {'Content-Type': 'text/plain'});
            resp.end(file);
            break;

        case '/api':
            const options = {
            method: 'GET',
            uri: 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3&fbclid=IwAR079Li2qkFEewZXvZBMY0ewclKwtDW1_EY54jMN0qxfIiQOu0GOJxAZ9EA',
            json: true
            }
            request(options)
                .then(function (response) {
                    console.log(response)
                })
                .catch(function (err) {
                    console.log(err)
                });
            break;

        case '/mail':
            transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
            break;

        default:
            resp.writeHead(404, {'Content-Type': 'text/plain'});
            resp.end('Page not found')
    }
    resp.end()

}).listen(3000, console.log('Server is running!'));
