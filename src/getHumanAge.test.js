'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test(
    'should calculate human yearscorrectly for cat and dog ages up to 15 years',
    () => {
      expect(getHumanAge(10, 10)).toEqual([0, 0]);
    });

  test(
    'should calculate human yearscorrectly for cat and dog ages up to 24 years',
    () => {
      expect(getHumanAge(20, 20)).toEqual([1, 1]);
    });

  test(
    'should calculate human yearscorrectly for cat and dog ages over 24 years',
    () => {
      expect(getHumanAge(25, 25)).toEqual([2, 2]);
    });

  test(
    'should calculate human yearscorrectly for cat and dog ages over 28 years',
    () => {
      expect(getHumanAge(28, 28)).toEqual([3, 2]);
    });

  test(
    'should calculate human yearscorrectly for cat and dog ages over 29 years',
    () => {
      expect(getHumanAge(100, 100)).toEqual([21, 17]);
    });
});
