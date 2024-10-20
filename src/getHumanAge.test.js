'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return [1, 1] if animalAge < first + second', () => {
    expect(getHumanAge(20, 20)).toEqual([1, 1]);
  });

  test('should return [0, 0] if animalAge === 0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return [2, 2] if animalAge > first + second', () => {
    expect(getHumanAge(26, 26)).toEqual([2, 2]);
  });

  test('should return [3, 3] if more than'
  + 'first and second and after divide by other', () => {
    expect(getHumanAge(29, 29)).toEqual([3, 3]);
  });
});
