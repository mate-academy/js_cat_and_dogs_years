'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('Should return [0, 0] if (catAge = 0, dogAge = 0)', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('Should return [0, 0] if (catAge = 14, dogAge = 14)', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('Should return [0, 0] if (catAge = 15, dogAge = 15)', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('Should return [1, 1] if (catAge = 16, dogAge = 16)', () => {
    expect(getHumanAge(16, 16)).toEqual([1, 1]);
  });

  test('Should return [1, 1] if (catAge = 23, dogAge = 23)', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('Should return [1, 1] if (catAge = 24, dogAge = 24)', () => {
    expect(getHumanAge(24, 24)).toEqual([1, 1]);
  });

  test('Should return [2, 2] if (catAge = 27, dogAge = 27)', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test('Should return [3, 2] if (catAge = 28, dogAge = 28)', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('Should return [21, 17] if (catAge = 100, dogAge = 100)', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
