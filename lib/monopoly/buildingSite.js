class BuildingSite {
  constructor({ name, price, colour }) {
    this.name = name;
    this.price = price;
    this.colour = colour;
  }
}

BuildingSite.OLD_KENT_ROAD = new BuildingSite({
  name: "Old Kent Road", price: 60, colour: "brown" });

BuildingSite.WHITECHAPEL_ROAD = new BuildingSite({
  name: "Whitechapel Road", price: 60, colour: "brown" });

BuildingSite.THE_ANGEL_ISLINGTON = new BuildingSite({
  name: "The Angel Islington", price: 100, colour: "lightBlue" });

BuildingSite.EUSTON_ROAD = new BuildingSite({
  name: "Euston Road", price: 100, colour: "lightBlue" });

BuildingSite.PENTONVILLE_ROAD = new BuildingSite({
  name: "Pentonville Road", price: 120, colour: "lightBlue" });

BuildingSite.PALL_MALL = new BuildingSite({
  name: "Pall Mall", price: 140, colour: "pink" });

BuildingSite.WHITEHALL = new BuildingSite({
  name: "Whitehall", price: 140, colour: "pink" });

BuildingSite.NORTHUMBERLAND_AVENUE = new BuildingSite({
  name: "Northumberland Avenue", price: 160, colour: "pink" });

BuildingSite.BOW_STREET = new BuildingSite({
  name: "Bow Street", price: 180, colour: "orange" });

BuildingSite.MARLBOROUGH_STREET = new BuildingSite({
  name: "Marlborough Street", price: 180, colour: "orange" });

BuildingSite.VINE_STREET = new BuildingSite({
  name: "Vine Street", price: 200, colour: "orange" });

BuildingSite.STRAND = new BuildingSite({
  name: "Strand", price: 220, colour: "red" });

BuildingSite.FLEET_STREET = new BuildingSite({
  name: "Fleet Street", price: 220, colour: "red" });

BuildingSite.TRAFALGAR_SQUARE = new BuildingSite({
  name: "Trafalgar Square", price: 240, colour: "red" });

BuildingSite.LEICESTER_SQUARE = new BuildingSite({
  name: "Leicester Square", price: 260, colour: "yellow" });

BuildingSite.COVENTRY_STREET = new BuildingSite({
  name: "Coventry Street", price: 260, colour: "yellow" });

BuildingSite.PICCADILLY = new BuildingSite({
  name: "Piccadilly", price: 280, colour: "yellow" });

BuildingSite.REGENT_STREET = new BuildingSite({
  name: "Regent Street", price: 300, colour: "green" });

BuildingSite.OXFORD_STREET = new BuildingSite({
  name: "Oxford Street", price: 300, colour: "green" });

BuildingSite.BOND_STREET = new BuildingSite({
  name: "Bond Street", price: 320, colour: "green" });

BuildingSite.PARK_LANE = new BuildingSite({
  name: "Park Lane", price: 350, colour: "darkBlue" });

BuildingSite.MAYFAIR = new BuildingSite({
  name: "Mayfair", price: 400, colour: "darkBlue" });

module.exports = BuildingSite;
