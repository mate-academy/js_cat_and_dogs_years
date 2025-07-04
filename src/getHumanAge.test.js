'use strict';

const { getHumanAge } = require('./getHumanAge');

describe('getHumanAge', () => {
  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('should convert catAge and dogAge correctly for small ages', () => {
    expect(getHumanAge(5, 5)).toEqual([0, 0]);
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should convert catAge correctly', () => {
    expect(getHumanAge(28, 0)[0]).toBe(3);
  });

  test('should convert dogAge correctly', () => {
    expect(getHumanAge(0, 30)[1]).toBe(3);
  });

  test('should handle zero ages', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });
});
