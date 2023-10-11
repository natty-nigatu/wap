Array.prototype.sort = function () {
  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j < this.length; j++) {
      if (this[j] < this[i]) {
        let temp = this[j];
        this[j] = this[i];
        this[i] = temp;
      }
    }
  }
};

let array = [4, 6, 2, 3, 1, 5, 9, 7, 8];

array.sort();

console.log(array);
