const Region = require("./jail/region");

class Jail {
  constructor({ name, regions }) {
    this.name = name;
    this.regions = regions;
  }
}

Jail.SINGLETON = new Jail({
  name: "Jail", regions: [Region.IN_JAIL, Region.JUST_VISITING] });

module.exports = Jail;
module.exports.Region = Region;
