/* eslint-disable max-len */
'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return [0, 0] if catAge is 0 and dogAge is 0', () => {
    const humanAge = getHumanAge(0, 0);

    expect(humanAge).toEqual([0, 0]);
  });

  test('should return 0 humanAge for both if animals ages < 15', () => {
    const humanAge = getHumanAge(14, 14);

    expect(humanAge).toEqual([0, 0]);
  });

  test('For first cat or dog 15 years should return 1 human year', () => {
    const humanAge = getHumanAge(15, 23);

    expect(humanAge).toEqual([1, 1]);
  });

  test('Should add 1 more year for next 9 cat or dog years after first 15', () => {
    const humanAge = getHumanAge(24, 24);

    expect(humanAge).toEqual([2, 2]);
  });

  test('After first 15 and next 9 animals years should add 1 extra year for subsequent 4 cats years', () => {
    const humanAge = getHumanAge(28, 24);

    expect(humanAge).toEqual([3, 2]);
  });

  test('After first 15 and next 9 animals years should add 1 extra year for subsequent 5 dogs years', () => {
    const humanAge = getHumanAge(26, 34);

    expect(humanAge).toEqual([2, 4]);
  });
});
