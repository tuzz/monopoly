"use strict";

const DescribedClass = lib("monopoly/chance");

describe("Chance", () => {
  it("pre-defines three chances", () => {
    const first = DescribedClass.FIRST;
    expect(first).toBeDefined();

    const second = DescribedClass.SECOND;
    expect(second).toBeDefined();

    const third = DescribedClass.THIRD;
    expect(third).toBeDefined();
  });
});
