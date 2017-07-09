class RailwayStation {
  constructor({ name, price }) {
    this.name = name;
    this.price = price;
  }
}

RailwayStation.KINGS_CROSS = new RailwayStation({
  name: "Kings Cross", price: 200 });

RailwayStation.MARYLEBONE = new RailwayStation({
  name: "Marylebone", price: 200 });

RailwayStation.FENCHURCH_STREET= new RailwayStation({
  name: "Fenchurch Street", price: 200 });

RailwayStation.LIVERPOOL_STREET = new RailwayStation({
  name: "Liverpool Street", price: 200 });

module.exports = RailwayStation;
