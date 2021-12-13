import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [regiData, setRegiData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
    isActive: false,
  });
  const handleChange = (e) => {
    setRegiData({ ...regiData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(regiData);
  };
  useEffect(() => {
    localStorage.setItem("varahi", JSON.stringify(regiData));
  }, [regiData]);

  return (
    <div className="container mt-3">
      <form onSubmit={handleSubmit}>
        <h2 className=" mb-3">Registration Form</h2>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Enter firstname"
          name="firstName"
          value={regiData.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Enter lastname"
          name="lastName"
          value={regiData.lastName}
          onChange={handleChange}
        />
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Enter username"
          name="userName"
          value={regiData.userName}
          onChange={handleChange}
        />
        <input
          type="password"
          className="form-control mb-3"
          placeholder="Enter password"
          name="password"
          value={regiData.password}
          onChange={handleChange}
        />
        <label htmlFor="role">Role :</label>
        <input
          type="checkbox"
          id="developer"
          name="isActive"
          value={true}
          onChange={handleChange}
          checked={regiData.isActive === true}
        />
        <label htmlFor="developer">Developer</label>
        <input
          type="checkbox"
          id="tester"
          name="isActive"
          value={true}
          onChange={handleChange}
          checked={regiData.isActive === true}
        />
        <label htmlFor="tester">Tester</label> <br />
        <button className="btn btn-primary">Register</button>
        <p>
          Already Registred - <Link to="/">Login here</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
