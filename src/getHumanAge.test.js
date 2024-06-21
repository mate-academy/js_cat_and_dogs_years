'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return an array with two elements', () => {
    const result = getHumanAge(10, 100);

    expect(result).toHaveLength(2);
  });

  test('should return two integers', () => {
    expect(getHumanAge(27, 27))
      .toStrictEqual([2, 2]);
  });

  test(`should return 0 for cat and dog,
    when they are less than 15 years old`, () => {
    expect(getHumanAge(0, 14))
      .toStrictEqual([0, 0]);
  });

  test('should return 1 for cat and dog between 15 and 23 years old', () => {
    expect(getHumanAge(15, 23))
      .toStrictEqual([1, 1]);
  });

  test(`should return valid data for cat and dog
    when they are older than 23 years old`, () => {
    expect(getHumanAge(100, 100))
      .toStrictEqual([21, 17]);
  });
});
