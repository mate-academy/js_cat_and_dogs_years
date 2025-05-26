'use strict';

const { getHumanAge } = require('./getHumanAge');

describe('getHumanAge', () => {
  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('returns [0, 0] for getHumanAge(0, 0)', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('returns [0, 0] for getHumanAge(14, 14)', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('returns [1, 1] for getHumanAge(15, 15)', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('returns [1, 1] for getHumanAge(23, 23)', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('returns [2, 2] for getHumanAge(24, 24)', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('returns [2, 2] for getHumanAge(27, 27)', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test('returns [3, 2] for getHumanAge(28, 28)', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('returns [21, 17] for getHumanAge(100, 100)', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });

  test('handles different cat and dog ages: getHumanAge(50, 24)', () => {
    expect(getHumanAge(50, 24)).toEqual([8, 2]);
  });

  test('handles different cat and dog ages: getHumanAge(24, 50)', () => {
    expect(getHumanAge(24, 50)).toEqual([2, 7]);
  });

  test('returns [0, 1] when only dog reaches 15', () => {
    expect(getHumanAge(10, 15)).toEqual([0, 1]);
  });

  test('returns [1, 0] when only cat reaches 15', () => {
    expect(getHumanAge(15, 10)).toEqual([1, 0]);
  });
});
