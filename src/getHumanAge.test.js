'use strict';

const { getHumanAge } = require('./getHumanAge');

describe('getHumanAge', () => {
  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('should return [0, 0] for both cat and dog ages as 0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  // eslint-disable-next-line max-len
  test('should return [1, 1] for both cat and dog ages when they are 15', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  // eslint-disable-next-line max-len
  test('should return [2, 2] for both cat and dog ages when they are 24', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should return [3, 2] for cat age 28 and dog age 28', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('should return [21, 17] for cat age 100 and dog age 100', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
