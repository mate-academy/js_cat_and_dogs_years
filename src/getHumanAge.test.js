'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return an array', () => {
    expect(getHumanAge(1, 1))
      .toBeInstanceOf(Array);
  });

  test('should return an array with 2 elements', () => {
    expect(getHumanAge(1, 1))
      .toHaveLength(2);
  });

  test('should return [0, 0] for 0, 0', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('should return [1, 1] for 15, 15', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]); 
  });

  test('should return [1, 1] for 23, 23', () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]); // 
  });

  test('should return [2, 2] for 24, 24', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('should return [2, 2] for 28, 28', () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  test('should return [21, 17] for 100, 100', () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });
});
