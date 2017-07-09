"use strict";

const DescribedClass = lib("monopoly/dice/die");

describe("Die", () => {
  it("can be rolled", () => {
    const die = DescribedClass.FIRST;

    for (let i = 0; i < 100; i += 1) {
      die.roll();

      expect(die.number >= 1).toBeTruthy();
      expect(die.number <= 6).toBeTruthy();
    }
  });
});
