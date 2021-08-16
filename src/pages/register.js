
import React from "react";
import "./register.css";
import {Link} from 'react-router-dom'

export default function register() {
  return (
    <div className="regwrapper">
      <div class="container" id="app">
        <form>
          <div class="form-content">
            <div class="login-form">
              <div class="title">SignUp</div>
              <div class="input-boxes">
                <div class="input-box">
                  <i class="fas fa-user"></i>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    name="username"
                  />
                </div>
                <div class="input-box">
                  <i class="fas fa-envelope"></i>
                  <input
                    type="text"
                    placeholder="Enter your email"
                    name="usermail"
                  />
                </div>
                <div class="input-box">
                  <i class="fas fa-lock"></i>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                  />
                </div>
                <div class="text">
                  <a href="#">Forgot password?</a>
                </div>
                <div class="button input-box">
				<Link to="/login">
                  <button class="login100-form-btn" type="submit">
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
