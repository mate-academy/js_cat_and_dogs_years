'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('Should have expected values', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('Should have expected values with rounds', () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  test('Should have expected values with rounds', () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });

  test('Should return [0, 0] if ages < 15', () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test('Should return [0, 0] for 0 ages', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });
});
