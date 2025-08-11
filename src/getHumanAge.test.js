'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return zeros if catAge and dogAge = 0', () => {
    const result = getHumanAge(0, 0);

    expect(result)
      .toEqual([0, 0]);
  });

  test('should return zeros if catAge and dogAge < 15', () => {
    const result = getHumanAge(0, 0);

    expect(result)
      .toEqual([0, 0]);
  });

  test('should return 1\'s if catAge and dogAge are between 15 and 23', () => {
    const result = getHumanAge(23, 23);

    expect(result)
      .toEqual([1, 1]);
  });

  test('should return first number 2 if catAge are between 24 and 27', () => {
    const result = getHumanAge(27, 0);

    expect(result)
      .toEqual([2, 0]);
  });

  test('should return second number 2 if dogAge are between 24 and 28', () => {
    const result = getHumanAge(0, 28);

    expect(result)
      .toEqual([0, 2]);
  });

  test('should return first number 2 if catAge', () => {
    const result = getHumanAge(0, 28);

    expect(result)
      .toEqual([0, 2]);
  });

  test('should return 21 and 17 if catAge and dogAge = 100', () => {
    const result = getHumanAge(100, 100);

    expect(result)
      .toEqual([21, 17]);
  });
});
