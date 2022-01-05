// eslint-disable-next-line strict
describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });
  // eslint-disable-next-line padding-line-between-statements
  test(`should return '[0, 0]', when catAge = 0, dogAge = 0 `, () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });
  // eslint-disable-next-line padding-line-between-statements
  test(`should return '[0, 0]', when catAge = 14, dogAge = 14`, () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });
  // eslint-disable-next-line padding-line-between-statements
  test(`should return '[1, 1]', when catAge = 15, dogAge = 15`, () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });
  // eslint-disable-next-line padding-line-between-statements
  test(`should return '[1, 1]'', when catAge = 23, dogAge = 23`, () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });
  // eslint-disable-next-line padding-line-between-statements
  test(`should return '[2, 2]', when catAge = 24, dogAge = 24`, () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });
  // eslint-disable-next-line padding-line-between-statements
  test(`should return '[2, 2]', when catAge = 27, dogAge = 27`, () => {
    expect(getHumanAge(27, 27))
      .toEqual([2, 2]);
  });
  // eslint-disable-next-line padding-line-between-statements
  test(`should return '[3, 2]', when catAge = 28, dogAge = 28`, () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });
  // eslint-disable-next-line padding-line-between-statements
  test(`should return '[21, 17]', when catAge = 100, dogAge = 100`, () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });
  // eslint-disable-next-line padding-line-between-statements
  test(`should return '[0, NaN]', when catAge = 1`, () => {
    expect(getHumanAge(1))
      .toEqual([0, NaN]);
  });
  // eslint-disable-next-line padding-line-between-statements
  test(`should return '[NaN, 0]', when catAge = 'string', dogAge = 1 `, () => {
    expect(getHumanAge('Men', 1))
      .toEqual([NaN, 0]);
  });
});
