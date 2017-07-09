"use strict";

const DescribedClass = lib("monopoly/board/tax");

describe("Tax", () => {
  it("has a name and amount", () => {
    const tax = new DescribedClass({ name: "foo", amount: 123 });

    expect(tax.name).toEqual("foo");
    expect(tax.amount).toEqual(123);
  });

  it("pre-defines constants for standard monopoly taxes", () => {
    const tax = DescribedClass.INCOME_TAX;

    expect(tax.name).toEqual("Income Tax");
    expect(tax.amount).toEqual(200);
  });
});
