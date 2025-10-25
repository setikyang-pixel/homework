class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks`);
  }
}

let dog1 = new Dog("Blacky");
let dog2 = new Animal("Rex");

dog1.speak();
dog2.speak();
