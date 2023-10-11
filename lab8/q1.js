let Student = {
  firstName: "",
  lastName: "",
  grades: [],
  inputNewGrade: function (x) {
    this.grades.push(x);
  },

  computeAverageGrade: function () {
    return (
      this.grades.reduce((acc, curr) => acc + curr, 0) / this.grades.length
    );
  },
};

let students = [
  Object.create(Student),
  Object.create(Student),
  Object.create(Student),
];

students[0].firstName = "Natty";
students[0].lastName = "Argaw";
students[0].grades = [];
students[0].inputNewGrade(80);
students[0].inputNewGrade(90);
students[0].inputNewGrade(100);

students[1].firstName = "John";
students[1].lastName = "Doe";
students[1].grades = [];
students[1].inputNewGrade(80);
students[1].inputNewGrade(90);
students[1].inputNewGrade(70);

students[2].firstName = "Sarah";
students[2].lastName = "Smith";
students[2].grades = [];
students[2].inputNewGrade(80);
students[2].inputNewGrade(90);
students[2].inputNewGrade(90);

students.forEach((x) => console.log("Q1:", x.computeAverageGrade()));
