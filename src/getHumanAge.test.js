'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('should return 0 in case the age is younger than 15', () => {
    expect(getHumanAge(10, 55)).toEqual([0, 8]);
  });

  test('should return 1 if the age is younger then first + second', () => {
    expect(getHumanAge(18, 55)).toEqual([1, 8]);
  });

  test('should return 8 if cat age is 49', () => {
    expect(getHumanAge(49, 55)).toEqual([8, 8]);
  });

  test('should return 8 if dog age is 55', () => {
    expect(getHumanAge(37, 55)).toEqual([5, 8]);
  });
});
