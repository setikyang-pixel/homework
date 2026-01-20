// Vat tarberak

// class Payment {
//   constructor(cardName) {
//     this.cardName = cardName;
//   }

//   CardTypes() {
//     if (this.cardName == "Visa") {
//       console.log(`He made the payment with ${this.cardName}`);
//     } else if (this.cardName == "MasterCard") {
//       console.log(`He made the payment with ${this.cardName}`);
//     } else {
//       console.log("Incorrect bank card type");
//     }
//   }
// }

// const pay = new Payment("Visa");
// pay.CardTypes()

// Lav tarberak

// class ABSpayment {
//   CardTypes() {
//     throw new Error("Error");
//   }
// }

// class VisaPayment extends ABSpayment {
//   CardTypes() {
//     console.log("He made the payment with Visa");
//   }
// }
// class MasterCardPayment extends ABSpayment {
//   CardTypes() {
//     console.log("He made the payment with MasterCard");
//   }
// }

// const visa = new VisaPayment();
// visa.CardTypes();

// const master = new MasterCardPayment();
// master.CardTypes();




