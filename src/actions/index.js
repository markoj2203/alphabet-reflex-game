export const setRandomNumber = (randomNumber) => {
  return {
    type: "RANDOM_NUMBER",
    payload: randomNumber,
  };
};
