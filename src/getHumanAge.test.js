'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return correct value for dog and cat if age is 0', () => {
    const value = getHumanAge(0, 0);

    expect(value).toEqual([0, 0]);
  });

  test('should return correct value for dog and cat if age < 15', () => {
    const value = getHumanAge(14, 14);

    expect(value).toEqual([0, 0]);
  });

  test(
    'should return correct value for dog and cat if age >= 15 && <= 23',
    () => {
      expect(getHumanAge(15, 15)).toEqual([1, 1]);
      expect(getHumanAge(23, 23)).toEqual([1, 1]);
    });

  test('should return correct value for dog and cat if age is 27', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test('should return correct value for dog and cat if age is 28', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('should return correct value for dog and cat if age is 29', () => {
    expect(getHumanAge(29, 29)).toEqual([3, 3]);
  });

  test('should return correct value for dog and cat if age is 100', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
