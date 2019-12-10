// const converter = require('./converter');
//
// console.log(converter.convertToUa(100));
// console.log(converter.convertToUs(500));

//v2
const Converter = require('./converter');
const baseCurrency = 24;

const exchange = new  Converter(baseCurrency);
console.log(exchange.convertToUa(1000))