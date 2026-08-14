function greeting(name) {
    return "Hello ".concat(name, ", How are you?");
}
function getCity(city) {
    if (city === void 0) { city = "Chennai"; }
    return "City :".concat(city);
}
function SendingAlertMsg(ph, msg) {
    console.log("Sending alert message to ".concat(ph));
    if (msg) {
        console.log("Message :".concat(msg));
    }
}
function calculateSum() {
    var scores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        scores[_i] = arguments[_i];
    }
    return scores.reduce(function (total, current) { return total + current; }, 0);
}
console.log(greeting("Reshma"));
console.log(getCity());
console.log(SendingAlertMsg(123457789, "BE CAREFUL"));
console.log(getCity("Amalapuram"));
var total = calculateSum(1, 2, 3, 4);
console.log("Total Sum:".concat(total));
