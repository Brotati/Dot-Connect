import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

export default function login() {
  return (
    <div class="limiter">
      <div class="container-login100">
        <div class="wrap-login100">
          <div class="login100-pic js-tilt" data-tilt>
            <img src="assets/img-01.png" alt="IMG" />
            <form class="login100-form validate-form">
              <span class="login100-form-title">Login</span>

              <div class="wrap-input100 validate-input">
                <input
                  class="input100"
                  type="text"
                  name="username"
                  placeholder="Name"
                />
                <span class="focus-input100"></span>
                <span class="symbol-input100">
                  <i class="fa fa-user" aria-hidden="true"></i>
                </span>
              </div>

              <div class="wrap-input100 validate-input">
                <input
                  class="input100"
                  type="text"
                  name="usermail"
                  placeholder="Email"
                />
                <span class="focus-input100"></span>
                <span class="symbol-input100">
                  <i class="fa fa-envelope" aria-hidden="true"></i>
                </span>
              </div>

              <div class="wrap-input100 validate-input">
                <input
                  class="input100"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <span class="focus-input100"></span>
                <span class="symbol-input100">
                  <i class="fa fa-lock" aria-hidden="true"></i>
                </span>
              </div>
              <div class="container-login100-form-btn">
               <Link to="/homepage">
                  <button class="login100-form-btn" type="submit">
                    Login
                  </button>
                  </Link>
              </div>

              <div class="text-center p-t-12">
                <span class="txt1">Forgot</span>
                <a class="txt2" href="">
                  Username / Password?
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
