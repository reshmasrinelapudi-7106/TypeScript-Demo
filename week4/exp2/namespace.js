var GovernMentId;
(function (GovernMentId) {
    var aadharLength = 12;
    function validateAadhar(id) {
        var isNumeric = /^\d+$/.test(id);
        if (isNumeric && id.length === aadharLength) {
            return true;
        }
        else {
            return false;
        }
    }
    GovernMentId.validateAadhar = validateAadhar;
    function validatePan(id) {
        var panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
        return panRegex.test(id.toUpperCase());
    }
    GovernMentId.validatePan = validatePan;
})(GovernMentId || (GovernMentId = {}));
var MyAadhar = "467834789012";
var MyPan = "MLNKUR1234K";
console.log("Aadhar Validation:" + GovernMentId.validateAadhar(MyAadhar));
console.log("Pan Validation:" + GovernMentId.validatePan(MyPan));
