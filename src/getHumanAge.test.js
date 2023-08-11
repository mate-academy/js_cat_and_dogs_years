'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('if age of animals = 14,should return [1, 1]', () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test('if age of animals = 15,should return [1, 1]', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('if age of animals = 23,should return [2, 2]', () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  test('if age of animals = 24,should return [2, 2]', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('if age of cat = 27, dog = 27,should return [3, 3]', () => {
    expect(getHumanAge(27, 28))
      .toEqual([2, 2]);
  });

  test('if age of cat = 28, dog = 29,should return [3, 3]', () => {
    expect(getHumanAge(28, 29))
      .toEqual([3, 3]);
  });
});
