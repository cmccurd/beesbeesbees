var Grub = function() {
  this.age = 0;
  this.color = 'pink';
  this.food = 'jelly';
};

Grub.prototype.eat = function () {
  if (this.food) {
    var result = 'I eat ' + this.food + '.';
    console.log(result);
  }
};