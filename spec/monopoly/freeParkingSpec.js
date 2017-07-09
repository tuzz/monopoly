"use strict";

const DescribedClass = lib("monopoly/freeParking");

describe("FreeParking", () => {
  it("has a name", () => {
    const freeParking = new DescribedClass({ name: "foo" });
    expect(freeParking.name).toEqual("foo");
  });

  it("pre-defines a singleton constant", () => {
    const freeParking = DescribedClass.SINGLETON;
    expect(freeParking.name).toEqual("Free Parking");
  });
});
