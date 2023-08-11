'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('if felines and canine the first 14 years then return'
    + 'the array with two 0', () => {
    let humanAgeOfPets = getHumanAge(0, 0);

    expect(humanAgeOfPets)
      .toEqual([0, 0]);

    humanAgeOfPets = getHumanAge(14, 14);

    expect(humanAgeOfPets)
      .toEqual([0, 0]);
  });

  test('if feline and canine from 15 to 24 years old, then return'
    + 'the array with two 1', () => {
    let humanAgeOfPets = getHumanAge(15, 15);

    expect(humanAgeOfPets)
      .toEqual([1, 1]);

    humanAgeOfPets = getHumanAge(23, 23);

    expect(humanAgeOfPets)
      .toEqual([1, 1]);
  });

  // ?

  test('if feline and canine from 15 to 24 years old, then return'
    + 'the array with two 1', () => {
    let humanAgeOfPets = getHumanAge(24, 24);

    expect(humanAgeOfPets)
      .toEqual([2, 2]);

    humanAgeOfPets = getHumanAge(27, 27);

    expect(humanAgeOfPets)
      .toEqual([2, 2]);

    humanAgeOfPets = getHumanAge(28, 28);

    expect(humanAgeOfPets)
      .toEqual([3, 2]);

    humanAgeOfPets = getHumanAge(100, 100);

    expect(humanAgeOfPets)
      .toEqual([21, 17]);
  });
});
