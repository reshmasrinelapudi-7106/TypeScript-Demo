//Traditional ArrowFunction
function calculateTotal(price, percentageTax) {
    return price + (price * percentageTax);
}
//ArrowFunction concise
var calTotal = function (price, percentageTax) {
    return price + (price * percentageTax);
};
var getWelcomeMsg = function (theatreName) { return "Welcome to ".concat(theatreName, " Theatre!"); };
var ticketPrice = 150;
var getPercentage = 0.20;
console.log(getWelcomeMsg("Ganga"));
var totalPrice = calculateTotal(ticketPrice, getPercentage);
console.log("Total(Traditional):".concat(totalPrice));
var totalP = calTotal(ticketPrice, getPercentage);
console.log("Total(concise): ".concat(totalP));
