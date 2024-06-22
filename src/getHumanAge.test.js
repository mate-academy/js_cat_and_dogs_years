'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('should return [0, 0] for ages less than 15', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
    expect(getHumanAge(10, 10)).toEqual([0, 0]);
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return [1, 1] for ages between 15 and 23', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
    expect(getHumanAge(20, 20)).toEqual([1, 1]);
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should return [2, 2] for ages between 24 and 32', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
    expect(getHumanAge(30, 30)).toEqual([3, 3]);
    expect(getHumanAge(32, 32)).toEqual([4, 4]);
  });

  test('should handle additional years correctly for cats', () => {
    expect(getHumanAge(33, 15)).toEqual([3, 1]);
    expect(getHumanAge(37, 15)).toEqual([3, 1]);
    expect(getHumanAge(38, 15)).toEqual([4, 1]);
    expect(getHumanAge(42, 15)).toEqual([4, 1]);
    expect(getHumanAge(43, 15)).toEqual([5, 1]);
  });

  test('should handle additional years correctly for dogs', () => {
    expect(getHumanAge(15, 33)).toEqual([1, 3]);
    expect(getHumanAge(15, 38)).toEqual([1, 3]);
    expect(getHumanAge(15, 39)).toEqual([1, 4]);
    expect(getHumanAge(15, 43)).toEqual([1, 4]);
    expect(getHumanAge(15, 44)).toEqual([1, 5]);
  });

  test('should handle large ages correctly', () => {
    expect(getHumanAge(100, 100)).toEqual([22, 20]);
    expect(getHumanAge(50, 50)).toEqual([9, 8]);
  });
});
