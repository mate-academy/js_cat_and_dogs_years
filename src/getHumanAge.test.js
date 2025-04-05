'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should round age if not integer', () => {
    expect(getHumanAge(16, 16))
      .toEqual([1, 1]);
  });

  test('should be different for dogs and cats', () => {
    expect(getHumanAge(32, 32))
      .toEqual([4, 3]);
  });

  test('should be 0 if not one year', () => {
    expect(getHumanAge(13, 13))
      .toEqual([0, 0]);
  });
});
