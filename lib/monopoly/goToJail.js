class GoToJail {
  constructor({ name }) {
    this.name = name;
  }
}

GoToJail.SINGLETON = new GoToJail({ name: "Go To Jail" });

module.exports = GoToJail;
