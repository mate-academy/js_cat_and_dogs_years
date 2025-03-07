'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test(`should return 0 and 0 when dog's and cat's ages are 0`, () => {
    const result = getHumanAge(0, 0);

    expect(result)
      .toEqual([0, 0]);
  });

  test(`should return 0 and 0 when dog's and cat's ages are 1`, () => {
    const result = getHumanAge(1, 1);

    expect(result)
      .toEqual([0, 0]);
  });

  test(`should return 0 and 0 when dog's and cat's ages are under 15`, () => {
    const result = getHumanAge(14, 14);

    expect(result)
      .toEqual([0, 0]);
  });

  test(`should return 1 and 1 when dog's and cat's ages are 15`, () => {
    const result = getHumanAge(15, 15);

    expect(result)
      .toEqual([1, 1]);
  });

  test(`should return 1 and 1 when dog's and cat's ages are 23`, () => {
    const result = getHumanAge(23, 23);

    expect(result)
      .toEqual([1, 1]);
  });

  test(`should return 2 and 2 when dog's and cat's ages are 24`, () => {
    const result = getHumanAge(24, 24);

    expect(result)
      .toEqual([2, 2]);
  });

  test(`should return 2 and 2 when dog's and cat's ages are 27`, () => {
    const result = getHumanAge(27, 27);

    expect(result)
      .toEqual([2, 2]);
  });

  test(`should return 3 and 2 when dog's and cat's ages are 28`, () => {
    const result = getHumanAge(28, 28);

    expect(result)
      .toEqual([3, 2]);
  });

  test(`should return 3 and 3 when dog's and cat's ages are 29`, () => {
    const result = getHumanAge(29, 29);

    expect(result)
      .toEqual([3, 3]);
  });

  test(`should return 121 and 97 when dog's and cat's ages are 29`, () => {
    const result = getHumanAge(500, 500);

    expect(result)
      .toEqual([121, 97]);
  });
});
