'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return an array with 2 elem', () => {
    expect(getHumanAge(1, 5))
      .toHaveLength(2);
  });

  test(`should return an the array where the first element is
 my cat's age in **human** years`, () => {
    expect(getHumanAge(27, 0))
      .toEqual([2, 0]);
  });

  test(`should return an the array where the second element
  is my dog's age in **human** years`, () => {
    expect(getHumanAge(0, 28))
      .toEqual([0, 2]);
  });

  test(`should return 0 if the years are 0 `, () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test(`should add NaN to result if No value specified`, () => {
    expect(getHumanAge())
      .toEqual([NaN, NaN]);
  });
});
