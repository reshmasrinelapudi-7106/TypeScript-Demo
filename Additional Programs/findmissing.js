var arr = [1, 2, 3, 5];
var n = 5;
var expected = (n * (n + 1)) / 2;
var actual = arr.reduce(function (sum, value) { return sum + value; }, 0);
console.log("Missing Number:", expected - actual);
