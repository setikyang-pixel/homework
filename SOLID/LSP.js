// Vat tarberak

// class BankUser {
//   constructor(name, age, amount) {
//     this.name = name;
//     this.age = age;
//     this.amount = amount;
//     this.info = [];
//   }

//   withMon(mon) {
//     if (this.amount > 0) {
//       this.info.push(`${this.name} : ${(this.amount -= mon)}$ withdrew money`);
//     }
//   }
// }

// class User extends BankUser {
//   constructor(name, age, amount) {
//     super(name, age, amount);
//   }
//   withMon(mon) {
//     if (this.amount > 0 && this.age >= 18) {
//       this.info.push(`${this.name} : ${(mon)}$ withdrew money`);
//       this.info.forEach((item) => console.log(item));
//     } else {
//       throw new Error("Incorrect entry age or insufficient balance");
//     }
//   }
// }

//Lav Tarberak

// class BankUser {
//   constructor(name, age, amount) {
//     this.name = name;
//     this.age = age;
//     this.amount = amount;
//     this.info = [];
//   }

//   withMon(mon) {
//     if (this.amount > 0 && this.age >= 18) {
//       this.info.push(`${this.name} : ${mon}$ withdrew money`);
//     }
//   }
// }

// class User extends BankUser {
//   constructor(name, age, amount) {
//     super(name, age, amount);
//   }
//   logMon() {
//     this.info.forEach((item) => console.log(item));
//   }
// }
