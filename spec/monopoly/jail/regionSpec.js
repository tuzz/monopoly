"use strict";

const DescribedClass = lib("monopoly/jail/region");

describe("Region", () => {
  it("has a name", () => {
    const region = new DescribedClass({ name: "foo" });
    expect(region.name).toEqual("foo");
  });

  it("pre-defines constants", () => {
    const inJail = DescribedClass.IN_JAIL;
    expect(inJail.name).toEqual("In Jail");

    const justVisiting = DescribedClass.JUST_VISITING;
    expect(justVisiting.name).toEqual("Just Visiting");
  });
});
