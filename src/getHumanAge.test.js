'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  it(`should be declared`, () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  it(`should return [0,0] if cat and god years equal 0`, () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  it(`should return [0,0] if cat and god years equal 14`, () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  it(`should return [1,1] if cat and god years equal 15`, () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  it(`should return [1,1] if cat and god years equal 23`, () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  it(`should return [2,2] if cat and god years equal 24`, () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  it(`should return [2,2] if cat and god years equal 27`, () => {
    expect(getHumanAge(27, 27))
      .toEqual([2, 2]);
  });

  it(`should return [3,2] if cat and dog years equal 28`, () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  it(`should return [3,3] if cat and dog years equal 29`, () => {
    expect(getHumanAge(29, 29))
      .toEqual([3, 3]);
  });

  it(`should return array with NaN values if there are no variables`, () => {
    expect(getHumanAge())
      .toEqual([NaN, NaN]);
  });

  it(`should return [0, 0] if variables equal null`, () => {
    expect(getHumanAge(null, null))
      .toEqual([0, 0]);
  });

  it(`should return [NaN, NaN] if variables equal undefined`, () => {
    expect(getHumanAge(undefined, undefined))
      .toEqual([NaN, NaN]);
  });

  it(`should return [0, 0] if type of variables equal 'boolean'`, () => {
    expect(getHumanAge(false, true))
      .toEqual([0, 0]);
  });

  it(`should return [NaN, NaN] if variables consist of arrays`, () => {
    expect(getHumanAge([0, 15], [42, 85]))
      .toEqual([NaN, NaN]);
  });

  it(`should return [NaN, NaN] if variables consist of objects`, () => {
    expect(getHumanAge({ catAge: 13 }, { dogAge: 28 }))
      .toEqual([NaN, NaN]);
  });

  it(`should return [NaN, NaN] if type of variables equal 'string'`, () => {
    expect(getHumanAge('one', 'two'))
      .toEqual([NaN, NaN]);
  });
});
