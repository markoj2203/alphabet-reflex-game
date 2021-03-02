export const setRandomNumber = (randomNumber) => {
  return {
    type: "RANDOM_NUMBER",
    payload: randomNumber,
  };
};

export const scoreTable = (score) => {
  return {
    type: "RANDOM_NUMBER",
    payload: score,
  };
};

export const leftNumbers = (alphabet) => {
  return {
    type: "LEFT_ALPHABET_NUMBER",
    payload: alphabet,
  };
};

export const levelChanges = (level) => {
  return {
    type: "LEVEL_CHANGES",
    payload: level,
  };
};
