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

 test(`should return '[0, 0]' for 0, 0 input`, () => {
    let age = getHumanAge(0, 0);

    expect(age)
      .toEqual([0, 0]);
  });

  test(`should return '[0, 0]' for 14, 14 input`, () => {
   let age = getHumanAge(14, 14);
    expect(age).toEqual([0, 0]);
  });

  test(`should return '[1, 1]' for 15, 15 input`, () => {
   let age = getHumanAge(15, 15);
    expect(age).toEqual([1, 1]);
  });

  test(`should return '[1, 1]' for 23, 23 input`, () => {
   let age = getHumanAge(23, 23);
    expect(age).toEqual([1, 1]);
  });

  test(`should return '[2, 2]' for 24, 24 input`, () => {
   let age = getHumanAge(24, 24);
    expect(age).toEqual([2, 2]);
  });

  test(`should return '[2, 2]' for 27, 27 input`, () => {
   let age = getHumanAge(27, 27);
    expect(age).toEqual([2, 2]);
  });

  test(`should return '[3, 2]' for 28, 28 input`, () => {
   let age = getHumanAge(28, 28);
    expect(age).toEqual([3, 2]);
  });

  test(`should return '[21, 17]' for 100, 100 input`, () => {
   let age = getHumanAge(100, 100);
    expect(age).toEqual([21, 17]);
  })
});
