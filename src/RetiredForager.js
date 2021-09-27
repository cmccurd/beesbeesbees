var RetiredForagerBee = function() {
  ForagerBee.call(this);
  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';
};
RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);
RetiredForagerBee.prototype.constructor = RetiredForagerBee;

RetiredForagerBee.prototype.forage = function () {
  return 'I am too old, let me play cards instead';
};

RetiredForagerBee.prototype.gamble = function () {
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }
  var treasure = ['gold', 'diamond', 'amulet', 'ring', 'excalibur', 'holy grail'];
  this.treasureChest.push(treasure[getRandomIntInclusive(0, 5)]);
};