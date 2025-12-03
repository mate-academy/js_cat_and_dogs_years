'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('should return 0, when age less than first', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return 1, when age less than first + second', () => {
    expect(getHumanAge(20, 22)).toEqual([1, 1]);
  });

  test('should return 2, when age equal first + second', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should return 2 and more, when age more than first + second', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });
});
