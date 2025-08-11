'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test(`should be declared`, () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test(`should return zeros if getHumanAge(0, 0)`, () => {
    expect(getHumanAge(0, 0))
      .toStrictEqual([0, 0]);
  });

  test(`should return zeros if getHumanAge(14, 14)`, () => {
    expect(getHumanAge(14, 14))
      .toStrictEqual([0, 0]);
  });

  test(`should return units if getHumanAge(15, 15)`, () => {
    expect(getHumanAge(15, 15))
      .toStrictEqual([1, 1]);
  });

  test(`should return units if getHumanAge(23, 23)`, () => {
    expect(getHumanAge(23, 23))
      .toStrictEqual([1, 1]);
  });

  test(`should return dueces if getHumanAge(24, 24)`, () => {
    expect(getHumanAge(24, 24))
      .toStrictEqual([2, 2]);
  });

  test(`should return units if getHumanAge(27, 27)`, () => {
    expect(getHumanAge(27, 27))
      .toStrictEqual([2, 2]);
  });

  test(`should return the listed years to human years`,
    () => {
      expect(getHumanAge(28, 28))
        .toStrictEqual([3, 2]);
    });

  test(`should return the listed years to human years`,
    () => {
      expect(getHumanAge(100, 100))
        .toStrictEqual([21, 17]);
    });
});
