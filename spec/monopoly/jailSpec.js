"use strict";

const DescribedClass = lib("monopoly/jail");

describe("Jail", () => {
  it("has a name", () => {
    const jail = new DescribedClass({ name: "foo" });
    expect(jail.name).toEqual("foo");
  });

  it("pre-defines a singleton constant", () => {
    const jail = DescribedClass.SINGLETON;

    const inJail = DescribedClass.Region.IN_JAIL;
    const justVisiting = DescribedClass.Region.JUST_VISITING;

    expect(jail.name).toEqual("Jail");
    expect(jail.regions).toEqual([inJail, justVisiting]);
  });
});
