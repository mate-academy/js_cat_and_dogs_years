'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return animals age in human years if values are 0', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('should return animals age in human years if values fall at the beginning of 1 range', () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test('should return animals age in human years if values fall at the end of 1 range', () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test('should return animals age in human years if values fall at the beginning of 2 range', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('should return animals age in human years if values fall at the gend of 2 range', () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  test('should return animals age in human years if values fall at the beginning of 3 range', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('should return animals age in human years if values fall at the end of 3 range', () => {
    expect(getHumanAge(27, 28))
      .toEqual([2, 2]);
  });

  test('should return animals age in human years if values fall at the beginning of 4 range', () => {
    expect(getHumanAge(28, 29))
      .toEqual([3, 3]);
  });

  test('should return animals age in human years if values fall at the end of 4 range', () => {
    expect(getHumanAge(31, 33))
      .toEqual([3, 3]);
  });

  test('should return animals age in human years if values fall at the beginning of 10 range', () => {
    expect(getHumanAge(56, 64))
      .toEqual([10, 10]);
  });

  test('should return animals age in human years if values fall at the end of 10 range', () => {
    expect(getHumanAge(59, 68))
      .toEqual([10, 10]);
  });

  test('should return animals age in human years if values are in different ranges', () => {
    expect(getHumanAge(30, 50))
      .toEqual([3, 7]);
  });
});
