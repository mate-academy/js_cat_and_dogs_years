'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should return null if no value is specified', () => {
    expect(getHumanAge(0, 0))
      .toStrictEqual([0, 0]);
  });

  test('should return cat\'s and dog\'s age'
    + 'in human years for first 15 years', () => {
    expect(getHumanAge(1, 1))
      .toStrictEqual([0, 0]);
  });

  test('should return cat\'s and dog\'s age'
    + 'in human years for first 15 years', () => {
    expect(getHumanAge(2, 2))
      .toStrictEqual([0, 0]);
  });

  test('should return cat\'s and dog\'s age'
    + 'in human years for first 15 years', () => {
    expect(getHumanAge(14, 14))
      .toStrictEqual([0, 0]);
  });

  test('should return cat\'s and dog\'s age'
    + 'in human years for first 15 years', () => {
    expect(getHumanAge(15, 15))
      .toStrictEqual([1, 1]);
  });

  test('should return cat\'s and dog\'s age'
    + 'in human years for first 15 years', () => {
    expect(getHumanAge(16, 16))
      .toStrictEqual([1, 1]);
  });

  test('should return cat\'s and dog\'s age'
    + 'in human years for first 15 years', () => {
    expect(getHumanAge(23, 23))
      .toStrictEqual([1, 1]);
  });

  test('should return cat\'s and dog\'s age'
    + 'in human years for the next 9 years', () => {
    expect(getHumanAge(24, 24))
      .toStrictEqual([2, 2]);
  });

  test('should return cat\'s and dog\'s age'
    + 'in human years for the next 9 years', () => {
    expect(getHumanAge(25, 25))
      .toStrictEqual([2, 2]);
  });

  test('should return cat\'s and dog\'s age'
    + 'in human years for the next 9 years', () => {
    expect(getHumanAge(27, 28))
      .toStrictEqual([2, 2]);
  });

  test('should return cat\'s and dog\'s age'
    + 'in human years for the every 4 next cat years', () => {
    expect(getHumanAge(28, 29))
      .toStrictEqual([3, 3]);
  });

  test('should return cat\'s and dog\'s age'
    + 'in human years for the every 4 next cat and 5 next dog years', () => {
    expect(getHumanAge(29, 30))
      .toStrictEqual([3, 3]);
  });

  test('should return cat\'s and dog\'s age'
    + 'in human years for the every 4 next cat and 5 next dog years', () => {
    expect(getHumanAge(43, 48))
      .toStrictEqual([6, 6]);
  });

  test('should return cat\'s and dog\'s age'
    + 'in human years for the every 4 next cat and 5 next dog years', () => {
    expect(getHumanAge(44, 49))
      .toStrictEqual([7, 7]);
  });

  test('should return cat\'s and dog\'s age'
    + 'in human years for the every 4 next cat and 5 next dog years', () => {
    expect(getHumanAge(45, 50))
      .toStrictEqual([7, 7]);
  });
});
