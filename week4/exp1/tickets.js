"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ticket = void 0;
var constants_js_1 = require("./constants.js");
var Ticket = /** @class */ (function () {
    function Ticket(passenger, baseFare, flightNumber) {
        this.passenger = passenger;
        this.baseFare = baseFare;
        this.flightNumber = flightNumber;
    }
    Ticket.prototype.calFinalFare = function () {
        var tax = this.baseFare * constants_js_1.gst;
        return this.baseFare + tax + constants_js_1.convinceFee;
    };
    Ticket.prototype.displayTicket = function () {
        console.log("Passenger Name:" + this.passenger.name);
        console.log("Pasesenger Age:" + this.passenger.age);
        console.log("Seat Prefference:" + this.passenger.seatPrefference);
        console.log("TotalFare:" + this.calFinalFare());
        console.log("GST:" + constants_js_1.gst);
        console.log("Convince Fee:" + constants_js_1.convinceFee);
    };
    return Ticket;
}());
exports.Ticket = Ticket;
