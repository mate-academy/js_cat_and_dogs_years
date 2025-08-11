'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should be minimum cat and dog years for zero human year', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('should be maximum cat and dog years for zero human year', () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test('should be minimum cat and dog years for one human year', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test(
    'should be maximum cat and dog years for one human year',
    () => {
      expect(getHumanAge(15 + 9 - 1, 15 + 9 - 1))
        .toEqual([1, 1]);
    });

  test(
    'should be minimum cat and dog years for two human years',
    () => {
      expect(getHumanAge(15 + 9, 15 + 9))
        .toEqual([2, 2]);
    });

  test(
    'should be maximum cat and dog years for two human years',
    () => {
      expect(getHumanAge(15 + 9 + 4 - 1, 15 + 9 + 5 - 1))
        .toEqual([2, 2]);
    });

  test(
    'should be minimum cat and dog years for three human years',
    () => {
      expect(getHumanAge(15 + 9 + 4, 15 + 9 + 5))
        .toEqual([3, 3]);
    });

  test(
    'should be maximum cat and dog years for three human years',
    () => {
      expect(getHumanAge(15 + 9 + 4 + 4 - 1, 15 + 9 + 5 + 5 - 1))
        .toEqual([3, 3]);
    });

  test(
    'human years for 100 cat and dog years',
    () => {
      expect(getHumanAge(100, 100))
        .toEqual([21, 17]);
    });
});
