'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('should return [0, 0] for getHumanAge(0, 0)', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return [0, 0] for getHumanAge(14, 14)', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return [1, 1] for getHumanAge(15, 15)', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should return [1, 1] for getHumanAge(23, 23)', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should return [2, 2] for getHumanAge(24, 24)', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should return [2, 2] for getHumanAge(27, 27)', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test('should return [3, 2] for getHumanAge(28, 28)', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('should return [21, 17] for getHumanAge(100, 100)', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });

  test('should return correct human years for edge cases', () => {
    expect(getHumanAge(16, 16)).toEqual([1, 1]);
    expect(getHumanAge(20, 20)).toEqual([1, 1]);
    expect(getHumanAge(25, 25)).toEqual([2, 2]);
    expect(getHumanAge(30, 30)).toEqual([3, 3]);
    expect(getHumanAge(50, 50)).toEqual([8, 7]);
  });
});
