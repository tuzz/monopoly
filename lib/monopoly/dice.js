const Die = require("./dice/die");

class Dice {
  constructor({ dice }) {
    this.dice = dice;
  }

  roll() {
    this.total = 0;

    for (const die of this.dice) {
      die.roll();
      this.total += die.number;
    }
  }
}

Dice.SINGLETON = new Dice({ dice: [Die.FIRST, Die.SECOND] });

module.exports = Dice;
