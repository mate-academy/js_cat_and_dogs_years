'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should be converted when HumanAge is 0', () => {
    expect(getHumanAge(0, 0))
      .toStrictEqual([0, 0]);
  });

  test(`should be converted when HumanAge is less 
        than 1 dog's and cat's year`, () => {
    expect(getHumanAge(12, 12))
      .toStrictEqual([0, 0]);
  });

  test(`should be converted when HumanAge is  
        than 1 dog's and cat's year`, () => {
    expect(getHumanAge(15, 15))
      .toStrictEqual([1, 1]);
  });

  test(`should be converted when HumanAge is more 
        than 1 dog's and cat's year but less than 2`, () => {
    expect(getHumanAge(23, 23))
      .toStrictEqual([1, 1]);
  });

  test(`should be converted when HumanAge is more 
        than 1 dog's and cat's year but less than 2`, () => {
    expect(getHumanAge(20, 20))
      .toStrictEqual([1, 1]);
  });

  test(`should be converted when HumanAge is 2 dog's and cat's years `, () => {
    expect(getHumanAge(24, 24))
      .toStrictEqual([2, 2]);
  });

  test(`should be converted when HumanAge is more 
        than 2 dog's and cat's year but less than 3`, () => {
    expect(getHumanAge(27, 27))
      .toStrictEqual([2, 2]);
  });

  test(`should be converted when HumanAge is 2 dog's and 3 cat's years`, () => {
    expect(getHumanAge(28, 28))
      .toStrictEqual([3, 2]);
  });

  test(`should be converted when HumanAge is 3 dog's and 3 cat's years`, () => {
    expect(getHumanAge(29, 29))
      .toStrictEqual([3, 3]);
  });

  test(`should be converted when HumanAge is 7 dog's and 8 cat's years`, () => {
    expect(getHumanAge(50, 50))
      .toStrictEqual([8, 7]);
  });

  test(`should be converted when HumanAge is 7 dog's and 8 cat's years`, () => {
    expect(getHumanAge(100, 100))
      .toStrictEqual([21, 17]);
  });
});
