'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should be an array', () => {
    expect(getHumanAge(100, 100)).toBeInstanceOf(Array);
  });

  test('should be with expected results', () => {
    expect(getHumanAge(28, 28)).toHaveLength(2);
  });

  test('should be with expected results', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should be with expected results', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should be with expected results', () => {
    expect(getHumanAge(15, 16)).toEqual([1, 1]);
  });

  test('should be with expected results', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should be with expected results', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should be with expected results', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test('should be with expected results', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('should be with expected results', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
