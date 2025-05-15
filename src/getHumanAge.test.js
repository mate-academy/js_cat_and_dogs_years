'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should throw error for negative ages', () => {
    expect(() => getHumanAge(-1, -2)).toThrow('Animal age cannot be negative');
  });

  test('should throw error for invalid input', () => {
    expect(() => getHumanAge('a', 0)).toThrow('Animal age should be a number');
  });

  test('should return 0 human year for less than 15 animal years', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
    expect(getHumanAge(1, 14)).toEqual([0, 0]);
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return 1 human year for less than 24 animal years', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
    expect(getHumanAge(16, 20)).toEqual([1, 1]);
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should return 2 human years for exactly 24 animal years', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
    expect(getHumanAge(28, 27)).toEqual([3, 2]);
  });

  test('should return correct human years for animal ages 24 and above', () => {
    expect(getHumanAge(35, 24)).toEqual([4, 2]);
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });

  test('should return integer values for decimal ages', () => {
    expect(getHumanAge(35.9, 0.5)).toEqual([4, 0]);
  });
});
