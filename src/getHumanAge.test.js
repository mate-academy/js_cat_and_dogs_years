'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('should convert ages that are less then 1', () => {
    expect(getHumanAge(0, 14)).toEqual([0, 0]);
  });

  test('should convert ages that are equal to 1', () => {
    expect(getHumanAge(15, 23)).toEqual([1, 1]);
  });

  test('should convert cat\'s age that are equal to 2', () => {
    expect(getHumanAge(27, 0)).toEqual([2, 0]);
  });

  test('should convert dog\'s age that are equal to 2', () => {
    expect(getHumanAge(0, 28)).toEqual([0, 2]);
  });

  test('should convert cat\'s age that are equal to 15', () => {
    expect(getHumanAge(77, 0)).toEqual([15, 0]);
  });

  test('should convert dog\'s age that are equal to 15', () => {
    expect(getHumanAge(0, 93)).toEqual([0, 15]);
  });
});
