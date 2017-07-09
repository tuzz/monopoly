"use strict";

const DescribedClass = lib("monopoly/dice");

describe("Dice", () => {
  it("can be rolled", () => {
    const dice = DescribedClass.SINGLETON;

    for (let i = 0; i < 100; i += 1) {
      dice.roll();

      expect(dice.total >= 2).toBeTruthy();
      expect(dice.total <= 12).toBeTruthy();
    }
  });
});
