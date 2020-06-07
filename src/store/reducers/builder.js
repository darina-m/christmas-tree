import * as types from "../actions/types";

const initialState = {
  toys: null,
  price: 100,
};

export default (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case types.ADD_TOY:
      newState.toys[action.toy].quantity++;
      newState.price = state.price + state.toys[action.toy].price;

      return newState;
    case types.REMOVE_TOY:
      newState.toys[action.toy].quantity++;
      newState.price = state.price - state.toys[action.toy].price;

    case types.SET_TOYS:
      newState.toys = action.toys;
      newState.price = initialState.price;

    default:
      return newState;
  }
};
