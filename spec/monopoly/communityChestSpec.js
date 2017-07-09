"use strict";

const DescribedClass = lib("monopoly/communityChest");

describe("CommunityChest", () => {
  it("pre-defines three community chests", () => {
    const first = DescribedClass.FIRST;
    expect(first).toBeDefined();

    const second = DescribedClass.SECOND;
    expect(second).toBeDefined();

    const third = DescribedClass.THIRD;
    expect(third).toBeDefined();
  });
});