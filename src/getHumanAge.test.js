'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return 0 when input is equal 0', () => {
    const goals = getHumanAge(0, 0);

    expect(goals)
      .toEqual([0, 0]);
  });

  test('should return 0 if both arguments 1-14 animal years', () => {
    const goals = getHumanAge(10, 10);

    expect(goals)
      .toEqual([0, 0]);
  });

  test(`should return 1 human years 
  if both arguments 15-23 animal years`, () => {
    const goals = getHumanAge(17, 17);

    expect(goals)
      .toEqual([1, 1]);
  });

  test(`should return 2 human years
   if both arguments 24-27 animal years`, () => {
    const goals = getHumanAge(25, 25);

    expect(goals)
      .toEqual([2, 2]);
  });

  test(`should return add 1 human years for cats 
   if arguments is equal 28`, () => {
    const goals = getHumanAge(28, 28);

    expect(goals)
      .toEqual([3, 2]);
  });

  test(`every 4 cat years and every 5 dogs years
   should add 1 human years`, () => {
    const goals = getHumanAge(43, 43);

    expect(goals)
      .toEqual([6, 5]);
  });
});
