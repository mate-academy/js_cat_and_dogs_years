'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('cat and dog years should be converted into human years', () => {
    // Cat and dog ages are both 0
    expect(getHumanAge(0, 0)).toEqual([0, 0]);

    // Cat and dog ages are both 14
    expect(getHumanAge(14, 14)).toEqual([0, 0]);

    // Cat and dog ages are both 15
    expect(getHumanAge(15, 15)).toEqual([1, 1]);

    // Cat and dog ages are both 23
    expect(getHumanAge(23, 23)).toEqual([1, 1]);

    // Cat age is 24, dog age is 24
    expect(getHumanAge(24, 24)).toEqual([2, 2]);

    // Cat age is 27, dog age is 27
    expect(getHumanAge(27, 27)).toEqual([2, 2]);

    // Cat age is 28, dog age is 28
    expect(getHumanAge(28, 28)).toEqual([3, 2]);

    // Cat age is 100, dog age is 100
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
