class Go {
  constructor({ name, salary }) {
    this.name = name;
    this.salary = salary;
  }
}

Go.SINGLETON = new Go({ name: "GO", salary: 200 });

module.exports = Go;
