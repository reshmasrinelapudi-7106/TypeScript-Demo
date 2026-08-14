var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var arr = [1, 2, 3, 4, 5];
var n = 2;
var rotated = __spreadArray(__spreadArray([], arr.slice(n), true), arr.slice(0, n), true);
console.log(rotated);
