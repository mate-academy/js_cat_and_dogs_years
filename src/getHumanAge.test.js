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
    expect(getHumanAge(5, 8))
      .toEqual([0, 0]);
  });

  test('should return 0 for cat and 0 for'
  + 'dog when ages are less than 15', () => {
    expect(getHumanAge(10, 10))
      .toEqual([0, 0]);
  });

  test('should return 1 for cat and 1 for'
  + 'dog when ages are between 15 and 24', () => {
    expect(getHumanAge(18, 19))
      .toEqual([1, 1]);
  });

  test('should return 2 for cat and 2 for'
  + 'dog when ages are between 24 and 28', () => {
    expect(getHumanAge(26, 27))
      .toEqual([2, 2]);
  });
});
