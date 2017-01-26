class Animal {
  get info() {
    return "NULL TYPE";
  }
}

class Tiger extends Animal {
  constructor (type, size) {
    super();
    this.type = type;
    this.size = size;
  }

  get info() {
    return "The tiger is type: " + this.type + ", and size: " + this.size;
  }
}

class Penguin extends Animal {
  constructor (type, size) {
    super();
    this.type = type;
    this.size = size;
  }

  get info() {
    return "The penguin is type: " + this.type + ", and size: " + this.size;
  }
}

let tiger = new Tiger("scary", "large");
let penguin = new Penguin("adorable", "small");

let animals = new Array(
  new Tiger("friendly", "medium"),
  new Penguin("cuddly", "small"),
  new Tiger("ferocious", "tiny"));

console.log(tiger);
console.log(penguin);

animals.forEach(function (info) { console.log(info.info); });
