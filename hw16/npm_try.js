const chalk = require("chalk");
const log = console.log;

log(`${chalk.blue("Hello")} World${chalk.red("!")}`);

log(chalk.green.bgYellowBright.bold('Hello world!'));

log(chalk.green(
    'Some green line ' +
    chalk.blue.underline.bold('just to try an npm module') +
    chalk.white(' that becomes') +
    ' green again!'
));

// function createQuote(quote, callback){
//     var myQuote = "Like I always say, " + quote;
//     callback(myQuote);
// }
//
// function logQuote(quote){
//     console.log(quote);
// }
//
// createQuote("eat your vegetables!", logQuote);

// const http = require('http');
// const request = require('request-promise');
//
// function handleError(error, resp) {
//     resp.writeHead(500, {'Content-Type': 'text/plain'});
//     resp.end(error.message)
// }

let request = require('request');
request('http://quotes.rest/qod.json', function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the request contents.
});