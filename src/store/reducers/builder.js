import * as types from "../actions/types";

const initialState = {
  toys: null,
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
    case types.SET_TOYS:
      return {
        ...state,
        toys: action.toys,
        price: initialState.price,
      };

    default:
      return state;
  }
};
