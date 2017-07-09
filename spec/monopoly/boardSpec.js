"use strict";

const DescribedClass = lib("monopoly/board");

describe("Board", () => {
  it("has spaces", () => {
    const board = new DescribedClass({ spaces: ["foo", "bar"] });
    expect(board.spaces).toEqual(["foo", "bar"]);
  });

  it("pre-defines a singleton constant", () => {
    const board = DescribedClass.SINGLETON;

    const go = DescribedClass.Go.SINGLETON;
    const piccadilly = DescribedClass.BuildingSite.PICCADILLY;
    const superTax = DescribedClass.Tax.SUPER_TAX;

    expect(board.spaces[0]).toEqual(go);
    expect(board.spaces[29]).toEqual(piccadilly);
    expect(board.spaces[38]).toEqual(superTax);
  });
});
