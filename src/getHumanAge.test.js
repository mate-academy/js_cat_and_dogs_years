'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return 0 if cat and dog = 0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return 0 if cat and dog years < 15', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return 1 year for 15 years cat and dog', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should return 1 year if cat and dog years < 24', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should return 9 year for 1 more human year', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should add 4 year for cat years after 24', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test('should return 4 next year for cat and 1 extra human year', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
    expect(getHumanAge(32, 32)).toEqual([4, 3]);
    expect(getHumanAge(36, 36)).toEqual([5, 4]);
    expect(getHumanAge(40, 40)).toEqual([6, 5]);
  });

  test('should return 5 next year for dog and 1 extra human year', () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
    expect(getHumanAge(28, 34)).toEqual([3, 4]);
    expect(getHumanAge(28, 39)).toEqual([3, 5]);
    expect(getHumanAge(28, 44)).toEqual([3, 6]);
  });

  test('should return [21, 17] for getHumanAge(100, 100)', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
