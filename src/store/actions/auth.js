import { AUTH_SUCCESS, AUTH_FAIL, AUTH_START } from "./types";
import axios from "axios";

export const start = (dispatch) =>
  dispatch({
    type: AUTH_START,
  });

export const success = (dispatch, { idToken, localId }) =>
  dispatch({
    type: AUTH_SUCCESS,
    id: idToken,
    token: localId,
  });

export const fail = (dispatch, error) =>
  dispatch({
    type: AUTH_FAIL,
    error,
  });

export const auth = (dispatch, email, password) =>
  axios
    .post(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCNDNWnsm7XXc3tfClbnz1Mu2AdE99smiI",
      { email, password }
    )
    .then(({ data }) => success(dispatch, data))
    .catch((error) => fail(dispatch, error));
