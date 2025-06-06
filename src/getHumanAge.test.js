'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('should handle both ages as zeros', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should handle the first year tier', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should handle the first year boundary.', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should handle the second year tier.', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should handle the second year boundary.', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should handle the third year tier.', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test('should handle the third year boundary.', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('should handle the older cat and dog.', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
