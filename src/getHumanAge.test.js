'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return 2 integers', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });

  test('converted year should be 0 if animalAge < 15', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('every 4 cat years (after 24) give 1 extra human year', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test('every 5 dog years (after 24) give 1 extra human year', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });
});
