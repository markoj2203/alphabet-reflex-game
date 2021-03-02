import { combineReducers } from "redux";

const setRandomNumber = (state = 0, action) => {
  switch (action.type) {
    case "RANDOM_NUMBER":
      return { ...state, randomNumber: action.randomNumber };
    default:
      return state;
  }
};

const scoreTable = (state = {}, action) => {
  switch (action.type) {
    case "SCORE_TABLE":
      return { ...state, score: action.score };
    default:
      return state;
  }
};

const leftNumbers = (state = {}, action) => {
  switch (action.type) {
    case "LEFT_ALPHABET_NUMBER":
      return { ...state, alphabet: action.alphabet };
    default:
      return state;
  }
};

const levelChanges = (state = "", action) => {
  switch (action.type) {
    case "LEVEL_CHANGES":
      return { ...state, level: action.level };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  setRandomNumber,
  scoreTable,
  leftNumbers,
  levelChanges,
});

export default rootReducer;
