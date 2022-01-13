'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test(`should return [NaN, NaN] when input is empty`, () => {
    expect(getHumanAge())
      .toEqual([NaN, NaN]);
  });

  test(`should return an array`, () => {
    expect(getHumanAge(1, 2))
      .toBeInstanceOf(Array);
  });

  test(`should return an array with NaN when param is string`, () => {
    expect(getHumanAge('Cat'))
      .toEqual([NaN, NaN]);
  });

  test(`should return '[0, 0]' for param [0, 0]`, () => { // retern arrey
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test(`men year: '[1, 1]' for param [cat = 15, dog = 15]`, () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test(`men year: '[2, 2]' for param [cat = 24, dog = 24]`, () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test(`men year: '[3, 3]' for param [cat = 28, dog = 29]`, () => {
    expect(getHumanAge(28, 29))
      .toEqual([3, 3]);
  });

  test(`men year '[3, 3]' for param [cat = 35, dog = 35]`, () => {
    expect(getHumanAge(35, 35))
      .toEqual([4, 4]);
  });

  test(`men year: [21, 17] for param [cat = 100, dog = 100]`, () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });
});
// when pats 100 years old
// thrird pets year === 3 cat/people, 4 dog/people
// second pets year ===  9 people
// first pets year === 15 people
