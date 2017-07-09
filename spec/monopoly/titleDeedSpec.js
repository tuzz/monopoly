"use strict";

const DescribedClass = lib("monopoly/titleDeed");
const Board = lib("monopoly/board");

describe("TitleDeed", () => {
  it("has a property, rentLevels and costOfHouses", () => {
    const deed = new DescribedClass({
      property: "foo",
      rentLevels: [1, 2, 3],
      costOfHouses: 123
    });

    expect(deed.property).toEqual("foo");
    expect(deed.rentLevels).toEqual([1, 2, 3]);
    expect(deed.costOfHouses).toEqual(123);
  });

  it("returns a name equal to the property name", () => {
    const deed = new DescribedClass({ property: { name: "foo" }});
    expect(deed.name).toEqual("foo");
  });

  it("returns a mortgageValue equal to half the property price", () => {
    const deed = new DescribedClass({ property: { price: 100 }});
    expect(deed.mortgageValue).toEqual(50);
  });

  it("returns a costOfHotels equal to costOfHouses", () => {
    const deed = new DescribedClass({ costOfHouses: 123 });
    expect(deed.costOfHouses).toEqual(123);
  });

  it("pre-defines title deed constants for each property", () => {
    const trafalgar = DescribedClass.TRAFALGAR_SQUARE;
    expect(trafalgar.property).toEqual(Board.BuildingSite.TRAFALGAR_SQUARE);
    expect(trafalgar.costOfHouses).toEqual(150);
    expect(trafalgar.rentLevels).toEqual([20, 100, 300, 750, 925, 1100]);

    const kingsCross = DescribedClass.KINGS_CROSS;
    expect(kingsCross.property).toEqual(Board.RailwayStation.KINGS_CROSS);
    expect(kingsCross.costOfHouses).toBeUndefined();
    expect(kingsCross.rentLevels).toEqual([25, 50, 100, 200]);

    const waterWorks = DescribedClass.WATER_WORKS;
    expect(waterWorks.property).toEqual(Board.Utility.WATER_WORKS);
    expect(waterWorks.costOfHouses).toBeUndefined();
    expect(waterWorks.rentLevels).toEqual([4, 10]);
  });
});
