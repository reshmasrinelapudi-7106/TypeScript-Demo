var str = "typescript";
var freq = {};
for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
    var ch = str_1[_i];
    freq[ch] = (freq[ch] || 0) + 1;
}
console.log(freq);
