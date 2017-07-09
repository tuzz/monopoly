class FreeParking {
  constructor({ name }) {
    this.name = name;
  }
}

FreeParking.SINGLETON = new FreeParking({ name: "Free Parking" });

module.exports = FreeParking;
