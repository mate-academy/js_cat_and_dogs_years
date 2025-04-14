'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test ('the result should return an array', () => {
    const result = getHumanAge();
    expect(result)
    .toBeInstanceOf(Array);
  });

  test ('should return an array with two elements', () => {
    const result = getHumanAge(1,1);
    expect(result.length)
    .toBe(2);
  });

 
  test ('should return zeros if both variables are zeros', () => {
    const result = getHumanAge(0,0);
    expect(result)
    .toEqual([0,0]);
  });

  test ('should return [0,0] when animals ages are less than 15', () => {
    const result = getHumanAge(14,14);
    expect (result)
    .toEqual([0,0]);
  });
  test ('should return one year of human when animals ages are equal 15', () => {
    const result = getHumanAge(15,15);
    expect (result)
    .toEqual([1,1]);
  });

  test ('should return [1,1] when animals ages are less than 24', () => {
    const result = getHumanAge(23,23);
    expect (result)
    .toEqual([1,1]);
  });

  test ('should return two years of human when animal ages are equal 24', () => {
    const result = getHumanAge(24,24);
    expect(result)
    .toEqual([2,2]);
  });

  test ('should return [2,2] when animals ages are less than 28', () => {
    const result = getHumanAge(27,27);
    expect(result)
    .toEqual([2,2]);
  });

  test ('28 of cats years and 28 of dogs years should return in [3,2]', () => {
    const result = getHumanAge(28,28);
    expect(result)
    .toEqual([3,2]);
  });

  test ('100 of cats years and 100 of dogs years should return in [21,17]', () => {
    const result = getHumanAge(100,100);
    expect(result)
    .toEqual([21,17]);
  });

});
// /just added some note so the mentor could review my work