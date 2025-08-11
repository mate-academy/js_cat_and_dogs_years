'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return zero values if input is equal to 0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return zero values if input values are negative', () => {
    expect(getHumanAge(-1, -100)).toEqual([0, 0]);
  });

  test('should return zero values if arguments are less than 15', () => {
    expect(getHumanAge(14, 13)).toEqual([0, 0]);
  });

  test('should return 1 values if input values are between 15 and 24', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
    expect(getHumanAge(23, 22)).toEqual([1, 1]);
  });

  test('should correctly convert cat and dog ages to human ages', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });

  test('should correctly work with float values', () => {
    expect(getHumanAge(14.9, 14.3)).toEqual([0, 0]);
    expect(getHumanAge(27.9, 24.6)).toEqual([2, 2]);
  });
});
