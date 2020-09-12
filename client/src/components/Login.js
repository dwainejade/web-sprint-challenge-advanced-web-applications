import React from "react";
import axios from "axios";
// import AxiosAuth from '../utils/AxiosAuth'
import { useHistory, Redirect } from "react-router-dom";

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const token = localStorage.getItem("token")
  axios
    .post("http://localhost:5000/api")
    .then((res) => {
      console.log(res);
      localStorage.setItem("token", res);
      useHistory.push("/protected");
  })
    .catch((err) => console.log(err.response));

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
    </>
  );
};

export default Login;
