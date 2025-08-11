'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return 0 for 0 age', () => {
    const expected = [0, 0];

    expect(getHumanAge(0, 0))
      .toEqual(expected);
  });

  test('should return 0 for cat or dog under 15', () => {
    const expected = [0, 0];

    expect(getHumanAge(14, 14))
      .toEqual(expected);
  });

  test('should work for cat and dog above 15', () => {
    const expected = [1, 1];

    expect(getHumanAge(23, 23))
      .toEqual(expected);
  });

  test('should work for cat and dog above 24', () => {
    const expected = [2, 2];

    expect(getHumanAge(24, 24))
      .toEqual(expected);
  });

  test('should work for cat and dog with bigger number', () => {
    const expected = [21, 17];

    expect(getHumanAge(100, 100))
      .toEqual(expected);
  });
});
