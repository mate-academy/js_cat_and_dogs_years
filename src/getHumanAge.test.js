'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return 0 if human years are less than animal years', () => {
    const humanAge = getHumanAge(14, 14);

    expect(humanAge)
      .toEqual([0, 0]);
  });

  test('should correctly translate the years of different animals', () => {
    const humanAge = getHumanAge(28, 28);

    expect(humanAge)
      .toEqual([3, 2]);
  });
});
