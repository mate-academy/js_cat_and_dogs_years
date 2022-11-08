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

  test('should return an expected HumanAge when cat&dog have 0 <= years < 15'
    , () => {
      const goals = getHumanAge(0, 14);

      expect(goals).toEqual([0, 0]);
    });

  test('should return an expected HumanAge when cat&dog have 15 <= years < 24'
    , () => {
      const goals = getHumanAge(15, 23);

      expect(goals).toEqual([1, 1]);
    });

  test('should return an expected HumanAge when cat&dog have 24 <= years'
    , () => {
      const goals = getHumanAge(24, 99);

      expect(goals).toEqual([2, 17]);
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
