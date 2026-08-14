var n = 7;
var flag = true;
if (n <= 1) {
    flag = false;
}
for (var i = 2; i < n; i++) {
    if (n % i == 0) {
        flag = false;
        break;
    }
}
if (flag) {
    console.log("Prime Number");
}
else {
    console.log("Not Prime Number");
}
