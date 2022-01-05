'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('Should return 0 human ages for both', () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test('Should return 1 human ages for both', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('Should return 2 human ages for both', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('Should return 3 human ages for cat and 2 human ages for dog', () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  test('Should return 3 human ages for both', () => {
    expect(getHumanAge(28, 29))
      .toEqual([3, 3]);
  });

  test('Should return 21 human ages for cat and 17 human ages for dog', () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });
});
