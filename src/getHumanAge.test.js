'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test(`shoud return [0, 0] if both animals lived less than 15 years`, () => {
    expect(getHumanAge(10, 10))
      .toContain(0, 0);
  });

  test(`shoud return [0, 0] if both animals lived for 14 years`, () => {
    expect(getHumanAge(14, 14))
      .toContain(0, 0);
  });

  test(`shoud return [1, 1] if both animals' age = 15`, () => {
    expect(getHumanAge(15, 15))
      .toContain(1, 1);
  });

  test(`shoud return [1, 1] if both animals lived for 23 years`, () => {
    expect(getHumanAge(23, 23))
      .toContain(1, 1);
  });

  test(`shoud return [2, 2] if both animals lived for 24 years`, () => {
    expect(getHumanAge(24, 24))
      .toContain(2, 2);
  });

  // eslint-disable-next-line max-len
  test(`shoud return [2, 2] if cat lived for 27 years and dog lived for 28 years`, () => {
    expect(getHumanAge(27, 28))
      .toContain(2, 2);
  });

  // eslint-disable-next-line max-len
  test(`shoud return [3, 3] if cat lived for 28 years and dog lived for 29 years`, () => {
    expect(getHumanAge(28, 29))
      .toContain(3, 3);
  });

  test(`shoud return [11, 9] if both animals lived for 60 years`, () => {
    expect(getHumanAge(60, 60))
      .toContain(11, 9);
  });
});
