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

  test('should return 1 humanAge for both if animals ages < 24 and animals ages >= 15', () => {
    const humanAge = getHumanAge(15, 23);

    expect(humanAge).toEqual([1, 1]);
  });

  test('should return 2 humanAge for both if animals ages = 24', () => {
    const humanAge = getHumanAge(24, 24);

    expect(humanAge).toEqual([2, 2]);
  });

  test('should not add 1 more human year if catAge > 24 and catAge < (24 + 4)', () => {
    const humanAge = getHumanAge(27, 24);

    expect(humanAge).toEqual([2, 2]);
  });

  test('should not add 1 more human year if dogAge > 24 and dogAge < (24 + 5)', () => {
    const humanAge = getHumanAge(24, 28);

    expect(humanAge).toEqual([2, 2]);
  });

  test('should add 1 more human year for every next 4 cats and every next 5 dogs years after 24', () => {
    const humanAge = getHumanAge(28, 34);

    expect(humanAge).toEqual([3, 4]);
  });
});
