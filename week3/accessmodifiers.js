var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DigitalWallet = /** @class */ (function () {
    function DigitalWallet(name, amount, pin) {
        this.loyalityPoints = 0;
        this.holderName = name;
        this.bal = amount;
        this.pin = pin;
    }
    DigitalWallet.prototype.withDrawMoney = function (amount, enteredPin) {
        if (this.verifyPin(enteredPin)) {
            if (this.bal >= amount) {
                this.bal = amount;
                console.log("Transaction Successfull, Remaining Balance:".concat(this.bal));
            }
            else {
                console.log("Insufficient Balance, Current Balance:".concat(this.bal));
            }
        }
        else {
            console.log("Invalid Pin, Transaction Failed");
        }
    };
    DigitalWallet.prototype.verifyPin = function (pin) {
        return this.pin === pin;
    };
    return DigitalWallet;
}());
var PremiumWallet = /** @class */ (function (_super) {
    __extends(PremiumWallet, _super);
    function PremiumWallet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PremiumWallet.prototype.addLoyalPoints = function (points) {
        this.loyalityPoints += points;
        console.log("Loyalty Points Added, Current Points:".concat(this.loyalityPoints));
    };
    return PremiumWallet;
}(DigitalWallet));
var myWallet = new DigitalWallet("REshmasri", 10000, 1234);
console.log("Wallet Holder:".concat(myWallet.holderName));
//console.log(`Trying to access private property bal:${myWallet.bal}`);//error: Property 'bal' is private and only accessible within class 'DigitalWallet'.
//myWallet.verifyPin(1234);//method verifyPin is private
myWallet.withDrawMoney(4000, 1234);
