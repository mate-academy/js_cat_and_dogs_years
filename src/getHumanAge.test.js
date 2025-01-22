'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return 0 if age is less than 15', () => {
    expect(getHumanAge(3, 3)).toEqual([0, 0]);
  });

  test('should return 1 if age is 15', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should return 2 if age is 24', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should return [3, 2] if age is 28', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('should return [3, 3] if age is 29', () => {
    expect(getHumanAge(29, 29)).toEqual([3, 3]);
  });
});
