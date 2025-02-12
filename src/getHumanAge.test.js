'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should be zero if animal years < 15', () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test('should be [1, 1] if animal years < 24', () => {
    expect(getHumanAge(23, 15))
      .toEqual([1, 1]);
  });

  test('should be correct ansver if animal years > 24', () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });
});
