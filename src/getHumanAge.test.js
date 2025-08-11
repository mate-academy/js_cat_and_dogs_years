'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return zero if years less than 15', () => {
    const actual = getHumanAge(14, 14);

    expect(actual)
      .toEqual([0, 0]);
  });

  test('should return one if years less than 15 + 9', () => {
    const actual = getHumanAge(19, 23);

    expect(actual)
      .toEqual([1, 1]);
  });

  test('should return 2 if years equal to 24', () => {
    const actual = getHumanAge(24, 24);

    expect(actual)
      .toEqual([2, 2]);
  });

  test('should return correct years according calculation', () => {
    const actual = getHumanAge(100, 100);

    expect(actual)
      .toEqual([21, 17]);
  });
});
