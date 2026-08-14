var arr = [1, 2, 2, 3, 1, 4, 2];
var count = {};
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var num = arr_1[_i];
    count[num] = (count[num] || 0) + 1;
}
console.log(count);
