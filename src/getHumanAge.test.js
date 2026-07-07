/* eslint-disable max-len */
/* eslint-disable prettier/prettier */
'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('check 1 human year', () => {
    const res = getHumanAge(15, 15);

    expect(res).toEqual([1, 1]);
  });

  test('the next 9 cat years give 1 more human year &  the next 9 dog years give 1 more human year ', () => {
    const res = getHumanAge(24, 24);

    expect(res).toEqual([2, 2]);
  });

  test('every 4 next cat years give 1 human year also every 5 next dog years give 1 extra human year', () => {
    const res = getHumanAge(28, 28);

    expect(res).toEqual([3, 2]);
  });
});
