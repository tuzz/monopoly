"use strict";

const DescribedClass = lib("hello");

describe("Hello", () => {
  it("says hello", () => {
    const hello = new DescribedClass("Chris");
    expect(hello.say()).toEqual("Hello Chris");
  });
});
