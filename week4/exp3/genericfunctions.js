function getFirstItem(items) {
    return items[0];
}
function wrapInBox(item) {
    return {
        obj: item,
        dateAndTime: new Date()
    };
}
var countries = ["India", "USA", "UK"];
var firstCountry = getFirstItem(countries);
console.log("Sending First box to the country:", firstCountry);
var pincodes = [123453, 875343, 836473];
var firstPincode = getFirstItem(pincodes);
console.log("Sending First box to the pincode:", firstPincode);
var tv = { company: "Samsung", model: "QLED" };
var packTV = wrapInBox(tv);
console.log("The Item packed is ", packTV.obj.company, "at", packTV.dateAndTime);
