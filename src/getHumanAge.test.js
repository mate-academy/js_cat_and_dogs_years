'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('Should return an array', () => {
    const result = getHumanAge();

    expect(result).toBeInstanceOf(Array);
  });

  test('Should return correct array length', () => {
    const result = getHumanAge(3, 5);

    expect(result).toHaveLength(2);
  });

  test('Should return zero value for zero', () => {
    const result = getHumanAge(0, 0);

    expect(result).toEqual([0, 0]);
  });

  test('Should return rounded number', () => {
    const result = getHumanAge(30.5, 2);

    expect(result).toEqual([3, 0]);
  });

  test('Should return correct age value', () => {
    const result = getHumanAge(3, 5);

    expect(result).toEqual([0, 0]);
  });

  test('Should return zero for age < 15', () => {
    const result = getHumanAge(14, 14);

    expect(result[0]).toBeLessThan(1);
    expect(result[1]).toBeLessThan(1);
  });

  test('Should return one for age = 15 and < 24', () => {
    const result = getHumanAge(17, 19);

    expect(result).toEqual([1, 1]);
  });

  test('Should return additional year if > 24 for cat', () => {
    const result = getHumanAge(30, 19);

    expect(result).toEqual([3, 1]);
  });

  test('Should return additional year if > 25 for dog', () => {
    const result = getHumanAge(30, 40);

    expect(result).toEqual([3, 5]);
  });
});
