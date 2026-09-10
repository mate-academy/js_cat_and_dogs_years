'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('should return [0, 0] for zero ages', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return [0, 0] for the first 14 years', () => {
    expect(getHumanAge(1, 1)).toEqual([0, 0]);
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should give 1 human year for the first 15 years', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should give 1 human year for the next 9 years', () => {
    expect(getHumanAge(16, 16)).toEqual([1, 1]);
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should give 1 more human year after 24 years', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should give cats 1 extra human year every 4 years', () => {
    expect(getHumanAge(27, 0)).toEqual([2, 0]);
    expect(getHumanAge(28, 0)).toEqual([3, 0]);
    expect(getHumanAge(31, 0)).toEqual([3, 0]);
    expect(getHumanAge(32, 0)).toEqual([4, 0]);
  });

  test('should give dogs 1 extra human year every 5 years', () => {
    expect(getHumanAge(0, 28)).toEqual([0, 2]);
    expect(getHumanAge(0, 29)).toEqual([0, 3]);
    expect(getHumanAge(0, 33)).toEqual([0, 3]);
    expect(getHumanAge(0, 34)).toEqual([0, 4]);
  });

  test('should convert cat and dog ages independently', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });

  test('should discard the remainder of a year', () => {
    expect(getHumanAge(30, 30)).toEqual([3, 3]);
    expect(getHumanAge(35, 35)).toEqual([4, 4]);
  });
});
