var Box = /** @class */ (function () {
    function Box(value) {
        this.value = value;
    }
    Box.prototype.display = function () {
        console.log(this.value);
    };
    return Box;
}());
var numberBox = new Box(100);
var stringBox = new Box("Hello");
numberBox.display();
stringBox.display();
