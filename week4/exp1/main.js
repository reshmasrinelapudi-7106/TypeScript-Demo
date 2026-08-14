"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Tickets_1 = require("./Tickets");
var p1 = {
    name: "Reshma",
    age: 20,
    seatPrefference: 'Window'
};
var t = new Tickets_1.Ticket(p1, 1200, 12345);
t.displayTicket();
