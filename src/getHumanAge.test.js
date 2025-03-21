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

  test('should return [0, 0] if two inegers (catAge&dogAge) are < 0', () => {
    const goals = getHumanAge(-27, -27);

    expect(goals).toEqual([0, 0]);
  });

  test('should return an expected HumanAge when cat&dog have 0 yo each'
    , () => {
      const goals = getHumanAge(0, 0);

      expect(goals).toEqual([0, 0]);
    });

  test('should return an expected HumanAge when cat&dog have 1 yo each'
    , () => {
      const goals = getHumanAge(1, 1);

      expect(goals).toEqual([0, 0]);
    });

  test('should return an expected HumanAge when cat&dog have 14 yo each'
    , () => {
      const goals = getHumanAge(14, 14);

      expect(goals).toEqual([0, 0]);
    });

  test('should return an expected HumanAge when cat&dog have 15 yo each'
    , () => {
      const goals = getHumanAge(15, 15);

      expect(goals).toEqual([1, 1]);
    });

  test('should return an expected HumanAge when cat&dog have 16 yo each'
    , () => {
      const goals = getHumanAge(16, 16);

      expect(goals).toEqual([1, 1]);
    });

  test('should return an expected HumanAge when cat&dog have 23 yo'
    , () => {
      const goals = getHumanAge(23, 23);

      expect(goals).toEqual([1, 1]);
    });

  test('should return an expected HumanAge when cat&dog have 24 yo each'
    , () => {
      const goals = getHumanAge(24, 24);

      expect(goals).toEqual([2, 2]);
    });

  test('should return an expected HumanAge when cat&dog have 25 yo each'
    , () => {
      const goals = getHumanAge(25, 25);

      expect(goals).toEqual([2, 2]);
    });

  test('should return an expected HumanAge when cat has 27 yo, dog - 28 yo'
    , () => {
      const goals = getHumanAge(27, 28);

      expect(goals).toEqual([2, 2]);
    });

  test('should return an expected HumanAge when cat has 28 yo, dog - 29 yo'
    , () => {
      const goals = getHumanAge(28, 29);

      expect(goals).toEqual([3, 3]);
    });

  test('should return an expected HumanAge when cat has 29 yo, dog - 30 yo'
    , () => {
      const goals = getHumanAge(29, 30);

      expect(goals).toEqual([3, 3]);
    });

  test('should return a whole number of years (discard the remainder)', () => {
    const goals = getHumanAge(100, 100);

    expect(goals).toEqual([21, 17]);
  });
});
