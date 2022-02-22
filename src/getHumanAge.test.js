'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return an array with 0, 0 dog when input is 0 for cat, 0 for dog', () => {
    expect(getHumanAge(0, 0))
  .toEqual([0, 0]);
  });

  test('should return an array with 0 when input is 14 for cat, 14 for dog', () => {
    expect(getHumanAge(14, 14))
  .toEqual([0, 0]);
  });

  test('should return an array with 1, 1 when input is 15 for cat, 15 for dog', () => {
    expect(getHumanAge(15, 15))
  .toEqual([1, 1]);
  });

  test('should return an array with 2, 2 when input is 24 for cat, 24 for dog', () => {
    expect(getHumanAge(24, 24))
  .toEqual([2, 2]);
  });

  test('should return an array with 3, 2 when input is 28 for cat, 28 for dog', () => {
    expect(getHumanAge(28, 28))
  .toEqual([3, 2]);
  });

  test('should return an array with 21, 17 when input is 100 for cat, 100 for dog', () => {
    expect(getHumanAge(100, 100))
  .toEqual([21, 17]);
});
})
