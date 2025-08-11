'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return a correct human age', () => {
    const goals = getHumanAge(100, 100);

    expect(goals).toEqual([21, 17]);
  });

  test('should return a zeros if value < 15', () => {
    const goals = getHumanAge(0, 14);

    expect(goals).toEqual([0, 0]);
  });

  test('should return 1 if 15 <= value < 24 ', () => {
    const goals = getHumanAge(15, 23);

    expect(goals).toEqual([1, 1]);
  });
});
