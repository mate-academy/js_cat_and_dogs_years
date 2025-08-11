'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return [0, 0] for 0-year-old cat and 0-year-old dog', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return [0, 0] for 14-year-old cat and 14-year-old dog', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return [1, 1] for 15-year-old cat and 15-year-old dog', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('cshould return [1, 1] for 23-year-old cat and 23-year-old dog', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should return [2, 2] for 24-year-old cat and 24-year-old dog', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should return [2, 2] for 27-year-old cat and 27-year-old dog', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test('should return [3, 2] for 28-year-old cat and 28-year-old dog', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test(`should return [21, 17] for 100-year-old cat and
    100-year-old dog`, () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
