var MathOperations;
(function (MathOperations) {
    function add(a, b) {
        return a + b;
    }
    MathOperations.add = add;
    function subtract(a, b) {
        return a - b;
    }
    MathOperations.subtract = subtract;
    function multiply(a, b) {
        return a * b;
    }
    MathOperations.multiply = multiply;
    function divide(a, b) {
        return a / b;
    }
    MathOperations.divide = divide;
})(MathOperations || (MathOperations = {}));
console.log(MathOperations.add(5, 2));
console.log(MathOperations.subtract(5, 2));
console.log(MathOperations.multiply(5, 2));
console.log(MathOperations.divide(5, 2));
