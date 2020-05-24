import * as actions from "./actions";

const initialState = {
  toys: {
    blueBall: 1,
    orangeBall: 1,
    pinkBall: 1,
    greenBall: 1,
    lightBlueBall: 1,
    yellowBall: 1,
  },
  price: 100,
};
const PRICES = {
  blueBall: 50,
  orangeBall: 57,
  pinkBall: 55,
  greenBall: 45,
  lightBlueBall: 43,
  yellowBall: 54,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_TOY:
      return {
        ...state,
        toys: {
          ...state.toys,
          [action.toy]: state.toys[action.toy] + 1,
        },
        price: state.price + PRICES[action.toy],
      };

    case actions.REMOVE_TOY:
      return {
        ...state,
        toys: {
          ...state.toys,
          [action.toy]: state.toys[action.toy] - 1,
        },
        price: state.price + PRICES[action.toy],
      };

    default:
      return state;
  }
};
