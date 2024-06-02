import React from "react";
import "./CSS/LoginSignup.css";

const LoginSignup = () => {
  return (
    <div className="loginSignup">
      <div className="loginSignup-container">
        <h1>Sign Up</h1>
        <div className="loginSignup-fields">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Your Password" />
        </div>
        <div className="button-div">
          <button>Continue</button>
        </div>
        <p className="loginSignup-login">
          Already have an account? <span>Login here</span>
        </p>
        <div className="loginSignup-agree">
          <input type="checkbox" name="" id="" />
          <span>
            By continuing, I agree to the terms of use & privacy policy.
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
