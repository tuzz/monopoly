"use strict";

const DescribedClass = lib("monopoly/board/go");

describe("Go", () => {
  it("has a name and salary", () => {
    const go = new DescribedClass({ name: "foo", salary: 123 });

    expect(go.name).toEqual("foo");
    expect(go.salary).toEqual(123);
  });

  it("pre-defines a singleton constant", () => {
    const go = DescribedClass.SINGLETON;

    expect(go.name).toEqual("GO");
    expect(go.salary).toEqual(200);
  });
});
