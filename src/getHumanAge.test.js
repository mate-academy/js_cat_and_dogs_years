'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return an array of 2 items', () => {
    expect(getHumanAge(0, 0))
      .toHaveLength(2);
  });

  test('should return 0 if numbers < 15', () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test('should return 1 if numbers < 24', () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  test('should return 2 if numbers < 27', () => {
    expect(getHumanAge(27, 27))
      .toEqual([2, 2]);
  });

  test('should return 3 if cat years < 32 and dog years < 33', () => {
    expect(getHumanAge(31, 32))
      .toEqual([3, 3]);
  });
});
