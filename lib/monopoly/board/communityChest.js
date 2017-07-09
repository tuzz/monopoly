class CommunityChest {
  constructor({ name }) {
    this.name = name;
  }
}

CommunityChest.FIRST = new CommunityChest({
  name: "Community Chest" });

CommunityChest.SECOND = new CommunityChest({
  name: "Community Chest" });

CommunityChest.THIRD = new CommunityChest({
  name: "Community Chest" });

module.exports = CommunityChest;
