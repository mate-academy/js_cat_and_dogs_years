'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('should return an array', () => {
    expect(getHumanAge(15, 15)).toBeInstanceOf(Array);
  });

  test('should return zeroes if both ages less then first limit', () => {
    expect(getHumanAge(10, 13)).toEqual([0, 0]);
  });

  test('should return zeroes for zero arguments', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return zero for argument which less then first limit', () => {
    expect(getHumanAge(12, 19)).toEqual([0, 1]);
    expect(getHumanAge(20, 8)).toEqual([1, 0]);
  });

  test('should return 1 if arguments equal to first limit', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should return 1 for arguments under the second limit', () => {
    expect(getHumanAge(16, 17)).toEqual([1, 1]);

    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should return 2 for arguments equal to the second limit', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test(
    'should return 2 for arguments more then second '
      + 'but less then third limit',
    () => {
      expect(getHumanAge(27, 28)).toEqual([2, 2]);
    }
  );

  test('should return  3 for arguments equal the third limit', () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
  });

  test('should return right age for arguments above the third limit', () => {
    expect(getHumanAge(30, 30)).toEqual([3, 3]);
    expect(getHumanAge(32, 30)).toEqual([4, 3]);
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
