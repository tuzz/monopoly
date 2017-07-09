"use strict";

const DescribedClass = lib("monopoly/utility");

describe("Utility", () => {
  it("has a name and price", () => {
    const utility = new DescribedClass({ name: "foo", price: 123 });

    expect(utility.name).toEqual("foo");
    expect(utility.price).toEqual(123);
  });

  it("pre-defines constants for standard monopoly utilities", () => {
    const utility = DescribedClass.ELECTRIC_COMPANY;

    expect(utility.name).toEqual("Electric Company");
    expect(utility.price).toEqual(150);
  });
});
