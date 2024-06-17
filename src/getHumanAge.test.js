'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test(' [0, 0] for cat and dog when they are less than 15 years old', () => {
    expect(getHumanAge(10, 10)).toEqual([0, 0]);
  });

  test('[3, 2] for cat and dog when they are 28 years old', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('[21, 17] for cat and dog when they are 100 years old', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });

  test(' [0, 0] for cat and dog when they are 14 years old', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('[1, 1] for cat and dog when they are 15 years old', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('[2, 2] for cat and dog when they are 24 years old', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('[1, 1]  for cat and dog when they are 23 years old', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });
});
