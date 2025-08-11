'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should correctly convert cat and dog years to human years', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should not convert if cat year equal zero', () => {
    expect(getHumanAge(0, 15)).toEqual([0, 1]);
  });

  test('should not convert if dog year equal zero', () => {
    expect(getHumanAge(15, 0)).toEqual([1, 0]);
  });

  test('should convert if cat and dog year more then 15', () =>{
    expect(getHumanAge(32, 35)).toEqual([4, 4]);
  });

  test('should convert if cat and dog year is less than 15', () => {
    expect(getHumanAge(1, 1)).toEqual([0, 0]);
  });
});
