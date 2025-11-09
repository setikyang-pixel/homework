class LightState {
  next(light) {}
  getColor() {}
  action() {}
}

class RedLight extends LightState {
  next(light) {
    light.setState(new GreenLight());
  }

  getColor() {
    return "Red";
  }

  action() {
    return "STOP";
  }
}

class GreenLight extends LightState {
  next(light) {
    light.setState(new YellowLight());
  }

  getColor() {
    return "Green";
  }

  action() {
    return "GO";
  }
}

class YellowLight extends LightState {
  next(light) {
    light.setState(new RedLight());
  }

  getColor() {
    return "Yellow";
  }

  action() {
    return "SLOW DOWN";
  }
}

class TrafficLight {
  constructor() {
    this.state = new RedLight();
  }

  setState(state) {
    this.state = state;
  }

  next() {
    this.state.next(this);
  }

  show() {
    console.log(this.state.action());
  }
}

let tlc = new TrafficLight();

tlc.show();
tlc.next();
tlc.show();
tlc.next();
tlc.show();
