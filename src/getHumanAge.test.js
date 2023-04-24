'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('Should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('Should return [0,0] for catAge = 0 and dogAge = 0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('Should return [0,0] for catAge = 14 and dogAge = 14', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('Should return [0,0] for catAge = 14 and dogAge = 14', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('Should return [0,0] for catAge = 14 and dogAge = 14', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('Should return [0,0] for catAge = 14 and dogAge = 14', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('Should return [0,0] for catAge = 14 and dogAge = 14', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test('Should return [0,0] for catAge = 14 and dogAge = 14', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('Should return [0,0] for catAge = 14 and dogAge = 14', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
