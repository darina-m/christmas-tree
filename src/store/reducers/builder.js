import * as types from "../actions/types";

const initialState = {
  toys: {
    blueBall: { quantity: 1, price: 50, label: "BLue ball" },
    orangeBall: { quantity: 1, price: 57, label: "Orange ball" },
    pinkBall: { quantity: 1, price: 55, label: "Pink ball" },
    greenBall: { quantity: 1, price: 45, label: "Green ball" },
    lightBlueBall: { quantity: 1, price: 43, label: "Light-blue ball" },
    yellowBall: { quantity: 1, price: 54, label: " Yellow ball" },
  },
  price: 100,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TOY:
      return {
        ...state,
        toys: {
          ...state.toys,
          [action.toy]: {
            ...state.toys[action.toy],
            quantity: state.toys[action.toy].quantity + 1,
          },
        },
        price: state.price + state.toys[action.toy].price,
      };

    case types.REMOVE_TOY:
      return {
        ...state,
        toys: {
          ...state.toys,
          [action.toy]: {
            ...state.toys[action.toy],
            quantity: state.toys[action.toy].quantity - 1,
          },
        },
        price: state.price + state.toys[action.toy].price,
      };

    default:
      return state;
  }
};
