class Die {
  constructor({ faces, number }) {
    this.faces = faces;
    this.number = number;
  }

  roll() {
    this.number = Math.floor(Math.random() * this.faces + 1);
  }
}

Die.FIRST = new Die({ faces: 6 });
Die.SECOND = new Die({ faces: 6 });

module.exports = Die;
