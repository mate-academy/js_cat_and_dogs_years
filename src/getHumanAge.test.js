'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return human age if the age of the cat and dog is 0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test(`should return human age
  if the age of the cat and dog is more than 0 but less than 15`, () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test(`should return human age if the age of the cat and dog is 15`, () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test(`should return human age
  if the age of the cat and dog is more than 15 but less than 24`, () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test(`should return human age if the age of the cat and dog is 24`, () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test(`should return human age
  if the cat's age is more than 24 but less than 28 years
  and the dog's age is more than 24 but less than 29 years`, () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test(`should return human age
  if the cat's age is 28 years old
  and the dog's age is greater than 24 but less than 29 years old.`, () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test(`should return human age
  if the cat's age is 100 years and the dog's age is 100 years.`, () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
