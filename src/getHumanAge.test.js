'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return [0, 0] when both cat and dog are younger than 15', () => {
    expect(getHumanAge(12, 13)).toEqual([0, 0]);
  });

  test('should return [1, 1] when animal years are between 15 and 24', () => {
    expect(getHumanAge(18, 23)).toEqual([1, 1]);
  });

  test(`should return [3, 5] when cat years are 28 
    and dog years are 40`, () => {
    expect(getHumanAge(28, 40).toEqual([3, 5]));
  });
});
