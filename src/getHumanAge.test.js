'use strict';

const { getHumanAge } = require('./getHumanAge');

describe('getHumanAge', () => {
  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('return an array', () => {
    const result = getHumanAge(15, 15);

    expect(result).toBeInstanceOf(Array);
  });

  test(`return zero for the zero animal's age`, () => {
    const result = getHumanAge(0, 0);

    expect(result).toEqual([0, 0]);
  });

  test(`return zero for the animal's age `
    + `less than 15`, () => {
    const result = getHumanAge(14, 14);

    expect(result).toEqual([0, 0]);
  });

  test(`one human year is returned `
    + `for the animal age value of 15`, () => {
    const result = getHumanAge(15, 15);

    expect(result).toEqual([1, 1]);
  });

  test(`one human year is returned `
    + `for the animal age value of 23`, () => {
    const result = getHumanAge(23, 23);

    expect(result).toEqual([1, 1]);
  });

  test(`add one more human year `
    + `for the animal age value of 24`, () => {
    const result = getHumanAge(24, 24);

    expect(result).toEqual([2, 2]);
  });

  test(`adds one extra year `
    + `when the cat's age is 28`, () => {
    const result = getHumanAge(28, 24);

    expect(result).toEqual([3, 2]);
  });

  test(`adds one extra year `
    + `when the dog's age is 29`, () => {
    const result = getHumanAge(27, 29);

    expect(result).toEqual([2, 3]);
  });

  test(`every 4 subsequent years adds one extra year `
    + `when the cat's age is greater than 24`, () => {
    const result = getHumanAge(100, 29);

    expect(result).toEqual([21, 3]);
  });

  test(`every 5 subsequent years adds one extra year `
    + `when the dog's age is greater than 24`, () => {
    const result = getHumanAge(28, 100);

    expect(result).toEqual([3, 17]);
  });

  test(`return 2 human years when 24 <= cat's age < 28`, () => {
    const result = getHumanAge(27, 24);

    expect(result).toEqual([2, 2]);
  });

  test(`return 2 human years when 24 <= dog's age < 29`, () => {
    const result = getHumanAge(28, 28);

    expect(result).toEqual([3, 2]);
  });
});
