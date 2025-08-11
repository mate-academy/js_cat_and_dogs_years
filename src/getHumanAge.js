'use strict';

function getHumanAge(catAge, dogAge) {
  const catToHuman = convertToHumanAge(catAge, [15, 9, 4]);
  const dogToHuman = convertToHumanAge(dogAge, [15, 9, 5]);

  return [catToHuman, dogToHuman];
}

function convertToHumanAge(animalAge, ageMapping) {
  if (animalAge < 1) {
    return 0;
  }

  let humanAge = 0;
  let remainingAge = animalAge; // Використовуємо нову змінну

  if (remainingAge >= ageMapping[0]) {
    humanAge += 1;
    remainingAge -= ageMapping[0];

    if (remainingAge >= ageMapping[1]) {
      humanAge += 1;
      remainingAge -= ageMapping[1];

      humanAge += Math.floor(remainingAge / ageMapping[2]);
    }
  }

  return humanAge;
}

module.exports = getHumanAge;
