'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return an array', () => {
    expect(getHumanAge(15, 15))
      .toBeInstanceOf(Object);
  });

  test('should return [0, 0] if inputs are lower than 15', () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test(`should return [1, 1] when inputs are more or equal than 15`, () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('should return [1, 1] when inputs are (23, 23)', () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  test('should return [2, 2] when inputs are (24, 24)', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('should return [2, 2] when inputs are (27, 28)', () => {
    expect(getHumanAge(27, 28))
      .toEqual([2, 2]);
  });

  test('should return [3, 3] when inputs are (28, 29)', () => {
    expect(getHumanAge(28, 29))
      .toEqual([3, 3]);
  });

  test('should return zeros for zeros input', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('should return integers', () => {
    expect(getHumanAge(23.2, 23.2))
      .toEqual([1, 1]);
  });

  test('should return zeroes for negative numbers', () => {
    expect(getHumanAge(-28, -29))
      .toEqual([0, 0]);
  });
});
