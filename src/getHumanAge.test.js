'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return 0 human years for 0 dog / cat years', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('should return numbers without a remainder', () => {
    expect(getHumanAge(14, 23))
      .toEqual([0, 1]);
  });

  test('should handle large numbers correctly', () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });
});
