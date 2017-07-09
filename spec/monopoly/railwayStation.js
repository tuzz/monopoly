"use strict";

const DescribedClass = lib("monopoly/railwayStation");

describe("RailwayStation", () => {
  it("has a name and price", () => {
    const station = new DescribedClass({ name: "foo", price: 123 });

    expect(station.name).toEqual("foo");
    expect(station.price).toEqual(123);
  });

  it("pre-defines constants for standard monopoly stations", () => {
    const station = DescribedClass.KINGS_CROSS;

    expect(station.name).toEqual("Kings Cross");
    expect(station.price).toEqual(200);
  });
});
