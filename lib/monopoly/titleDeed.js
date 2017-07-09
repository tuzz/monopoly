const BuildingSite = require("./board/buildingSite");
const RailwayStation = require("./board/railwayStation");
const Utility = require("./board/utility");

class TitleDeed {
  constructor({ property, rentLevels, costOfHouses }) {
    this.property = property;
    this.rentLevels = rentLevels;
    this.costOfHouses = costOfHouses;
  }

  get name() {
    return this.property.name;
  }

  get mortgageValue() {
    return this.property.price / 2;
  }

  get costOfHotels() {
    return this.costOfHouses;
  }
}

TitleDeed.ELECTRIC_COMPANY = new TitleDeed({
  property: Utility.ELECTRIC_COMPANY, rentLevels: [4, 10] });

TitleDeed.WATER_WORKS = new TitleDeed({
  property: Utility.WATER_WORKS, rentLevels: [4, 10] });

TitleDeed.KINGS_CROSS = new TitleDeed({
  property: RailwayStation.KINGS_CROSS, rentLevels: [25, 50, 100, 200] });

TitleDeed.MARYLEBONE = new TitleDeed({
  property: RailwayStation.MARYLEBONE, rentLevels: [25, 50, 100, 200] });

TitleDeed.FENCHURCH_STREET = new TitleDeed({
  property: RailwayStation.FENCHURCH_STREET, rentLevels: [25, 50, 100, 200] });

TitleDeed.LIVERPOOL_STREET = new TitleDeed({
  property: RailwayStation.LIVERPOOL_STREET, rentLevels: [25, 50, 100, 200] });

TitleDeed.OLD_KENT_ROAD = new TitleDeed({
  property: BuildingSite.OLD_KENT_ROAD,
  rentLevels: [2, 10, 30, 90, 160, 250], costOfHouses: 50 });

TitleDeed.WHITECHAPEL_ROAD = new TitleDeed({
  property: BuildingSite.WHITECHAPEL_ROAD,
  rentLevels: [4, 20, 60, 180, 320, 450], costOfHouses: 50 });

TitleDeed.THE_ANGEL_ISLINGTON = new TitleDeed({
  property: BuildingSite.THE_ANGEL_ISLINGTON,
  rentLevels: [6, 30, 90, 270, 400, 550], costOfHouses: 50 });

TitleDeed.EUSTON_ROAD = new TitleDeed({
  property: BuildingSite.EUSTON_ROAD,
  rentLevels: [6, 30, 90, 270, 400, 550], costOfHouses: 50 });

TitleDeed.PENTONVILLE_ROAD = new TitleDeed({
  property: BuildingSite.PENTONVILLE_ROAD,
  rentLevels: [8, 40, 100, 300, 450, 600], costOfHouses: 50 });

TitleDeed.PALL_MALL = new TitleDeed({
  property: BuildingSite.PALL_MALL,
  rentLevels: [10, 50, 150, 450, 625, 750], costOfHouses: 100 });

TitleDeed.WHITEHALL = new TitleDeed({
  property: BuildingSite.WHITEHALL,
  rentLevels: [10, 50, 150, 450, 625, 750], costOfHouses: 100 });

TitleDeed.NORTHUMBERLAND_AVENUE = new TitleDeed({
  property: BuildingSite.NORTHUMBERLAND_AVENUE,
  rentLevels: [12, 60, 180, 500, 700, 900], costOfHouses: 100 });

TitleDeed.BOW_STREET = new TitleDeed({
  property: BuildingSite.BOW_STREET,
  rentLevels: [14, 70, 200, 550, 750, 950], costOfHouses: 100 });

TitleDeed.MARLBOROUGH_STREET = new TitleDeed({
  property: BuildingSite.MARLBOROUGH_STREET,
  rentLevels: [14, 70, 200, 550, 750, 950], costOfHouses: 100 });

TitleDeed.VINE_STREET = new TitleDeed({
  property: BuildingSite.VINE_STREET,
  rentLevels: [16, 80, 220, 600, 800, 1000], costOfHouses: 100 });

TitleDeed.STRAND = new TitleDeed({
  property: BuildingSite.STRAND,
  rentLevels: [18, 90, 250, 700, 875, 1050], costOfHouses: 150 });

TitleDeed.FLEET_STREET = new TitleDeed({
  property: BuildingSite.FLEET_STREET,
  rentLevels: [18, 90, 250, 700, 875, 1050], costOfHouses: 150 });

TitleDeed.TRAFALGAR_SQUARE = new TitleDeed({
  property: BuildingSite.TRAFALGAR_SQUARE,
  rentLevels: [20, 100, 300, 750, 925, 1100], costOfHouses: 150 });

TitleDeed.LEICESTER_SQUARE = new TitleDeed({
  property: BuildingSite.LEICESTER_SQUARE,
  rentLevels: [22, 110, 330, 800, 975, 1150], costOfHouses: 150 });

TitleDeed.COVENTRY_STREET = new TitleDeed({
  property: BuildingSite.COVENTRY_STREET,
  rentLevels: [22, 110, 330, 800, 975, 1150], costOfHouses: 150 });

TitleDeed.PICCADILLY = new TitleDeed({
  property: BuildingSite.PICCADILLY,
  rentLevels: [24, 120, 360, 850, 1025, 1200], costOfHouses: 150 });

TitleDeed.REGENT_STREET = new TitleDeed({
  property: BuildingSite.REGENT_STREET,
  rentLevels: [26, 130, 390, 900, 1100, 1275], costOfHouses: 200 });

TitleDeed.OXFORD_STREET = new TitleDeed({
  property: BuildingSite.OXFORD_STREET,
  rentLevels: [26, 130, 390, 900, 1100, 1275], costOfHouses: 200 });

TitleDeed.BOND_STREET = new TitleDeed({
  property: BuildingSite.BOND_STREET,
  rentLevels: [28, 150, 450, 1000, 1200, 1400], costOfHouses: 200 });

TitleDeed.PARK_LANE = new TitleDeed({
  property: BuildingSite.PARK_LANE,
  rentLevels: [35, 175, 500, 1100, 1300, 1500], costOfHouses: 200 });

TitleDeed.MAYFAIR = new TitleDeed({
  property: BuildingSite.MAYFAIR,
  rentLevels: [50, 200, 600, 1400, 1700, 2000], costOfHouses: 200 });

module.exports = TitleDeed;
