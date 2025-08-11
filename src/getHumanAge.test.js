'use strict';

const { getHumanAge } = require('./getHumanAge');

describe('getHumanAge', () => {
  test('should return [0, 0] for both catAge and dogAge being 0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return [0, 0] when both ages are below 15', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return [1, 1] for ages at exactly 15', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should return [1, 1] for ages below 24 but above 15', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should return [2, 2] for ages at exactly 24', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should return [2, 2] for ages between 24 and the next step', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test('should return [3, 2] for catAge at 28 and dogAge at 28', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('should return [21, 17] for catAge at 100 and dogAge at 100', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
