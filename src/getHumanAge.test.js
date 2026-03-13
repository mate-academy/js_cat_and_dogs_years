'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('Should return correct array length', () => {
    const result = getHumanAge(3, 5);

    expect(result).toHaveLength(2);
  });

  test('Should return zero value for zero', () => {
    const result = getHumanAge(0, 0);

    expect(result).toEqual([0, 0]);
  });

  test('Should return zero for age < 15', () => {
    const result = getHumanAge(14, 14);

    expect(result).toEqual([0, 0]);
  });

  test('Should return one for age >= 15 and < 24', () => {
    const result = getHumanAge(15, 15);

    expect(result).toEqual([1, 1]);
  });

  test('Should return one year if < 24', () => {
    const result = getHumanAge(23, 23);

    expect(result).toEqual([1, 1]);
  });

  test('Should return additional year if >= 24', () => {
    const result = getHumanAge(24, 24);

    expect(result).toEqual([2, 2]);
  });

  test('Should return two years if > 24', () => {
    const result = getHumanAge(27, 27);

    expect(result).toEqual([2, 2]);
  });

  test('Should return additional year every 4 years after 24 for cat', () => {
    const result = getHumanAge(28, 28);

    expect(result).toEqual([3, 2]);
  });

  test('Should return additional year every 5 years after 24 for dog', () => {
    const result = getHumanAge(100, 100);

    expect(result).toEqual([21, 17]);
  });
});
