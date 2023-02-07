'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('should calculate age with valid data', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should calculate age with folat numbers', () => {
    expect(getHumanAge(15.3, 27.4)).toEqual([1, 2]);
  });

  test('should handle case with negative numbers', () => {
    expect(getHumanAge(-1, 0)).toEqual([0, 0]);
  });

  test('should handle infinity case', () => {
    expect(getHumanAge(Infinity, Infinity)).toEqual([Infinity, Infinity]);
  });
});
