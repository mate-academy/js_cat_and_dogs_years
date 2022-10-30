'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should be 0, 0 in case of 0, 0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should be 0, 0 case of 1, 1', () => {
    expect(getHumanAge(1, 1)).toEqual([0, 0]);
  });

  test('should be 0, 0 case of 10, 10', () => {
    expect(getHumanAge(10, 10)).toEqual([0, 0]);
  });

  test('should be 0, 1 in case of 14, 15', () => {
    expect(getHumanAge(14, 15)).toEqual([0, 1]);
  });

  test('should be 1, 0 in case of 15, 14', () => {
    expect(getHumanAge(15, 14)).toEqual([1, 0]);
  });

  test('should be 1, 1 in case of 15, 15', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should be 1, 1 in case of 20, 18', () => {
    expect(getHumanAge(20, 18)).toEqual([1, 1]);
  });

  test('should be 1, 1 in case of 23, 23', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should be 1, 2 in case of 23, 24', () => {
    expect(getHumanAge(23, 24)).toEqual([1, 2]);
  });

  test('should be 2, 1 in case of 24, 23', () => {
    expect(getHumanAge(24, 23)).toEqual([2, 1]);
  });

  test('should be 2, 2 in case of 24, 24', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should be 2, 2 in case of 27, 27', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test('should be 3, 2 in case of 28, 28', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('should be 21, 17 in case of 100, 100', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });

  test('should be Numbers', () => {
    expect(getHumanAge('aa', 'bb')).toEqual([NaN, NaN]);
  });
});
