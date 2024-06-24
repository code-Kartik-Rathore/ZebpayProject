
import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./login.css";
import logo from "./Group-16352-1.png";


const Login = (props) => {
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [PIN, setPIN] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img src={logo} className="img-fluid" alt="Sample" />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form onSubmit={handleSubmit} className="form">
              <div data-mdb-input-init className="form-outline mb-4">
                <label className="form-label" htmlFor="form3Example3">
                  Mobile Number
                </label>
                <input
                  id="form3Example3 username"
                  className="form-control form-control-lg"
                  placeholder="Enter a Mobile Number"
                  type="text"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  required
                />
              </div>

              <div data-mdb-input-init className="form-outline mb-4">
                <label className="form-label" htmlFor="form3Example3">
                  Email address
                </label>
                <input
                  type="email"
                  id="form3Example3 email"
                  className="form-control form-control-lg"
                  placeholder="Enter a valid email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div data-mdb-input-init className="form-outline mb-3">
                <label className="form-label" htmlFor="form3Example4">
                  PIN
                </label>
                <input
                  type="password"
                  id="form3Example4 password"
                  className="form-control form-control-lg"
                  placeholder="Enter PIN"
                  value={PIN}
                  onChange={(e) => setPIN(e.target.value)}
                  required
                />
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <div className="form-check mb-0">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="form2Example3"
                  />
                  <label className="form-check-label" htmlFor="form2Example3">
                    Remember me
                  </label>
                </div>
                <a href="#!" className="text-body">
                  Forgot password?
                </a>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                >
                  Login
                </button>
                
              </div>
            </form>
            <div className="link-btn">
              <p>Don't have an account </p>
              <Link to="/sign" type="submit" class="link-btn">
              Sign Up
            
              </Link>
             
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
        <div className="text-white mb-3 mb-md-0">All rights reserved.</div>
      </div>
    </section>
  );
};

export default Login;
