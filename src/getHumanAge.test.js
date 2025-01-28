'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('should return [0, 0] if the animal age is 0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return [0, 0] if the animal age is less than 15', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return [1, 1] for animal ages between 15 and 24', () => {
    expect(getHumanAge(23, 15)).toEqual([1, 1]);
  });

  test('should return [2, 2] if the animal age is greater than 24', () => {
    expect(getHumanAge(24, 27)).toEqual([2, 2]);
  });

  test('should return [3, 2] for cat age 28 and dog age 28', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('should return [21, 17] if the cat age and dog age are both 100', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
