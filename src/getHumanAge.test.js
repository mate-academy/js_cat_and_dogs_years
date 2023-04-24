'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should return an array', () => {
    const result = getHumanAge();
    
    expect(result).toBeInstanceOf(Array);
  });

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return 0 if adding zeroes', () => {
    expect(getHumanAge(0, 0))
      .toStrictEqual([0, 0]);
  });

  test('should return 0 if animal`s age is 14', () => {
    expect(getHumanAge(14, 14))
      .toStrictEqual([0, 0]);
  });

  test('should return 1 if animal`s age is 15', () => {
    expect(getHumanAge(15, 15))
      .toStrictEqual([1, 1]);
  });

  test('should return 2 if animal`s age is 24 ', () => {
    expect(getHumanAge(24, 24))
      .toStrictEqual([2, 2]);
  });

  test('should return 2 if animal`s age is 27', () => {
    expect(getHumanAge(27, 27))
      .toStrictEqual([2, 2]);
  });

  test('should return 3 if cat`s age is 28 and dog`s age is 29 ', () => {
    expect(getHumanAge(28, 29))
      .toStrictEqual([3, 3]);
  });

  test('should return 7 if cat`s age is 44 and dog`s is 53 ', () => {
    expect(getHumanAge(44, 53))
      .toStrictEqual([7, 7]);
  });
});
