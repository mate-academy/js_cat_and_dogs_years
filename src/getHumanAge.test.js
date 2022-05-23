'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('return 0 if age less than 15', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('return 0 if age less than 15', () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test('return 1 if age in range from 15 to 23', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('return 1 if age in range from 15 to 23', () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  test('return 2 if age of cat and dog in range from 24 to 29, 28 respectively',
    () => {
      expect(getHumanAge(24, 24))
        .toEqual([2, 2]);
    });

  test('return 2 + Math.floor((animalAge - first - second) / other)'
   + 'if age of cat and dog more than 24',
  () => {
    expect(getHumanAge(27, 27))
      .toEqual([2, 2]);
  });

  test('return 2 + Math.floor((animalAge - first - second) / other)'
  + 'if age of cat and dog more than 24',
  () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  test('return 2 + Math.floor((animalAge - first - second) / other)'
  + 'if age of cat and dog more than 24', () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });
});
