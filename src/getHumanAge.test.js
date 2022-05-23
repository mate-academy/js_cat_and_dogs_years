'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test(`should return the human age = 0
   when the dog and cat age is less than 15`, () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test(`should return the human age = 0 
  when the dog and cat age is less than 15`, () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test(`should return the human age = 1 when the dog and cat 
  age between 15 and 24`, () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test(`should return the human age = 1 when the dog and cat 
  age between 15 and 24`,
  () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  test(`should return the human age = 2 when the dog age between 24 and 28
   and cat age between 24 and 27`, () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test(`should return the human age = 2 when the dog age between 24 and 28
   and cat age between 24 and 27`, () => {
    expect(getHumanAge(27, 28))
      .toEqual([2, 2]);
  });

  test(`should return the human age = 3 when the dog age between 29 and 33
  and cat age between 28 and 31`, () => {
    expect(getHumanAge(28, 29))
      .toEqual([3, 3]);
  });

  test(`should return the human age 21 and 17 when the dog and cat age = 100`,
    () => {
      expect(getHumanAge(100, 100))
        .toEqual([21, 17]);
    });
});
