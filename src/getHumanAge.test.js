'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return array [0, 0], when catAge and dogAge are 0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return array [0, 0], when catAge and dogAge are 1', () => {
    expect(getHumanAge(1, 1)).toEqual([0, 0]);
  });

  test('should return array [0, 0], when catAge and dogAge less than 15',
    () => {
      expect(getHumanAge(7, 7)).toEqual([0, 0]);
    });

  test('should return array [0, 0], when catAge and dogAge are 14', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return array [1, 1], when catAge and dogAge are 15', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should return array [1, 1], when catAge and dogAge are 16', () => {
    expect(getHumanAge(16, 16)).toEqual([1, 1]);
  });

  test('should return array [1, 1], when catAge and dogAge less than 24',
    () => {
      expect(getHumanAge(20, 20)).toEqual([1, 1]);
    });

  test('should return array [1, 1], when catAge and dogAge are 23', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should return array [2, 2], when catAge and dogAge are 24', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should return array [2, 2], when catAge and dogAge are 25', () => {
    expect(getHumanAge(25, 25)).toEqual([2, 2]);
  });

  test('should return array [2, 2], when catAge and dogAge are 27', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test('should return array [3, 2], when catAge and dogAge are 28', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('should return array [3, 3], when catAge and dogAge are 29', () => {
    expect(getHumanAge(29, 29)).toEqual([3, 3]);
  });

  test('should return array [3, 3], when catAge and dogAge are 30', () => {
    expect(getHumanAge(30, 30)).toEqual([3, 3]);
  });

  test('should return array [6, 5], when catAge and dogAge are 40', () => {
    expect(getHumanAge(40, 40)).toEqual([6, 5]);
  });

  test('should return array [8, 7], when catAge and dogAge are 50', () => {
    expect(getHumanAge(50, 50)).toEqual([8, 7]);
  });

  test('should return array [11, 9], when catAge and dogAge are 60', () => {
    expect(getHumanAge(60, 60)).toEqual([11, 9]);
  });

  test('should return array [13, 11], when catAge and dogAge are 70', () => {
    expect(getHumanAge(70, 70)).toEqual([13, 11]);
  });

  test('should return array [16, 13], when catAge and dogAge are 80', () => {
    expect(getHumanAge(80, 80)).toEqual([16, 13]);
  });

  test('should return array [18, 15], when catAge and dogAge are 90', () => {
    expect(getHumanAge(90, 90)).toEqual([18, 15]);
  });

  test('should return array [21, 17], when catAge and dogAge are 100', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
