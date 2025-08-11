'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return an object', () => {
    expect(typeof getHumanAge(3,3))
      .toBe('object');
  });

  test('should return [0, 0] for zero arguments', () => {
    expect(getHumanAge(0,0))
      .toStrictEqual([0,0])
  })

  test('should return [21, 17] for catAge = 100 and dogAge = 100', () => {
    expect(getHumanAge(100,100))
      .toStrictEqual([21, 17])
  })

  test('should return [1, 1] for catAge = 23 and dogAge = 23', () => {
    expect(getHumanAge(23,23))
      .toStrictEqual([1, 1])
  })

  test('should return [2, 2] for catAge = 24 and dogAge = 24', () => {
    expect(getHumanAge(24,24))
      .toStrictEqual([2, 2])
  })

  test('should return [1, 2] for catAge = 23 and dogAge = 24', () => {
    expect(getHumanAge(23,24))
      .toStrictEqual([1, 2])
  })

  test('should return a values with default arguments', () => {
    expect(getHumanAge())
      .toBe([0,0])
  })
});
