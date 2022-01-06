'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return an object', () => {
    expect(typeof getHumanAge())
      .toBe('object');
  });

  test('should return 0 for 0 catAge', () => {
    expect(getHumanAge(0, 15))
      .toEqual([0, 1]);
  });

  test('should return 0 for 0 dogAge', () => {
    expect(getHumanAge(15, 0))
      .toEqual([1, 0]);
  });

  test('should return integer when input is non-integer', () => {
    expect(getHumanAge(15.4, 15.4))
      .toEqual([1, 1]);
  });

  test('should return 3 for 28 catAge', () => {
    expect(getHumanAge(28, 14))
      .toEqual([3, 0]);
  });

  test('should return 3 for 29 dogAge', () => {
    expect(getHumanAge(14, 29))
      .toEqual([0, 3]);
  });

  test('should return NaN when input with letters', () => {
    expect(getHumanAge('z', 'z'))
      .toEqual([NaN, NaN]);
  });
});
