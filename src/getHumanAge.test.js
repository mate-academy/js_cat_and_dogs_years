'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return 0 when input is less than 15', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return 1 when input is 15', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should return 1 when input is 23', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should return 2 when input is 24', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should return 2 when input is 27, 28', () => {
    expect(getHumanAge(27, 28)).toEqual([2, 2]);
  });

  test('should return 3 when input is 28 and 29', () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
  });

  test('should return 3 when input is 31, 33', () => {
    expect(getHumanAge(31, 33)).toEqual([3, 3]);
  });

  test('should return 4 when input is 32 and 34', () => {
    expect(getHumanAge(35, 34)).toEqual([4, 4]);
  });
});
