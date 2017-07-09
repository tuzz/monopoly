const Go = require("./board/go");
const BuildingSite = require("./board/buildingSite");
const CommunityChest = require("./board/communityChest");
const Tax = require("./board/tax");
const RailwayStation = require("./board/railwayStation");
const Chance = require("./board/chance");
const Jail = require("./board/jail");
const Utility = require("./board/utility");
const FreeParking = require("./board/freeParking");
const GoToJail = require("./board/goToJail");

class Board {
  constructor({ spaces }) {
    this.spaces = spaces;
  }
}

Board.SINGLETON = new Board({
  spaces: [
    Go.SINGLETON,
    BuildingSite.OLD_KENT_ROAD,
    CommunityChest.FIRST,
    BuildingSite.WHITECHAPEL_ROAD,
    Tax.INCOME_TAX,
    RailwayStation.KINGS_CROSS,
    BuildingSite.THE_ANGEL_ISLINGTON,
    Chance.FIRST,
    BuildingSite.EUSTON_ROAD,
    BuildingSite.PENTONVILLE_ROAD,

    Jail.SINGLETON,
    BuildingSite.PALL_MALL,
    Utility.ELECTRIC_COMPANY,
    BuildingSite.WHITEHALL,
    BuildingSite.NORTHUMBERLAND_AVENUE,
    RailwayStation.MARYLEBONE,
    BuildingSite.BOW_STREET,
    CommunityChest.SECOND,
    BuildingSite.MARLBOROUGH_STREET,
    BuildingSite.VINE_STREET,

    FreeParking.SINGLETON,
    BuildingSite.STRAND,
    Chance.SECOND,
    BuildingSite.FLEET_STREET,
    BuildingSite.TRAFALGAR_SQUARE,
    RailwayStation.FENCHURCH_STREET,
    BuildingSite.LEICESTER_SQUARE,
    BuildingSite.COVENTRY_STREET,
    Utility.WATER_WORKS,
    BuildingSite.PICCADILLY,

    GoToJail.SINGLETON,
    BuildingSite.REGENT_STREET,
    BuildingSite.OXFORD_STREET,
    CommunityChest.THIRD,
    BuildingSite.BOND_STREET,
    RailwayStation.LIVERPOOL_STREET,
    Chance.THIRD,
    BuildingSite.PARK_LANE,
    Tax.SUPER_TAX,
    BuildingSite.MAYFAIR
  ]
});

module.exports = Board;

module.exports.Go = Go;
module.exports.BuildingSite = BuildingSite;
module.exports.CommunityChest = CommunityChest;
module.exports.Tax = Tax;
module.exports.RailwayStation = RailwayStation;
module.exports.Chance = Chance;
module.exports.Jail = Jail;
module.exports.Utility = Utility;
module.exports.FreeParking = FreeParking;
module.exports.GoToJail = GoToJail;
