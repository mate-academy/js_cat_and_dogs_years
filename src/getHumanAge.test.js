'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test(`should be declared`, () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test(`should return [0, 0]
   if the age of the cat and dog is less than 15`, () => {
    expect(getHumanAge(12, 14)).toEqual([0, 0]);
  });

  test(`should return [0, 0] if the age of the cat and dog is zero`, () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test(`should return [1,1],
  15 years of a cat and a dog is equal to 1 human life`, () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test(`should return 1 life for a dog or cat
  if their value is from 15 to 23 inclusive`, () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test(`should return 2 life per dog or cat
    if cat's value is from 24 to 27,
     dog's value is from 24 to 28 inclusive`, () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test(`should return 2 life per dog or cat
    if cat's value is from 24 to 28,
    dog's value is from 24 to 27 inclusive`, () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test(`should return 4 if the cat has a value of 28,
  the dog has 27 and add one each for the next 4 years for a cat
  and 5 years for a dog`, () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
