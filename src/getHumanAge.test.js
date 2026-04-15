'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('should return zero human age for zero animal age', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should calculate age at first threshold', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test(`should return 2 human years after 
    completing 24 animal years`, () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test(`should discard fractional human years when 
    calculating additional years`, () => {
    expect(getHumanAge(26, 26)).toEqual([2, 2]);
  });

  test('should correctly calculate medium animal ages', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test('should apply different aging rules for cats and dogs', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('should correctly calculate large animal ages', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
