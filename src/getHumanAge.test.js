'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return zero for zero input', () => {
    expect(JSON.stringify(getHumanAge(0, 0))).toBe(JSON.stringify([0, 0]));
  });

  test('should return zero for input less than 15', () => {
    expect(JSON.stringify(getHumanAge(14, 14))).toBe(JSON.stringify([0, 0]));
  });

  test('should return 1 human years for input 15', () => {
    expect(JSON.stringify(getHumanAge(15, 15))).toBe(JSON.stringify([1, 1]));
  });

  test('should return 1 human years for input less than 24', () => {
    expect(JSON.stringify(getHumanAge(23, 23))).toBe(JSON.stringify([1, 1]));
  });

  test('should return 2 human years for input 24', () => {
    expect(JSON.stringify(getHumanAge(24, 24))).toBe(JSON.stringify([2, 2]));
  });

  test('should return 2 human years for input less than 28', () => {
    expect(JSON.stringify(getHumanAge(27, 27))).toBe(JSON.stringify([2, 2]));
  });

  test('should return 3,2 human years for 28 cat and 28 dog years', () => {
    expect(JSON.stringify(getHumanAge(28, 28))).toBe(JSON.stringify([3, 2]));
  });

  test('should return 3 human years for input 28 cat and 29 dog years', () => {
    expect(JSON.stringify(getHumanAge(28, 29))).toBe(JSON.stringify([3, 3]));
  });

  test('should return 21, 17 human years for 100 cat and 100 dog', () => {
    expect(JSON.stringify(getHumanAge(100, 100)))
      .toBe(JSON.stringify([21, 17]));
  });
});
