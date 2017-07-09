class Utility {
  constructor({ name, price }) {
    this.name = name;
    this.price = price;
  }
}

Utility.ELECTRIC_COMPANY = new Utility({
  name: "Electric Company", price: 150 });

Utility.WATER_WORKS = new Utility({
  name: "Water Works", price: 150 });

module.exports = Utility;
