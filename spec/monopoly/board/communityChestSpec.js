"use strict";

const DescribedClass = lib("monopoly/board/communityChest");

describe("CommunityChest", () => {
  it("has a name", () => {
    const chest = new DescribedClass({ name: "foo" });
    expect(chest.name).toEqual("foo");
  });

  it("pre-defines three community chests", () => {
    const first = DescribedClass.FIRST;
    expect(first).toBeDefined();

    const second = DescribedClass.SECOND;
    expect(second).toBeDefined();

    const third = DescribedClass.THIRD;
    expect(third).toBeDefined();
  });
});
