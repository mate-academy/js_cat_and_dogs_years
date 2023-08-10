'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test(' if value catAge and dogAge is 14 and 14 output [0, 0]', () => {
    const humanAge = getHumanAge(14, 14);

    expect(humanAge)
      .toEqual([0, 0]);
  });

  test(' if value catAge and dogAge is 15 and 15 output [1, 1]', () => {
    const humanAge = getHumanAge(15, 15);

    expect(humanAge)
      .toEqual([1, 1]);
  });

  test(' if value catAge and dogAge is 16 and 16 output [1, 1]', () => {
    const humanAge = getHumanAge(15, 15);

    expect(humanAge)
      .toEqual([1, 1]);
  });

  test(' if value catAge and dogAge is 23 and 23 output [1, 1]', () => {
    const humanAge = getHumanAge(23, 23);

    expect(humanAge)
      .toEqual([1, 1]);
  });

  test(' if value catAge and dogAge is 24 and 24 output [2, 2]', () => {
    const humanAge = getHumanAge(24, 24);

    expect(humanAge)
      .toEqual([2, 2]);
  });

  test(' if value catAge and dogAge is 25 and 25 output [2, 2]', () => {
    const humanAge = getHumanAge(25, 25);

    expect(humanAge)
      .toEqual([2, 2]);
  });

  test(' if value catAge and dogAge is 28 and 28 output [3, 2]', () => {
    const humanAge = getHumanAge(28, 28);

    expect(humanAge)
      .toEqual([3, 2]);
  });

  test(' if value catAge and dogAge is 28 and 29 output [3, 3]', () => {
    const humanAge = getHumanAge(28, 29);

    expect(humanAge)
      .toEqual([3, 3]);
  });

  test(' if value catAge and dogAge is 43 and 44 output [6, 6]', () => {
    const humanAge = getHumanAge(43, 44);

    expect(humanAge)
      .toEqual([6, 6]);
  });

  test(' if value catAge and dogAge is 63 and 63 output [11, 9]', () => {
    const humanAge = getHumanAge(63, 63);

    expect(humanAge)
      .toEqual([11, 9]);
  });

  test(' if value catAge and dogAge is 83 and 84 output [14, 13]', () => {
    const humanAge = getHumanAge(43, 44);

    expect(humanAge)
      .toEqual([6, 6]);
  });

  test(' if value catAge and dogAge is 100 and 100 output [21, 17]', () => {
    const humanAge = getHumanAge(100, 100);

    expect(humanAge)
      .toEqual([21, 17]);
  });

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });
});
