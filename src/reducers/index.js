import { combineReducers } from "redux";

const setRandomNumber = (state = 0, action) => {
  switch (action.type) {
    case "RANDOM_NUMBER":
      return { ...state, randomNumber: action.randomNumber };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  setRandomNumber,
});

export default rootReducer;
