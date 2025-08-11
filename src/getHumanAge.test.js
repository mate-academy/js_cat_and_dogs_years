`use strict`;

describe(`getHumanAge`, () => {
  const { getHumanAge } = require(`./getHumanAge`);

  test(`should be declared`, () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test(`should return [0, 0] when the cat is 0 years old, 
    the dog is 0 years old`, () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test(`should return [0, 0] when the cat is 14 years old,
    the dog is 14 years old`, () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test(`should return [1, 1] when the cat is 15 years old,
    the dog is 15 years old`, () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test(`should return [1, 1] when the cat is 23 years old,
    the dog is 23 years old`, () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  test(`should return [2, 2] when the cat is 24 years old,
    the dog is 24 years old`, () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test(`should return [2, 2] when the cat is 27 years old,
    the dog is 27 years old`, () => {
    expect(getHumanAge(27, 27))
      .toEqual([2, 2]);
  });

  test(`should return [3, 2] when the cat is 28 years old,
    the dog is 28 years old`, () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  test(`should return [21, 17] when the cat is 100 years old,
    the dog is 100 years old`, () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });
});
