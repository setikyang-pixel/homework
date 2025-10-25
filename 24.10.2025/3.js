class Student {
  constructor(name) {
    this.name = name;
    this.grades = [];
  }
  addGrade(...g) {
    this.grades.push(...g);
  }
  average() {
    let a = this.grades.reduce((total, item) => {
      return total + item;
    }, 0);
    return a / this.grades.length;
  }
}

let Std = new Student("John");

Std.addGrade(5, 6, 6, 7, 7, 8, 7, 9);
console.log(Std.average());
