var Student = /** @class */ (function () {
    function Student(id, name) {
        this.studentId = id;
        this.name = name;
    }
    Student.prototype.display = function () {
        console.log(this.studentId);
        console.log(this.name);
    };
    return Student;
}());
var s = new Student(101, "Reshma");
s.display();
