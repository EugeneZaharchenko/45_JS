const express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    nodeMailer = require('nodemailer');

let app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.post('/send-email', function (req, res) {
    let transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'eugenezaharchenko@gmail.com',
            pass: 'secret'
        }
    });
    let mailOptions = {
        to: 'eugenez80@aol.com',
        subject: req.body.subject,
        body: req.body.message,
        text: 'Some text',
        html: '<b>Hello world?</b>'
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });
    res.writeHead(301, { Location: 'index.html' });
    res.end();
});

app.listen(3000, function() {
    console.log('Find it on http://localhost:3000');
});