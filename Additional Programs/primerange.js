var start = 1;
var end = 20;
for (var n = start; n <= end; n++) {
    var flag = true;
    for (var i = 2; i < n; i++) {
        if (n % i == 0) {
            flag = false;
            break;
        }
    }
    if (flag && n > 1)
        console.log(n);
}
