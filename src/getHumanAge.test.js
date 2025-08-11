'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should correctly convert cat and dog ages to human years', () => {
    expect(getHumanAge(28, 24)).toEqual([3, 2]);
  });

  test('should handle cases when catAge or dogAge is less than 15', () => {
    expect(getHumanAge(10, 10)).toEqual([0, 0]);
  });

  test('should be with expected results', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should be with expected results', () => {
    expect(getHumanAge(30, 28)).toEqual([3, 2]);
  });

  test('should be with expected results', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
