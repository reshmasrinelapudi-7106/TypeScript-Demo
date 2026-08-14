var Locker = /** @class */ (function () {
    function Locker(initialItem) {
        this.contents = initialItem;
    }
    Locker.prototype.getItem = function () {
        console.log("Accessing locker contents ...");
        return this.contents;
    };
    Locker.prototype.depositItem = function (newItem) {
        this.contents = newItem;
        console.log("Locker updated with the new item...");
    };
    return Locker;
}());
var cashLocker = new Locker(10000);
var cash = cashLocker.getItem();
console.log("Cash in Locker:" + cash);
var docLocker = new Locker("Passport");
var passport = docLocker.getItem();
console.log("Documnet in the Locker is", passport);
var silverLocker = new Locker({ wtInGrams: 200, purity: "90% Pure" });
var silver = silverLocker.getItem();
console.log("Silver in the Locker is ", silver.wtInGrams, "grams and the purity of that silver is ", silver.purity);
