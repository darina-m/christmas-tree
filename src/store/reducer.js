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

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_TOY:
      return {
        ...state,
        toys: {
          ...state.toys,
          [action.toy]: state.toys[action.toy] + 1,
        },
      };

    case actions.REMOVE_TOY:
      return {
        ...state,
        toys: {
          ...state.toys,
          [action.toy]: state.toys[action.toy] - 1,
        },
      };

    default:
      return state;
  }
};
