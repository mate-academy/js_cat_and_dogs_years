'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('Should return 0 if ages of dos and cat are 0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  // test('Should return NaN if one of the argument if not a number', () => {
  //   expect(getHumanAge(10, 'string')).toBeNaN();
  // });

  test('should return 1,1 if ages are 15', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should return 21,17 if ages 100', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
