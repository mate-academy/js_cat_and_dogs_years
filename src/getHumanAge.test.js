'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test(`should return zero if both animalAge are < 1`, () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test(`should return zero if both animalAge are < 15`, () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test(`should return 1 if both animalAge are = 15`, () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test(`should return 1 if both animalAge are < 24`, () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  test(`should return 2 if both animalAge are = 24`, () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test(`should return 2 if animalAge are = 27`, () => {
    expect(getHumanAge(27, 27))
      .toEqual([2, 2]);
  });

  test(`should return 3 if catAge is >= 28 and 2 if dogAge is <= 28`, () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  test(`should return 3 if catAge is >= 28 and 3 if dogAge is >= 29`, () => {
    expect(getHumanAge(29, 29))
      .toEqual([3, 3]);
  });

  test(`should return proper value if animalAge is 29`, () => {
    expect(getHumanAge(99, 99))
      .toEqual([20, 17]);
  });

  test(`should round down if it is not whole number`, () => {
    expect(getHumanAge(15.3, 14.7))
      .toEqual([1, 0]);
  });
});
