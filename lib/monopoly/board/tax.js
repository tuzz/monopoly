class Tax {
  constructor({ name, amount }) {
    this.name = name;
    this.amount = amount;
  }
}

Tax.INCOME_TAX = new Tax({
  name: "Income Tax", amount: 200 });

Tax.SUPER_TAX = new Tax({
  name: "Super Tax", amount: 100 });

module.exports = Tax;
