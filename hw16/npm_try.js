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

let request = require('request');
request('http://quotes.rest/qod.json', function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    let content = JSON.parse(body);
    return (content["contents"]["quotes"][0]["quote"]) //Return JSON contents
});


let quote = request();
let message = 'The quote of today is: ';
console.log(message + quote);
// console.log(message + function () {
//                         request()}());
