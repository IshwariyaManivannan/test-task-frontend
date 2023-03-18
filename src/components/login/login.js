import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css'
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Email validation
    if (!email.includes("@")) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }

    // Password validation
    if (password.length < 8) {
      setPasswordError("Please enter a password with at least 8 characters.");
    } else {
      setPasswordError("");
    }

    // Submit form if there are no errors
    if (!emailError && !passwordError) {
      console.log("Login successful!");
      // Replace this with your own code for handling login
    }
  };

  return (
    <div className="loginMainWrapper">
      <div className='loginSubWrapper'>
        
        <form className='loginForm' onSubmit={handleSubmit}>
        <div className='loginHead'>Login</div>
          <div className='email'>
            <label htmlFor="email">Email:</label>
            <input
             type="text"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
            <div className="error">
            {emailError && <div >{emailError}</div>}
            </div>
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
            <div className="error">
            {passwordError && <div >{passwordError}</div>}
            </div>
          </div>
          <button type="submit">Login</button>
          <div className="signup-link">
            Don't have an account? <Link to={'/signup'}>Sign up</Link>
          </div>
        </form>
      </div>
    </div>

  )
}

export default Login