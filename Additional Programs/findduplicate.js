var arr = [1, 2, 3, 2, 4, 5, 1];
var seen = new Set();
var duplicate = new Set();
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var num = arr_1[_i];
    if (seen.has(num))
        duplicate.add(num);
    else
        seen.add(num);
}
duplicate.forEach(function (value) {
    console.log(value);
});
