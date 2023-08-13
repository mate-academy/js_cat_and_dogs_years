'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return 0 for cats and dogs when age is under 15', () => {
    expect(getHumanAge(8, 8))
      .toEqual([0, 0]);
  });

  test('should return 1 for cats and dogs when age is equal 15', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('should return 1 for when age is between 15 and 24', () => {
    expect(getHumanAge(16, 16))
      .toEqual([1, 1]);
  });

  test('should return 2 for cats and dogs when age is equal 24', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('should return 2 for cats age under 28 and dogs under 29 ', () => {
    expect(getHumanAge(27, 28))
      .toEqual([2, 2]);
  });

  test('should return 3 for 28 for cats and 29 for dogs', () => {
    expect(getHumanAge(28, 29))
      .toEqual([3, 3]);
  });

  test('should return 3 for cats under 32 and dogs under 34', () => {
    expect(getHumanAge(31, 33))
      .toEqual([3, 3]);
  });

  test('should return 4 for cats 32 and dogs 34', () => {
    expect(getHumanAge(32, 34))
      .toEqual([4, 4]);
  });

  test('should return 5 for cats 36 and dogs 39', () => {
    expect(getHumanAge(36, 39))
      .toEqual([5, 5]);
  });
});
