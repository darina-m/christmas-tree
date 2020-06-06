import axios from "../../axios";
import { ADD_TOY, REMOVE_TOY, SET_TOYS } from "./types";
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

export const set = (dispatch, toys) =>
  dispatch({
    type: SET_TOYS,
    toys,
  });

export const load = (dispatch) =>
  axios
    .get("/toys.json")
    .then(({ data }) => set(dispatch, data))
    .catch(() => {});
