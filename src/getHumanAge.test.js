'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should count catAge and dogAge in human years', () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  test('should return [0, 0] for catAge and dogAge both less than 15', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return [21, 17] for catAge 100 and dogAge 100', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
