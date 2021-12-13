describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('catAge and dogAge should return 0 if humanAge is 0 for both', () => {
    expect(getHumanAge(0,0))
    .toEqual([0, 0])
  })

  test('dogAge should return 0 if humanAge is 0 for dogAge and сatAge should return \
  2 when humanAge is 24', () => {
    expect(getHumanAge(25,0))
    .toEqual([2, 0])
  })

  test('catAge should return 0 if humanAge is 0 for catAge and dogAge should return \
  4 when humanAge is 34', () => {
    expect(getHumanAge(0,34))
    .toEqual([0, 4])
  })

  test('catAge and dogAge should return 1 both if humanAge is 15 for both', () => {
    expect(getHumanAge(15,15))
    .toEqual([1, 1])
  })

  test('catAge and dogAge should return 2 for both if humanAge is 24 for cat and 26 \
  for dog', () => {
    expect(getHumanAge(24,26))
    .toEqual([2, 2])
  })

  test('catAge and dogAge should return 3 both if humanAge is 28 for cat and 29 \
  for dog', () => {
    expect(getHumanAge(28,29))
    .toEqual([3,3])
  })

  test('catAge should return 18 and dogAge should return 15 if humanAge is 90 for both', () => {
    expect(getHumanAge(90,90))
    .toEqual([18,15])
  })

});