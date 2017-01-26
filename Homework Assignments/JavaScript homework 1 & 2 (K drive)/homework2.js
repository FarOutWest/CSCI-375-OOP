class Vehicle {
  get speedratio() {
    return 0;
  }
}

class Motorcycle extends Vehicle {
  constructor (horsepower, weight) {
    super();
    this._horsepower = horsepower;
    this._weight = weight;
    this._speedratio = null;
  }

  _updateSpeedratio() {
    this._speedratio = this._horsepower / this._weight;
  }

  get horsepower() {
    return this._horsepower;
  }

  set horsepower(value) {
    if (value != this._horsepower) {
      this._horsepower = value;
      this._speedratio = null;
    }
  }

  get weight() {
    return this._weight;
  }

  set weight(value) {
    if (value != this._weight) {
      this._weight = value;
      this._speedratio = 0;
    }
  }

  get speedratio() {
    if (this._speedratio == null) {
      this._updateSpeedratio();
    }
    return this._speedratio;
  }
}

class Car extends Vehicle {
  constructor (horsepower, weight) {
    super();
    this._horsepower = horsepower;
    this._weight = weight;
    this._speedratio = null;
  }

  _updateSpeedratio() {
    this._speedratio = this._horsepower / this._weight;
  }

  get horsepower() {
    return this._horsepower;
  }

  set horsepower(value) {
    if (value != this._horsepower) {
      this._horsepower = value;
      this._speedratio = null;
    }
  }

  get weight() {
    return this._weight;
  }

  set weight(value) {
    if (value != this._weight) {
      this._weight = value;
      this._speedratio = 0;
    }
  }

  get speedratio() {
    if (this._speedratio == null) {
      this._updateSpeedratio();
    }
    return this._speedratio;
  }
}

class Console {
  constructor (id) {
    this.element = document.getElementById(id);
  }

  log (message) {
    var p = document.createElement("p");
    p.innerHTML = message;
    this.element.appendChild(p);
  }
}

let title = new Console("title");
let cons = new Console("console");

let vehicle = new Vehicle();
let motorcycle = new Motorcycle(150, 450);
let car = new Car(500, 3000);

title.log('SPEED RATIOS');

cons.log('Vehicle: ' + vehicle.speedratio);
cons.log('Motorcycle: ' + motorcycle.speedratio);
motorcycle.horsepower = 100;
cons.log('Motorcycle updated: ' + motorcycle.speedratio);
cons.log('Car: ' + car.speedratio);
