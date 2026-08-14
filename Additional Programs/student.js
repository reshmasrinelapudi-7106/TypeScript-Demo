var Student = /** @class */ (function () {
    function Student(id, name, course) {
        this.id = id;
        this.name = name;
        this.course = course;
    }
    Student.prototype.display = function () {
        console.log("ID:", this.id);
        console.log("Name:", this.name);
        console.log("Course:", this.course);
    };
    return Student;
}());
var s = new Student(101, "Reshma", "AIDS");
s.display();
