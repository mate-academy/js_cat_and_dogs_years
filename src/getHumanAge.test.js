'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should correctly calculate the age', () => {
    const actual = getHumanAge(89, 89);

    expect(actual)
      .toEqual([18, 15]);
  });

  test('should return a number of whole years', () => {
    const actual = getHumanAge(16.5, 16.5);

    expect(actual)
      .toEqual([1, 1]);
  });

  test('should return 0 if pet\'s age is less than 15 years', () => {
    const actual = getHumanAge(9, 9);

    expect(actual)
      .toEqual([0, 0]);
  });
});
