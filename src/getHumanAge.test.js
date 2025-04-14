'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test(`should return 0
  if the age of the cat is 0 and the age of the dog is 0`, () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test(`should return [0, 0]
  if the age of the cat is 0 and the age of the dog is 0`, () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test(`should return [1, 1]
  if the age of the cat is 15 and the age of the dog is 15`, () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test(`should return [1, 1]
  if the age of the cat is 23 and the age of the dog is 23`, () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test(`should return [2, 2]
  if the age of the cat is 24 and the age of the dog is 24`, () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test(`should return [2, 2]
  if the age of the cat is 27 and the age of the dog is 27`, () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test(`should return [3, 2]
  if the age of the cat is 28 and the age of the dog is 28`, () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test(`should return [21, 17]
  if the age of the cat is 100 and the age of the dog is 100`, () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
