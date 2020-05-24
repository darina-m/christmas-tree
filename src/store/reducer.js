import * as actions from "./actions";

const initialState = {
  toys: null,
  price: 100,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_TOY:
      return state;

    case actions.REMOVE_TOY:
      return state;

    default:
      return state;
  }
};
