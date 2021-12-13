import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginData);
  };
  return (
    <div className="container mt-3">
      <form onSubmit={handleSubmit}>
        <h2 className=" mb-3">Login Form</h2>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Enter Username"
          name="username"
          value={loginData.username}
          onChange={handleChange}
        />
        <input
          type="password"
          className="form-control mb-3"
          placeholder="Enter Password"
          name="password"
          value={loginData.password}
          onChange={handleChange}
        />
        <button className="btn btn-primary mb-3">Login</button>

        <p>
          New User - <Link to="/register">Register here</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
