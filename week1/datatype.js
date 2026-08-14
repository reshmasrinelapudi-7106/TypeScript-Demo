var user_Name = "reshma";
var age = 19;
var isStudent = true;
console.log("user_Name has the datatype :" + typeof user_Name);
console.log("age has the datatype :" + typeof age);
console.log("isStudent has the datatype :" + typeof isStudent);
function displayDetails(name, age, active) {
    console.log("Name : ".concat(name));
    console.log("Age : ".concat(age));
    console.log("IsStudent : ".concat(isStudent));
}
displayDetails(user_Name, age, isStudent);
