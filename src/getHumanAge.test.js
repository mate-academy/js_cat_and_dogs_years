'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should be equal to zero if the ages of pets are also zero', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('should be equal to zero if the ages of pets are less than 15', () => {
    expect(getHumanAge(13, 12))
      .toEqual([0, 0]);
  });

  test('should be equal to 1 if the ages of pets equal to the first edge value', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('should be equal to 1 if the age of pets are in range 16 - 23', () => {
    expect(getHumanAge(17, 23))
      .toEqual([1, 1]);
  });

  test('should be equal to 2 if the ages of pets equal to the second edge value', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('should be equal to 2 if the ages of pets are in range 25 - 27', () => {
    expect(getHumanAge(26, 27))
      .toEqual([2, 2]);
  });

  test('should be equal to 3 and 2 if the cat age is in range 28 - 31 and the dog age is in range 24 - 29', () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  test('should be equal to 21 and 17 if the cat age is 100 and the dog age is 100', () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });
});
