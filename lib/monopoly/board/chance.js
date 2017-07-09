class Chance {
  constructor({ name }) {
    this.name = name;
  }
}

Chance.FIRST = new Chance({ name: "Chance" });
Chance.SECOND = new Chance({ name: "Chance" });
Chance.THIRD = new Chance({ name: "Chance" });

module.exports = Chance;
