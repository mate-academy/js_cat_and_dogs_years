'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('getHumanAge function should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  })
  
  test('Function should return an array',()=> {
    expect(getHumanAge(15,15))
      .toBeInstanceOf(Array)
  });

  test('Values should be numeric',()=> {
    expect(getHumanAge('a','b')).toEqual([NaN,NaN])
  });

  test('Function should return a [0,0] result if both dogs and cats years are 0',()=> {
    const goals = getHumanAge(0,0)
    expect(goals).toEqual([0,0])
  });

  test('Function should return a [0,0] result if both dogs and cats years are below 15',()=> {
    const goals = getHumanAge(14,14)
    expect(goals).toEqual([0,0])
  });

  test('First 15 years of both cats and dogs counts as 1 human year',()=> {
    const goals = getHumanAge(15,15)
    expect(goals).toEqual([1,1])
  });

  test('Years from 15-23 of both cats and dogs counts as 1 human year',()=> {
    const goals = getHumanAge(23,23)
    expect(goals).toEqual([1,1])
  });

  test('Every 4 years after 24 counts as 1 human year for cats ',()=> {
    const goals = getHumanAge(28,28)
    expect(goals).toEqual([3,2])
  });

  test('Every 5 years after 24 counts as 1 human year for dogs ',()=> {
    const goals = getHumanAge(28,29)
    expect(goals).toEqual([3,3])
  });

  test('Float values ​​should be rounded down',()=> {
    const goals = getHumanAge(15.5,15.5)
    expect(goals).toEqual([1,1])
  });

});
