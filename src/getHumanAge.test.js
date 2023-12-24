'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should count age correctly', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });
});
