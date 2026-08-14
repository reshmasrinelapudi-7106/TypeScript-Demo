var arr = [10, 25, 8, 40, 15];
var largest = -Infinity;
var second = -Infinity;
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var num = arr_1[_i];
    if (num > largest) {
        second = largest;
        largest = num;
    }
    else if (num > second && num != largest) {
        second = num;
    }
}
console.log("Second Largest:", second);
