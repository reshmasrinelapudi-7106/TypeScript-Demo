var num = 145;
var original = num;
var sum = 0;
function factorial(n) {
    var fact = 1;
    for (var i = 1; i <= n; i++)
        fact *= i;
    return fact;
}
while (num > 0) {
    var digit = num % 10;
    sum += factorial(digit);
    num = Math.floor(num / 10);
}
if (sum == original)
    console.log("Strong Number");
else
    console.log("Not Strong");
