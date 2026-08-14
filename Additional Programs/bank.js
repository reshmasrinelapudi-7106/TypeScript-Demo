var BankAccount = /** @class */ (function () {
    function BankAccount(balance) {
        this.balance = balance;
    }
    BankAccount.prototype.deposit = function (amount) {
        this.balance += amount;
    };
    BankAccount.prototype.withdraw = function (amount) {
        this.balance -= amount;
    };
    BankAccount.prototype.displayBalance = function () {
        console.log("Balance:", this.balance);
    };
    return BankAccount;
}());
var account = new BankAccount(1000);
account.deposit(500);
account.withdraw(200);
account.displayBalance();
