var Railways = /** @class */ (function () {
    function Railways(seat) {
        Railways.seatno = seat;
    }
    Railways.display = function () {
        console.log("Welcome to the Railways Ms. ".concat(Railways.custname));
    };
    Railways.custname = "Reshmasri";
    return Railways;
}());
var a = new Railways(1);
Railways.display();
