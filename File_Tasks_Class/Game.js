class Character {
  constructor(name, healt, attackPower) {
    this.name = name;
    this.healt = healt;
    this.attackPower = attackPower;
  }
  attack(title) {
    count.takeDamage(this.attackPower);
  }
  takeDamage(count) {
    this.healt -= amount;
  }
  isAlive() {
    return this.healt > 0 ? true : false;
  }
  toString() {
    return `Healt : ${this.healt}`;
  }
}

class Wizard extends Character {
  constructor(mana) {
    super(name, healt,attackPower);
    this.mana = 60;
  }
  castSpell(count) {
    if (this.mana <= 20) return "Min mana";
    count.takeDamage(this.attackPower * 2);
    this.mana -= 20;
  }
}

class Warrior extends Character {
  constructor() {
    super(name,healt, attackPower);
    this.armor = 60;
  }
  takeDamage(amount) {
    if (this.armor > 0) {
      this.healt -= amount - armor;
    }else{
        this.healt -= amount
    }
  }
}

let Aqiles = new Character("Aqiles");
let Dambldor = new Character("Dambldor");

while(Dambldor.isAlive() && Aqiles.isAlive()){
    Dambldor.attack(Aqiles);
    Aqiles.attack(Dambldor)
}


console.log("Dead");
