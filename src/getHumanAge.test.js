'use strict';

describe('getHumanAge function', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be a function', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return correct human age when cat\'s and dog\'s'
  + 'age is less than the first threshold', () => {
    expect(getHumanAge(10, 9))
      .toEqual([0, 0]);
  });

  test('should return correct human age when cat\'s and dog\'s'
   + 'age is less than the sum of the first and second thresholds', () => {
    expect(getHumanAge(16, 17))
      .toEqual([1, 1]);
  });

  test('should return correct human age when cat\'s and dog\'s'
  + 'age equals the sum of the first and second thresholds', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('should return correct human age when cat\'s and dog\'sage is'
  + 'less than the sum of the first, second, and other thresholds', () => {
    expect(getHumanAge(27, 28))
      .toEqual([2, 2]);
  });

  test('should return correct human age when cat\'s and dog\'s'
  + 'age equals the sum of the first, second, and other thresholds', () => {
    expect(getHumanAge(28, 29))
      .toEqual([3, 3]);
  });

  test('should return correct human age when cat\'s and dog\'s'
  + 'age exceeds the sum of the first, second, and other thresholds', () => {
    expect(getHumanAge(35, 40))
      .toEqual([4, 5]);
  });

  test('should return correct human age'
  + 'when cat\'s and dog\'s age is negative', () => {
    expect(getHumanAge(-1, -2))
      .toEqual([0, 0]);
  });

  test('should return correct human age when cat\'s and dog\'s'
  + 'age is a floating point number', () => {
    expect(getHumanAge(14.5, 23.5))
      .toEqual([0, 1]);
  });

  test('should return correct human age'
  + 'for various combinations of cat\'s and dog\'s age', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);

    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);

    expect(getHumanAge(28, 29))
      .toEqual([3, 3]);

    expect(getHumanAge(32, 34))
      .toEqual([4, 4]);
  });
});
