'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return array with correct length', () => {
    expect(getHumanAge(15, 15)).toHaveLength(2);
  });

  test('should return [0,0] if both inputs is zero', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return 0 catAge if cat input is less than 15', () => {
    expect(getHumanAge(14, 15)).toEqual([0, 1]);
  });

  test('should return [2,0] when cat is 24 and dog is less than 15', () => {
    expect(getHumanAge(24, 10)).toEqual([2, 0]);
  });

  test('should return 0 dogAge if dog input is less than 15', () => {
    expect(getHumanAge(15, 14)).toEqual([1, 0]);
  });

  test('should return [0,2] when dog is 24 and cat is less than 15', () => {
    expect(getHumanAge(10, 24)).toEqual([0, 2]);
  });

  test('should return high values correctly', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });

  test('should return [3,3] for cat 28 and dog 29 ', () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
  });

  test('should return [0,0] for negative inputs', () => {
    expect(getHumanAge(-5, -10)).toEqual([0, 0]);
  });
});
