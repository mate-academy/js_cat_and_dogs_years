'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('returns [0, 0] when both ages are below 15', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('returns [1, 1] when both ages equal 15', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('returns [1, 1] when both ages are between 15 and 23', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('returns [2, 2] when both ages equal 24', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('returns [2, 2] when both ages are below the next full block', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  // eslint-disable-next-line max-len
  test('returns [3, 2] when cat age reaches the next block but dog does not', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('correctly converts higher ages', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });

  test('handles different ages for cat and dog', () => {
    expect(getHumanAge(30, 50)).toEqual([3, 7]);
  });
});
