'use strict';

/**
 * @param {number} catAge
 * @param {number} dogAge
 * @returns {[number, number]} [catHumanAge, dogHumanAge]
 */
function getHumanAge(catAge, dogAge) {
  const convert = (age, steps) => {
    if (age < steps[0]) {
      return 0;
    }

    if (age < steps[0] + steps[1]) {
      return 1;
    }

    const remaining = age - (steps[0] + steps[1]);

    return 2 + Math.floor(remaining / steps[2]);
  };

  const catHumanAge = convert(catAge, [15, 9, 4]);
  const dogHumanAge = convert(dogAge, [15, 9, 5]);

  return [catHumanAge, dogHumanAge];
}

module.exports = getHumanAge;
