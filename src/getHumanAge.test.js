'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return [0, 0] if cat or dog age <=0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
    expect(getHumanAge(-15, -24)).toEqual([0, 0]);
    expect(getHumanAge(-15, 15)).toEqual([0, 1]);
    expect(getHumanAge(15, -24)).toEqual([1, 0]);
  });

  test('should returns 0 if cat or dog age <= 14', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('correctly converts cat and dog age to 1 human year', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
    expect(getHumanAge(16, 16)).toEqual([1, 1]);
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('correctly converts cat and dog age to 2 human years', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
    expect(getHumanAge(27, 28)).toEqual([2, 2]);
  });

  test('correctly converts cat and dog age to 3 human years', () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
    expect(getHumanAge(29, 29)).toEqual([3, 3]);
  });

  test('correctly converts cat and dog age to human if they >= 100', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
