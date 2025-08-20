'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  const [catHuman, dogHuman] = getHumanAge(24, 24);

  test('catHuman value should be integer', () => {
    expect(Number.isInteger(catHuman)).toBe(true);
  });

  test('dogHuman value should be integer', () => {
    expect(Number.isInteger(dogHuman)).toBe(true);
  });

  test('should return [0, 0] when cat and dog age are 0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return [0, 0] when cat and dog are younger than 15', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return [1, 1] when cat and dog has 15 years old', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should return [1, 1] when cat and dog has 23 years old', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should return [2, 2] when cat and dog has 24 years old', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should return [2, 2] when cat and dog has 27 years old', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test('should return [3, 2] when cat and dog has 28 years old', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('should return [21, 17] when cat and dog has 100 years old', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
