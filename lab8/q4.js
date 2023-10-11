function Animal(n, s) {
  this.name = n;
  this.speed = s;
}

function Rabbit(n, s) {
  Animal.call(this, n, s);
}

Animal.compareBySpeed = function (a1, a2) {
  if (a1.speed > a2.speed) return 1;
  else if (a1.speed < a2.speed) return -1;
  else return 0;
};

Animal.prototype.run = function () {
  this.speed++;
};

Rabbit.prototype.hide = function () {
  console.log(this.name, "hide");
};

Object.setPrototypeOf(Rabbit, Animal);
Object.setPrototypeOf(Rabbit.prototype, Animal.prototype);

let rabbit1 = new Rabbit("Jimny", 1);
console.log("rabbit 1", rabbit1.speed);

let rabbit2 = new Rabbit("Jade", 2);
console.log("rabbit 2", rabbit2.speed);

console.log("compare r1, r2", Rabbit.compareBySpeed(rabbit1, rabbit2));

rabbit2.run();

console.log("rabbit 2 after run", rabbit2.speed);

rabbit1.hide();
