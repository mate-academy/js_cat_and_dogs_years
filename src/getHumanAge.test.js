'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return zeros, if arguments (0, 0)', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('should return [1, 1], if arguments (15, 15)', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('should return [0, 3], if arguments (14, 29)', () => {
    expect(getHumanAge(14, 29))
      .toEqual([0, 3]);
  });

  test('should return [46, 37], if arguments (200, 200)', () => {
    expect(getHumanAge(200, 200))
      .toEqual([46, 37]);
  });
  
  test('should return result of two first arguments if amount of arguments more than 2', () => {
    expect(getHumanAge(25, 25, 25, 25))
      .toEqual([2, 2]);
  });

  test('should return NaN if function accepted only one argument', () => {
    expect(getHumanAge(25))
      .toBeNaN;
  });

});