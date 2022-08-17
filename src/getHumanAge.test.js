'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });
});
describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return NAN if number wasnt mentioned for both', () => {
    expect(getHumanAge())
      .toEqual([NaN, NaN]);
  });

  test('should return NAN if number wasnt mentioned in first position', () => {
    expect(getHumanAge(NaN, 28)[0])
      .toEqual(NaN);
  });

  test('should return NAN if number wasnt mentioned in second position', () => {
    expect(getHumanAge(28)[1])
      .toEqual(NaN);
  });

  test('should test some inputs', () => {
    let age = getHumanAge(0, 0);

    expect(age).toEqual([0, 0]);

    age = getHumanAge(14, 14);
    expect(age).toEqual([0, 0]);

    age = getHumanAge(15, 15);
    expect(age).toEqual([1, 1]);

    age = getHumanAge(23, 23);
    expect(age).toEqual([1, 1]);

    age = getHumanAge(24, 24);
    expect(age).toEqual([2, 2]);

    age = getHumanAge(27, 27);
    expect(age).toEqual([2, 2]);

    age = getHumanAge(28, 28);
    expect(age).toEqual([3, 2]);

    age = getHumanAge(100, 100);
    expect(age).toEqual([21, 17]);
  })
});