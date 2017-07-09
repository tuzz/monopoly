"use strict";

const DescribedClass = lib("monopoly/board/goToJail");

describe("GoToJail", () => {
  it("has a name", () => {
    const goToJail = new DescribedClass({ name: "foo" });
    expect(goToJail.name).toEqual("foo");
  });

  it("pre-defines a singleton constant", () => {
    const goToJail = DescribedClass.SINGLETON;
    expect(goToJail.name).toEqual("Go To Jail");
  });
});
