class Rectangle {
  constructor(width, height) {
    this.wid = width;
    this.hei = height;
  }

  area() {
    return this.wid * this.hei;
  }

  perimeter() {
    return 2 * (this.wid + this.hei);
  }
}

let Rec = new Rectangle(8, 6);
console.log(Rec.area());
console.log(Rec.perimeter());
