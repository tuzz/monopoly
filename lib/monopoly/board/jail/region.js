class Region {
  constructor({ name }) {
    this.name = name;
  }
}

Region.IN_JAIL = new Region({ name: "In Jail" });
Region.JUST_VISITING = new Region({ name: "Just Visiting" });

module.exports = Region;
