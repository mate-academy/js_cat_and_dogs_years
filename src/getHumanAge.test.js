'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return an array ', () => {
    const goals = getHumanAge(0, 0);

    expect(goals).toBeInstanceOf(Array);
  }); /* normaly this test is not necessary because of next test */

  test('should return an expected HumanAge', () => {
    const goals = getHumanAge(15, 15);

    expect(goals).toEqual([1, 1]);
  });

  test('shoul return [0, 0], if cat&dog have 0 <= year < 1', () => {
    const goals = getHumanAge(0, 0);

    expect(goals).toEqual([0, 0]);
  });

  test('should return [0,0] if two inegers (catAge&dogAge) are < 0', () => {
    const goals = getHumanAge(-27, -27);

    expect(goals).toEqual([0, 0]);
  });

  test('should return a whole number of years (discard the remainder)', () => {
    const goals = getHumanAge(100, 100);

    expect(goals).toEqual([21, 17]);
  });
});
