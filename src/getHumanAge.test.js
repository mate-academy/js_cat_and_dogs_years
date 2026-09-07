'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('Zero case', () => {
    const result = getHumanAge(0, 0);
    expect(result).toEqual([0, 0]);
  });

  test('should correctly convert 24 years', () => {
    const result = getHumanAge(24, 24);
    expect(result).toEqual([2, 2]);
  });

  test('should correctly convert 100 years', () => {
    const result = getHumanAge(100, 100);
    expect(result).toEqual([21, 17]);
  });
});
