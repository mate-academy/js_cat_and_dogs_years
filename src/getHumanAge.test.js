'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  it('should return an array', () => {
    expect(getHumanAge(0, 0)).toBeInstanceOf(Array);
  });

  it(`should return [0, 0] when catAge = 0 and dogAge = 0`,
    () => {
      expect(getHumanAge(0, 0))
        .toEqual([0, 0]);
    });

  it(`should return [0, 0] when catAge = 5 and dogAge = 5`,
    () => {
      expect(getHumanAge(5, 5))
        .toEqual([0, 0]);
    });

  it(`should return [0, 0] when catAge = 14 and dogAge = 14`,
    () => {
      expect(getHumanAge(14, 14))
        .toEqual([0, 0]);
    });

  it(`should return [1, 1] when catAge = 15 and dogAge = 15`,
    () => {
      expect(getHumanAge(15, 15))
        .toEqual([1, 1]);
    });

  it(`should return [1, 1] when catAge = 20 and dogAge = 20`,
    () => {
      expect(getHumanAge(20, 20))
        .toEqual([1, 1]);
    });

  it(`should return [1, 1] when catAge = 23 and dogAge = 23`,
    () => {
      expect(getHumanAge(23, 23))
        .toEqual([1, 1]);
    });

  it(`should return [2, 2] when catAge = 24 and dogAge = 24`,
    () => {
      expect(getHumanAge(24, 24))
        .toEqual([2, 2]);
    });

  it(`should return [21, 17]
  when input catAge = 100 and dogAge = 100`,
  () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });
});
