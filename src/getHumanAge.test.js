'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared as a function', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('cat 0 years, dog 0 years -> [0, 0]', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('cat 14 years, dog 14 years -> [0, 0]', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('cat 15 years, dog 15 years -> [1, 1]', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('cat 24 years, dog 24 years -> [2, 2]', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('cat 27 years, dog 27 years -> [2, 2]', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test('cat 28 years, dog 28 years -> [3, 2]', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('cat 100 years, dog 100 years -> [21, 17]', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
