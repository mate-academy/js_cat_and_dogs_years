'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test(`fucntion should return [0, 0] if values < 15
  first 15 cat and dog years give 1 human year`, () => {
    expect(getHumanAge(13, 5))
      .toEqual([0, 0]);
  }); // First 15 cat and dog years give 1 human year

  test(`should return [1, 1] if values >= 15 and < 24
  first 15 cat and dog years give 1 human year
  the next 9 cat and dog years give 1 more human year`, () => {
    expect(getHumanAge(15, 22))
      .toEqual([1, 1]);
  }); 

  test(`should return 2 in first value if catAge >= 24 and < 28,
  every 4 next cat years give 1 extra human year`, () => {
    expect(getHumanAge(24, 0))
      .toEqual([2, 0]);
  });

  test(`should return 2 in second value if dogAge >= 24 and < 29
  every 5 next dog years give 1 extra human year`, () => {
    expect(getHumanAge(0, 24))
      .toEqual([0, 2]);
  });

  test(`should add 1 to first value for every 4 catAge after 24
  every 4 next cat years give 1 extra human year`, () => {
    expect(getHumanAge(28, 0))
      .toEqual([3, 0]);
  });

  test(`should add 1 to second value for every 5 dogAge after 24
  every 5 next dog years give 1 extra human year`, () => {
    expect(getHumanAge(0, 29))
      .toEqual([0, 3]);
  });
});
