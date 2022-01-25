'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return an array', () => {
    expect(getHumanAge(0, 0))
      .toBeInstanceOf(Array);
  });

  test('should return an array of zeros if the initial values are 0', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('should return an array of zeros if the initial values are less than 15', () => {
    expect(getHumanAge(12, 14)).toEqual([0, 0]);
  });

  test('the cat\'s age should be higher than the dog\'s one when the initial values start at 28', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('the age of the cat and dog should be 1 in the range of 15 to 24', () => {
    expect(getHumanAge(16, 18)).toEqual([1, 1]);
  });

  test('the age of the cat and dog should be 2 the range of 24 to 28', () => {
    expect(getHumanAge(27, 28)).toEqual([2, 2]);
  });
});
