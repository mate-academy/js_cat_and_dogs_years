'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should be 0 if animalAge less 15 and 1 if animal age equal 15', () => {
    expect(getHumanAge(12, 15))
      .toEqual([0, 1]);
  });

  test('should be 1 if animalAge less 24 and 2 if animal age equal 24', () => {
    expect(getHumanAge(24, 22))
      .toEqual([2, 1]);
  });

  test('should be 2 if catAge less 28 and dogAge less 29', () => {
    expect(getHumanAge(27, 28))
      .toEqual([2, 2]);
  });

  test('should be 3 if catAge equal 28 and dogAge equal 29', () => {
    expect(getHumanAge(28, 29))
      .toEqual([3, 3]);
  });

  test(`should increase on 4 after 28 for catAge`
  + `and on 5 after 29 for dogAge`, () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });
});
