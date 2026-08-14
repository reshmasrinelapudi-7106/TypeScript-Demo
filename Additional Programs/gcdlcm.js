var a = 12;
var b = 18;
var x = a;
var y = b;
while (y != 0) {
    var temp = y;
    y = x % y;
    x = temp;
}
var gcd = x;
var lcm = (a * b) / gcd;
console.log("GCD =", gcd);
console.log("LCM =", lcm);
