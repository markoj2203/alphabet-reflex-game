//get timestamp by difficulty level
export const timestampByDifficulty = (diff) => {
  let time = 3000;
  if (diff === "easy") {
    time = 5000;
  } else if (diff === "medium") {
    time = 3500;
  } else {
    time = 2000;
  }

  return time;
};
