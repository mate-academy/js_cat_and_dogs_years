'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('returns zeroes if parameters are zeroes', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('returns 0 if parameters are 14', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('returns 1 if parameters are 15', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('returns 1 if parameters are 23', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('returns 2 if parameters are 24', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('returns 2 if parameters are 27', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test('returns 3 for cat and 2 for dog if parameters are 28', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });
});
