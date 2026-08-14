var anyValue = 10;
anyValue = "Hii";
anyValue = false;
var unknownValue = "Hello";
if (typeof unknownValue === "string") {
    console.log("length of unknownValue is :" + unknownValue.length);
}
function alertFunction(msg) {
    console.log("ALERT:" + msg);
}
alertFunction("This is the alert message");
