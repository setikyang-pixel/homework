// Vat tarberak

// class Employee {
//   constructor(name, salary) {
//     this.name = name;
//     this.unfoEmpl = [];
//     this.salary = salary;
//     this.net = 0;
//   }

//   Bistax(tax) {
//     this.net = this.salary - tax;
//     return this.net;
//   }
//   BisRep() {
//     this.unfoEmpl.push(`${this.name} : ${this.net}`);
//   }
//   LogInfo() {
//     console.log(this.unfoEmpl);
//   }
// }

// const emp = new Employee("Gagik", 100000);
// console.log(emp.Bistax(50000));
// emp.BisRep();
// emp.LogInfo();

// Lav Tarberak

// class UsersEmployee {
//   constructor(name, salary) {
//     this.name = name;
//     this.salary = salary;
//     this.unfoEmpl = [];
//     this.net = 0;
//   }
// }

// class UsersLog {
//   constructor(arg) {
//     this.arg = arg;
//   }
//   Bistax(tax) {
//     this.arg.net = this.arg.salary - tax;
//     return this.arg.net;
//   }
// }

// class UsersInfo {
//   constructor(arg) {
//     this.arg = arg;
//   }
//   BisRep() {
//     this.arg.unfoEmpl.push(`${this.arg.name} : ${this.arg.net}`);
//   }
//   LogInfo() {
//     console.log(this.arg.unfoEmpl);
//   }
// }

// const emp = new UsersEmployee("Gagik", 100000);
// const info = new UsersLog(emp);
// const log = new UsersInfo(emp);

// console.log(info.Bistax(50000))
// log.BisRep();
// log.LogInfo()
