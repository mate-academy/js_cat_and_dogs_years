'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('animals` human age should be 0 if their own age < 15', () => {
    expect(getHumanAge(0, 14)).toEqual([0, 0]);
  });

  test('animals` human age should be 1 if their own age > 14 and < 24', () => {
    expect(getHumanAge(15, 23)).toEqual([1, 1]);
  });

  test(`cat's age should add 1 every 4 years after 23 years old
    dog's age should add 1 every 5 years after 23 years old`, () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
    expect(getHumanAge(27, 28)).toEqual([2, 2]);
    expect(getHumanAge(31, 33)).toEqual([3, 3]);
    expect(getHumanAge(59, 59)).toEqual([10, 9]);
    expect(getHumanAge(47, 88)).toEqual([7, 14]);
  });
});
