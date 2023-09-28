'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test(`should return 0 if values < 15`, () => {
    expect(getHumanAge(13, 5))
      .toEqual([0, 0]);
  });

  test(`should return 1 if values >= 15 and < 24`, () => {
    expect(getHumanAge(15, 22))
      .toEqual([1, 1]);
  });

  test(`should return 2 if catAge >= 24 and < 28`, () => {
    expect(getHumanAge(24, 0))
      .toEqual([2, 0]);
  });

  test(`should return 2 if dogAge >= 24 and < 29`, () => {
    expect(getHumanAge(0, 24))
      .toEqual([0, 2]);
  });

  test(`should add 1 to first value for every 4 catAge after 24`, () => {
    expect(getHumanAge(28, 0))
      .toEqual([3, 0]);
  });

  test(`should add 1 to second value for every 5 dogAge after 24`, () => {
    expect(getHumanAge(0, 29))
      .toEqual([0, 3]);
  });
});
