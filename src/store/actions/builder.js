import { ADD_TOY, REMOVE_TOY } from "./types";

export const add = (dispatch, toy) =>
  dispatch({
    type: ADD_TOY,
    toy,
  });

export const remove = (dispatch, toy) =>
  dispatch({
    type: REMOVE_TOY,
    toy,
  });
