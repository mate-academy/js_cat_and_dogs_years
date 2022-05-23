'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test(`should return 0 to a value when 
  animalAge less than 15`, () => {
    expect(getHumanAge(14, 0))
      .toEqual([0, 0]);
  });

  test(`should return 1 to a value when 
  animalAge more than 14 and less than 24`, () => {
    expect(getHumanAge(15, 23))
      .toEqual([1, 1]);
  });

  test(`should return 2 to a both value when 
  cateAge more than 23 and less than 28 and
   dogAge more than 23 and less than 29`, () => {
    expect(getHumanAge(27, 28))
      .toEqual([2, 2]);
  });

  test(`should return 2 to a both value when 
  cateAge more than 23 and less than 28 and
   dogAge more than 23 and less than 29`, () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test(`should return 3 to a both value when 
  cateAge more than 27 and less than 32 and
   dogAge more than 28 and less than 34`, () => {
    expect(getHumanAge(31, 33))
      .toEqual([3, 3]);
  });

  test(`should return 3 to a both value when 
  cateAge more than 27 and less than 32 and
   dogAge more than 28 and less than 34`, () => {
    expect(getHumanAge(28, 29))
      .toEqual([3, 3]);
  });

  test(`should return 3 to a both value when 
  cateAge more than 27 and less than 32 and
   dogAge more than 28 and less than 34`, () => {
    expect(getHumanAge(28.1, 29.1))
      .toEqual([3, 3]);
  });

  test(`should return 0 to a both value when 
  animalAge less than 0`, () => {
    expect(getHumanAge(-28.1, -29.1))
      .toEqual([0, 0]);
  });

  test(`should return NaN to a both value when 
  cateAge and dogAge is not specified`, () => {
    expect(getHumanAge())
      .toEqual([NaN, NaN]);
  });

  test(`should return NaN as second value when 
  function has one parameter`, () => {
    expect(getHumanAge(16))
      .toEqual([1, NaN]);
  });

  test(`should return 0 function parameter is null`, () => {
    expect(getHumanAge(null, 16))
      .toEqual([0, 1]);
  });

  test(`should return array with 2 elements`, () => {
    expect(getHumanAge(100, 16))
      .toHaveLength(2);
  });
});
