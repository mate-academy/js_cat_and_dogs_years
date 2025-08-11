'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return [0, 0] if catAge and dogAge are 0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return [0, 0] if catAge and dogAge are less than 15', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return [1, 1] if catAge and dogAge is 15', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should return [1, 1] if catAge and dogAge is 19', () => {
    expect(getHumanAge(19, 19)).toEqual([1, 1]);
  });

  test('should return [1, 1] if catAge and dogAge is 23', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should return [2, 2] if catAge and dogAge is 24', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should return [2, 2] if catAge and dogAge is 27', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('should return [3, 2] if catAge and dogAge is 28', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('should return [3, 3] if catAge and dogAge is 29', () => {
    expect(getHumanAge(29, 29)).toEqual([3, 3]);
  });

  test('should return [3, 3] if catAge and dogAge is 30', () => {
    expect(getHumanAge(30, 30)).toEqual([3, 3]);
  });

  test('should return [11, 9] if catAge and dogAge is 60', () => {
    expect(getHumanAge(60, 60)).toEqual([11, 9]);
  });

  test('should return [21, 17] if catAge and dogAge is 100', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });

  test('should return [0, 0] if catAge and dogAge is -5', () => {
    expect(getHumanAge(-5, -5)).toEqual([0, 0]);
  });
});
