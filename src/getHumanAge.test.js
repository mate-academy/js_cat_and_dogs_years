'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should give 0 human years if age < 15', () => {
    expect(getHumanAge(12, 12)).toEqual([0, 0]);
  });

  test('should give 1 human years if age < 24', () => {
    expect(getHumanAge(16, 17)).toEqual([1, 1]);
  });

  test('should give 2 human years if age < 28', () => {
    expect(getHumanAge(25, 25)).toEqual([2, 2]);
  });

  // eslint-disable-next-line max-len
  test('should give 1 extra human year for every 5 dog/4 cat years if age >= 28', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });
});
