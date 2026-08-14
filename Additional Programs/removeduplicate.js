var str = "programming";
var result = "";
for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
    var ch = str_1[_i];
    if (!result.includes(ch))
        result += ch;
}
console.log(result);
