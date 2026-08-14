var FixedDeposit = /** @class */ (function () {
    function FixedDeposit(name, amount, rate, time) {
        this.customerName = name;
        this.principalAmount = amount;
        this.Rate = rate !== null && rate !== void 0 ? rate : 0.2;
        this.TimeInYears = time !== null && time !== void 0 ? time : 1;
    }
    FixedDeposit.prototype.calMaturity = function () {
        var interest = (this.principalAmount * this.Rate * this.TimeInYears) / 100;
        return this.principalAmount + interest;
    };
    FixedDeposit.prototype.displayDetails = function () {
        console.log("Fixed Deposit Receipt");
        console.log("Customer:".concat(this.customerName));
        console.log("Principal:".concat(this.principalAmount));
        console.log("Rate:".concat(this.Rate));
        console.log("Time:".concat(this.TimeInYears));
        console.log("Maturity Amount:".concat(this.calMaturity()));
    };
    return FixedDeposit;
}());
var standardFD = new FixedDeposit("reshma", 10000);
var seniorFD = new FixedDeposit("Kumar", 100000, 6.5, 2);
standardFD.displayDetails();
seniorFD.displayDetails();
seniorFD.principalAmount = 120000;
console.log("Updated Maturity for Neha:".concat(seniorFD.calMaturity()));
