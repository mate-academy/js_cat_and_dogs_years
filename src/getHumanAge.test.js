'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('should return 0 in case animal is younger than 15', () => {
    expect(getHumanAge(10, 10)).toEqual([0, 0]);
  });

  test('should return 1 in case animal is older than 15', () => {
    expect(getHumanAge(16, 16)).toEqual([1, 1]);
  });

  test('should return 3 and 2 in case animals` age is 28', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

});

