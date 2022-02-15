'use strict';

describe('getHumanAge', () => {
  const { getHumanAge, getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return 0, when catAge = 0, dogAge = 0',()=> {
    expected(getHumanAge([0,0]))
      .toEqual([0,0]);
  });
  
  test('should return 0, when catAge < 15, dogAge < 15',()=> {
    expected(getHumanAge([13,13]))
      .toEqual([0,0]);
  });
  
  test('should return 1, when catAge = 15, dogAge = 15',()=> {
    expected(getHumanAge([15,15]))
      .toEqual([1,1]);
  });
  
  test('should return 2, when catAge = 24, dogAge = 24',()=> {
    expected(getHumanAge([24,24]))
      .toEqual([2,2]);
  });
  
  test('should return 2, when catAge = 27, dogAge = 27',()=> {
    expected(getHumanAge([27,27]))
      .toEqual([2,2]);
  });
  
  test('should return [3,2], when catAge = 28, dogAge = 28',()=> {
    expected(getHumanAge([28,28]))
      .toEqual([3,2]);
  });
  
  test('should return 3, when catAge = 29, dogAge = 29',()=> {
    expected(getHumanAge([15,15]))
      .toEqual([1,1]);
  });
  
  test('should return diferent result, when inputs random',()=> {
    expected(getHumanAge([100,100]))
      .toEqual([21,17]);
  });
});

