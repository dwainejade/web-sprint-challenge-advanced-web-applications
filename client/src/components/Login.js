import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  })

  const handleChange = e => {
    e.persist()
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const login = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", credentials)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        useHistory.push("/bubble-page");
      })
      .catch((err) => console.log("Wrong pass, ass!", err.response));
  }

  return (
    <>
      <form onSubmit={login} className="form-group login">
        <label>Username</label>
        <input
          className="form-control"
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          className="form-control"
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />
        <button type="submit" className="btn m-3 btn-primary">Login</button>
      </form>
    </>
  );
};

export default Login;
