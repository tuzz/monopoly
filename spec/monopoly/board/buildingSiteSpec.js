"use strict";

const DescribedClass = lib("monopoly/board/buildingSite");

describe("BuildingSite", () => {
  it("has a name, price and colour", () => {
    const site = new DescribedClass({ name: "foo", price: 123, colour: "red" });

    expect(site.name).toEqual("foo");
    expect(site.price).toEqual(123);
    expect(site.colour).toEqual("red");
  });

  it("pre-defines constants for standard monopoly sites", () => {
    const site = DescribedClass.TRAFALGAR_SQUARE;

    expect(site.name).toEqual("Trafalgar Square");
    expect(site.price).toEqual(240);
    expect(site.colour).toEqual("red");
  });
});
