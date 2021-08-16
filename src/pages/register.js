import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./register.css";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const history = useHistory();

  async function signup() {
    let item = { name, password, email };
    setErrors("Registration Successful");
    let result = await fetch("http://localhost:8000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    history.push("/login");
  }
  return (
    <div className="regwrapper">
      <div class="container" id="app">
        <form>
          <div class="form-content">
            <div class="login-form">
              <div class="title">SignUp</div>
              <h2 style={{ color: "Green" }}>{errors}</h2>
              <div class="input-boxes">
                <div class="input-box">
                  <i class="fas fa-user"></i>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    name="username"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div class="input-box">
                  <i class="fas fa-envelope"></i>
                  <input
                    type="text"
                    placeholder="Enter your email"
                    name="usermail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div class="input-box">
                  <i class="fas fa-lock"></i>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div class="text">
                  <a href="#">Forgot password?</a>
                </div>
                <div class="button input-box">
                  <Link to="/login">
                    <button
                      class="login100-form-btn"
                      type="submit"
                      onClick={signup}
                    >
                      Submit
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
