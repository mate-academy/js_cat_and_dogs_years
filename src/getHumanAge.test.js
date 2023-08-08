'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return an array', () => {
    const result = getHumanAge(1, 1);

    expect(result)
      .toBeInstanceOf(Array);
  });

  test('should return two 0 if ages a less then 15', () => {
    const result = getHumanAge(14, 14);

    expect(result)
      .toEqual([0, 0]);
  });

  test('should return two 1 if ages a less then 24', () => {
    const result = getHumanAge(16, 21);

    expect(result)
      .toEqual([1, 1]);
  });

  test('should return two 2 if ages between 24 and 27', () => {
    const result = getHumanAge(24, 25);

    expect(result)
      .toEqual([2, 2]);
  });

  test('returned cat age should be bigger than dog age', () => {
    const result = getHumanAge(28, 28);
    const catAge = result[0];
    const dogAge = result[1];

    expect(catAge)
      .toBeGreaterThan(dogAge);
  });
});
