import React, { useState } from "react";
import axios from "axios";
import withAxios from "../../hoc/withAxios/withAxios";
import classes from "./Auth.module.css";
import { start, auth } from "../../store/actions/auth";
import Button from "../UI/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../UI/Spinner/Spinner";

export default withAxios(() => {
  const dispatch = useDispatch();
  const [ method, setMethod ] = useState(null);
  const { loading, error } = useSelector(state => state.auth);

  const formSubmitted = (event) => {
    start(dispatch);

    const data = new FormData(event.target);
    auth(dispatch, method, data.get("email"), data.get("password"));

    event.preventDefault();
  };

  let formOutput = <Spinner />;
  if (!loading) {
    formOutput = (
      <form onSubmit={formSubmitted}>
        <h1>Welcome!</h1>
        <input type="email" placeholder="E-mail" name="email" required />
        <input
          type="password"
          placeholder="Password"
          name="password"
          required
          minLength="6"
        />
        <Button click={() => setMethod('signin')} green>Sign in</Button>
        <Button click={() => setMethod('signup')} red>Sign up</Button>
      </form>
    );
  }
  let errorOutput = null;
  if (error) {
    errorOutput = <h4 className={classes.error}>{error.message}</h4>;
  }
  return <div className={classes.Auth}>{formOutput}</div>;
}, axios);
