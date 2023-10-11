function Student2(f, l) {
  this.firstName = f;
  this.lastName = l;
  this.grades = [];
}

Student2.prototype.inputNewGrade = function (x) {
  this.grades.push(x);
};

Student2.prototype.computeAverageGrade = function () {
  return this.grades.reduce((acc, curr) => acc + curr, 0) / this.grades.length;
};

let students2 = [
  new Student2("Natty", "Argaw"),
  new Student2("John", "Doe"),
  new Student2("Sarah", "Smith"),
];

students2[0].inputNewGrade(80);
students2[0].inputNewGrade(90);
students2[0].inputNewGrade(100);

students2[1].inputNewGrade(80);
students2[1].inputNewGrade(90);
students2[1].inputNewGrade(70);

students2[2].inputNewGrade(80);
students2[2].inputNewGrade(90);
students2[2].inputNewGrade(90);

students2.forEach((x) => console.log("Q2:", x.computeAverageGrade()));
