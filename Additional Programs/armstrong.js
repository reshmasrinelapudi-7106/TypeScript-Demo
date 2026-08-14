var num = 153;
var original = num;
var sum = 0;
while (num > 0) {
    var digit = num % 10;
    sum += Math.pow(digit, 3);
    num = Math.floor(num / 10);
}
if (sum == original)
    console.log("Armstrong");
else
    console.log("Not Armstrong");
