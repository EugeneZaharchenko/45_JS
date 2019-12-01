//ф-ция асинхронная. Выполнится после всех синхронных ф-ций
// function coffeemachine(coffee, cb) {
//     setTimeout(function () {
//         let americano = coffee + ' with milk';
//         setTimeout(function () {
//             return cb(americano)
//         }, 1000)
//     }, 1000)
// }
//
// //синхронный блок
// let coffee = 'Bruno';
// let cup = coffeemachine(coffee);
// console.log(cup);
//
// coffeemachine(coffee, function (data) {
//     console.log(data)
// });


//npm install --save request
//npm i request

const request = require('request');
const url = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

request(url, function (error, resp, body) {
    console.log(body)
});
