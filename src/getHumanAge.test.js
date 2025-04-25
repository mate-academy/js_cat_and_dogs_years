'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return 0 human years for animal years less than 15', () => {
    expect(getHumanAge(0, 14))
      .toEqual([0, 0]);
  });

  test('should return 1 for animal years 15 to 23 inclusive', () => {
    expect(getHumanAge(15, 23))
      .toEqual([1, 1]);
  });

  test('should return 2 for animal years 23 to 73 inclusive', () => {
    expect(getHumanAge(27, 24))
      .toEqual([2, 2]);
  });

  test('should return 3 for a 28-year-old cat and 2 for a 28-year-old dog', () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  test('should return 1 human year for every 4 cat years or 5 dog years beyond 24', () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });
});
