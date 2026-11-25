'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('should return [0, 0] for value <= 14', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return [1, 1] for value >= 15 and value <= 23', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should return [2, 2] for value >= 24 and value <= 27', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test("Starting at age 28, a dog's age should be less than a cat's", () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });

  test('should return [2, 2] for getHumanAge(24, 28)', () => {
    expect(getHumanAge(24, 28)).toEqual([2, 2]);
  });

  test('should return [3, 2] for getHumanAge(28, 24)', () => {
    expect(getHumanAge(28, 24)).toEqual([3, 2]);
  });
});
