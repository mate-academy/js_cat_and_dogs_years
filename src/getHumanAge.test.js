'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test.each([
    [0, 0], [14, 14],
  ])('should be 0 human year if age from 0 to 14', (catAge, dogAge) => {
    const result = getHumanAge(catAge, dogAge);

    const expected = [0, 0];

    expect(result).toEqual(expected);
  });

  test.each([
    [15, 15], [23, 23],
  ])('should be 1 human year if age from 15 to 23', (catAge, dogAge) => {
    const result = getHumanAge(catAge, dogAge);

    const expected = [1, 1];

    expect(result).toEqual(expected);
  });

  test.each([
    [24, 24], [27, 27],
  ])('should be 2 human year if age from 24 to 27', (catAge, dogAge) => {
    const result = getHumanAge(catAge, dogAge);

    const expected = [2, 2];

    expect(result).toEqual(expected);
  });

  test('should be for cat 3 years and for dog 2 if age = 28', () => {
    const result = getHumanAge(28, 28);

    const expected = [3, 2];

    expect(result).toEqual(expected);
  });

  test('should be for cat 21 years and for dog 17 if age = 100', () => {
    const result = getHumanAge(100, 100);

    const expected = [21, 17];

    expect(result).toEqual(expected);
  });
});
