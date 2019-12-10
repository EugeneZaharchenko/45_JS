// const baseCurrencyUs = 24;
//
//
// //Helper
// function roundTwoDecimals(amount) {
//     return Math.round(amount * 100) / 100;
// }
//
// module.exports.convertToUa = function (currency) {
//     return roundTwoDecimals(currency * baseCurrencyUs)
// };
//
// module.exports.convertToUs = function (currency) {
//     return roundTwoDecimals(currency / baseCurrencyUs)
// };

//v2
function Converter(baseCurrencyUs) {
    this.baseCurrencyUs = baseCurrencyUs;
}

Converter.prototype.roundTwoDecimals = function (amount) {
    return Math.round(amount * 100) / 100;
};

Converter.prototype.convertToUa = function (curr) {
    return this.roundTwoDecimals(curr * this.baseCurrencyUs);
};

Converter.prototype.convertToUs = function (curr) {
    return this.roundTwoDecimals(curr / this.baseCurrencyUs);
};

module.exports = Converter;

