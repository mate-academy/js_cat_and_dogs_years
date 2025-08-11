'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test(`should return zeros if animal age < 15`, () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test(`should return zeros if inputs are 0`, () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  }
  );

  test(`should return units`, () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test(`should return twos`, () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test(`should return threes`, () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
  });

  test(`should return 4 for cat and 3 for dog`, () => {
    expect(getHumanAge(32, 29)).toEqual([4, 3]);
  });

  test(`should return 21 for cat and 17 for dog`, () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
