'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should return 0 human year for 0 animal year', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('should return 0 human year for 14 animal year', () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test('should return 1 human year for 15 animal year', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('should return 1 human year for 23 animal year', () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  test('should return 2 human year for 24 animal year', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('should return 2 human year for 27 animal year', () => {
    expect(getHumanAge(27, 27))
      .toEqual([2, 2]);
  });

  test('should return 3 and 2 human year for 28 cat and dog year', () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  test('should return diferent human age values for 100 animal year', () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });
});
