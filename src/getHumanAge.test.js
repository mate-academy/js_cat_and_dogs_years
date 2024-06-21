'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test(
    'should return [0, 0] for catAge 10 and dogAge 10',
    () => {
      expect(getHumanAge(10, 10)).toEqual([0, 0]);
    });

  test(
    'should return [1, 1] for catAge 20 and dogAge 20',
    () => {
      expect(getHumanAge(20, 20)).toEqual([1, 1]);
    });

  test(
    'should return [2, 2] for catAge 25 and dogAge 25',
    () => {
      expect(getHumanAge(25, 25)).toEqual([2, 2]);
    });

  test(
    'should return [3, 2] for catAge 28 and dogAge 28',
    () => {
      expect(getHumanAge(28, 28)).toEqual([3, 2]);
    });

  test(
    'should return [21, 17] for catAge 100 and dogAge 100',
    () => {
      expect(getHumanAge(100, 100)).toEqual([21, 17]);
    });
});
