var Employee = /** @class */ (function () {
    function Employee(name, salary, department) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }
    Employee.prototype.show = function () {
        console.log(this.name);
        console.log(this.salary);
        console.log(this.department);
    };
    return Employee;
}());
var emp = new Employee("Rahul", 50000, "IT");
emp.show();
