import React from "react";
import "./sign.css";
import { Link } from "react-router-dom";
import logo from "./Group-16352-1.png";

import { useState } from "react";

const Sign = () => {
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [PIN, setPIN] = useState("");
  const [CPIN, setCPIN] = useState("");
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <div className="main">
      <img src={logo} alt="img not found" />
      <div className="addUser">
        <h3>Sign Up</h3>
        <form className="addUserForm" onSubmit={handleSubmit}>
          <div className="inputGroup">
            <label htmlFor="number">Mobile Number:</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              maxLength={10}
              placeholder="Enter 10-Digit Mobile Number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              required
            />
            <label htmlFor="fname">First Name:</label>
            <input
              type="text"
              id="Fname"
              className="name"
              name="Fname"
              autoComplete="off"
              placeholder="Enter your first name"
              value={Fname}
              onChange={(e) => setFname(e.target.value)}
              required
            />

            <label htmlFor="lname">Last Name:</label>
            <input
              type="text"
              id="Lname"
              name="Lname"
              className="name"
              autoComplete="off"
              placeholder="Enter your last name"
              value={Lname}
              onChange={(e) => setLname(e.target.value)}
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="off"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="Password">Set 4-digit PIN:</label>
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="off"
              placeholder="Enter 4-Digit PIN"
              value={PIN}
              onChange={(e) => setPIN(e.target.value)}
              required
            />
            <label htmlFor="CPassword">Confirm 4-digit PIN:</label>
            <input
              type="password"
              id="Cpassword"
              name="Cpassword"
              autoComplete="off"
              placeholder="Confirm 4-Digit PIN"
              value={CPIN}
              onChange={(e) => setCPIN(e.target.value)}
              required
            />
            <button type="submit" class="btn btn-success">
              Sign Up
            </button>
          </div>
        </form>
        <div className="login">
          <p>Already have an Account? </p>
          <Link to="/login" type="submit" class="btn btn-primary">
            Login
          </Link>
        </div>
       
      </div>
    </div>
  );
};

export default Sign;
