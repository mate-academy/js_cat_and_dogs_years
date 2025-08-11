'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return an array', () => {
    expect(getHumanAge(14, 14))
      .toBeInstanceOf(Array);
  });

  test('should return zeros if zeros provided', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('should return correct cats years', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('should return correct dogs years', () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  test('should return correct years for both cat and dog', () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  test('should return correct years with different ages', () => {
    expect(getHumanAge(100, 28))
      .toEqual([21, 2]);
  });
});
