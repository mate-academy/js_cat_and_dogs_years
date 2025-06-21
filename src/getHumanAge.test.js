'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('should return 0 if incorrect data is given', () => {
    expect(getHumanAge(-5, 0)).toEqual([0, 0]);
  });

  test('should return NaN if input !== numbers', () => {
    expect(getHumanAge('a', 'b')).toEqual([NaN, NaN]);
  }); ;

  test('should return [5, 4] if human ages = 36', () => {
    expect(getHumanAge(36, 36)).toEqual([5, 4]);
  });

  test('should return [21, 17] if human ages = 100', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
