'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should return zero for ages as 0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return zero for ages less than 15', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return 1 for ages when equal 15', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should return 1 for ages more than 15', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should works for ages are 28', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('should return for ages more than human 100 y.o', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
