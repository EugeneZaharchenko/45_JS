const http = require('http');
const fs = require('fs');
const request = require('request-promise');
let nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'zaheugene80@gmail.com',
        pass: '.140180.'
    }
});

let mailOptions = {
    from: 'zaheugene80@gmail.com',
    to: 'eugenezaharchenko@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

http.createServer(function (req, resp) {
    switch (req.url) {
        case '/':
            resp.end("Hello, world");
            break;

        case '/about':
            console.log(req);
            resp.end();
            break;

        case '/contact':
            let file = fs.readFileSync('index.html');
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
    }
    resp.end()

}).listen(3000);
