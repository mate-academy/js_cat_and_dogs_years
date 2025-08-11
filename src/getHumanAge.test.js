'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return the human age of a cat and dog', () => {
    expect(getHumanAge(10, 15))
      .toEqual([0, 1]);
  });

  test('should return the human age of a cat and dog', () => {
    expect(getHumanAge(20, 30))
      .toEqual([1, 3]);
  });

  test('should return the human age of a cat and dog', () => {
    expect(getHumanAge(25, 10))
      .toEqual([2, 0]);
  });

  test('should return the human age of a cat and dog', () => {
    expect(getHumanAge(36, 34))
      .toEqual([5, 4]);
  });
});
