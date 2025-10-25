class BankAccount {

    constructor(owner,balance = 0){
        this.name = owner;;
        this.hamar = balance;
    }

    deposit(a){
        this.hamar += a;
        return this.hamar;
    }

    withdraw(a){
        if(a < 1){return `Insufficient funds`}
        this.hamar -= a;
        return this.hamar;
    }
}

let Bank = new BankAccount("John", 500);

console.log(Bank.deposit(100));
console.log(Bank.withdraw(200));
