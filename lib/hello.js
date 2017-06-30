class Hello {
  constructor(name) {
    this.name = name;
  }

  say() {
    return `Hello ${this.name}`;
  }
}

module.exports = Hello;
