'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return 0 year if animals"s year < 15', () => {
    expect(getHumanAge(3, 4))
      .toEqual([0, 0]);
  });

  test('should return 1 year if animals"s year >= 15 and < 24', () => {
    expect(getHumanAge(15, 23))
      .toEqual([1, 1]);
  });

  test(
    'should add extra cat"s year evry 4 years after 24 human"s years',
    () => {
      expect(getHumanAge(34, 23))
        .toEqual([4, 1]);
    });

  test(
    'should add extra dog"s year evry 5 years after 24 human"s years',
    () => {
      expect(getHumanAge(24, 39))
        .toEqual([2, 5]);
    });
});
