import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useAuth } from '../../context/auth';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

import './login.css'
const Login = ({ isLogged }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  const auth = useAuth();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };


  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    let errors = {};

    // Email validation
    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }

    // Password validation
    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }


    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/login', { email, password });
      if (response.data.status === 200) {
        toast.success('You have successfully login!', {
          position: toast.POSITION.TOP_RIGHT
        });
        const userId = response.data.data[0].id;
        const userName = response.data.data[0].username;

        localStorage.setItem("userId", userId)
        auth.islogin();
        auth.userNaming(userName)

        setTimeout(() => {
          navigate(`/profile/${userId}`, { replace: true });
        }, 2000);
      } else {
        toast.success('invalid user please user email or password', {
          position: toast.POSITION.TOP_RIGHT
        });
      }

    } catch (error) {
      console.error('Error:', error);
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
              {errors.email && <div >{errors.email}</div>}
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
              {errors.password && <div >{errors.password}</div>}
            </div>
          </div>
          <button type="submit">Login</button>
          <div className="signup-link">
            Don't have an account? <Link to={'/signup'}>Sign up</Link>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>

  )
}

export default Login