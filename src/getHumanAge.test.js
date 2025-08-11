'use strict';

const { getHumanAge } = require('./getHumanAge');

describe('getHumanAge', () => {
  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should be declared2', () => {
    expect(typeof getHumanAge)
      .toBe('function');
  });

  test('should return [0, 0] when catAge and dogAge are 0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return [0, 0] when catAge and dogAge are below 15', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return [1, 1] when catAge and dogAge are exactly 15', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should return [1, 1] when catAge and dogAge are between 15 and 23',
    () => {
      expect(getHumanAge(20, 20)).toEqual([1, 1]);
      expect(getHumanAge(23, 23)).toEqual([1, 1]);
    });

  test(
    'should return [2, 2] when catAge and dogAge are between 24-27 and 24-28 '
  + 'respectively',
    () => {
      expect(getHumanAge(24, 24)).toEqual([2, 2]);
      expect(getHumanAge(27, 28)).toEqual([2, 2]);
    });

  test(
    'should return [3, 2] when catAge exceeds second threshold by 1 and '
  + 'dogAge remains in second tier',
    () => {
      expect(getHumanAge(28, 28)).toEqual([3, 2]);
    });

  test('should correctly calculate human ages for high catAge and dogAge',
    () => {
      expect(getHumanAge(100, 100)).toEqual([21, 17]);
    });

  test('Cat age: 15 should return 1', () => {
    expect(getHumanAge(15, 0)[0]).toBe(1);
  });

  test('Cat age: 24 should return 2', () => {
    expect(getHumanAge(24, 0)[0]).toBe(2);
  });

  test('Cat age: 28 should return 3', () => {
    expect(getHumanAge(28, 0)[0]).toBe(3);
  });

  test('Cat age: 32 should return 4', () => {
    expect(getHumanAge(32, 0)[0]).toBe(4);
  });

  test('Dog age: 15 should return 1', () => {
    expect(getHumanAge(0, 15)[1]).toBe(1);
  });

  test('Dog age: 24 should return 2', () => {
    expect(getHumanAge(0, 24)[1]).toBe(2);
  });

  test('Dog age: 29 should return 3', () => {
    expect(getHumanAge(0, 29)[1]).toBe(3);
  });

  test('Dog age: 34 should return 4', () => {
    expect(getHumanAge(0, 34)[1]).toBe(4);
  });

  test('Mixed ages: catAge <15 and dogAge >=15', () => {
    expect(getHumanAge(10, 20)).toEqual([0, 1]);
  });

  test('Mixed ages: catAge >=15 and dogAge <15', () => {
    expect(getHumanAge(20, 10)).toEqual([1, 0]);
  });

  test('Mixed ages: catAge and dogAge in different tiers', () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
    expect(getHumanAge(32, 34)).toEqual([4, 4]);
  });

  test('Negative ages should be treated as 0', () => {
    expect(getHumanAge(-5, -10)).toEqual([0, 0]);
  });

  test('Non-integer ages should be floored', () => {
    expect(getHumanAge(15.9, 15.9)).toEqual([1, 1]);
    expect(getHumanAge(24.7, 24.7)).toEqual([2, 2]);
    expect(getHumanAge(28.4, 29.6)).toEqual([3, 3]);
  });

  test('Large ages', () => {
    expect(getHumanAge(60, 60)).toEqual([11, 9]);
    expect(getHumanAge(80, 80)).toEqual([16, 13]);
  });
});
