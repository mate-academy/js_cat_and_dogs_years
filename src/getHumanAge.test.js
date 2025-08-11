'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test(('should return [1, 1] if input [15, 15]'), () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test(('should return [2, 2] if input [24, 24]'), () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test(('should return [2, 2] if input [26, 26]'), () => {
    expect(getHumanAge(26, 26))
      .toEqual([2, 2]);
  });

  test(('should return [3, 2] if input [28, 28]'), () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  test(('should return [3, 3] if input [28, 29]'), () => {
    expect(getHumanAge(28, 29))
      .toEqual([3, 3]);
  });

  test(('should return [21, 17] if input [100, 100]'), () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });

  test(('should return [0, 0] if input array with negative numbers'), () => {
    expect(getHumanAge(-10, -2))
      .toEqual([0, 0]);
  });
});
