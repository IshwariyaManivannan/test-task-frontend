
import React, { useState } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import axios from 'axios';

import './signup.css'
const SignUp = () => {

    const [username, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleSubmit = async(e) =>  {
        e.preventDefault();

        // Validation
        let errors = {};
        if (!username.trim()) {
            errors.username = 'Name is required';
        }
        if (!email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Email is invalid';
        }
        if (!password) {
            errors.password = 'Password is required';
        } else if (password.length < 6) {
            errors.password = 'Password must be at least 6 characters';
        }
        if (!confirmPassword) {
            errors.confirmPassword = 'Confirm Password is required';
        } else if (password !== confirmPassword) {
            errors.confirmPassword = 'Passwords do not match';
        }

        if (Object.keys(errors).length > 0) {
            setErrors(errors);
            return;
        }

        // Submit form data
        try {
            const response = await axios.post('http://localhost:8000/signup', { username, email, password });
            console.log('Response:', response.data);
            navigate('/login')
            
          } catch (error) {
            console.error('Error:', error);
          }
        // console.log({ name, email, password });
    };
    return (

        <div className='signUpWrapper'>
            <div>
               <div className='signUpHead'> <h2>Sign Up</h2></div>
                <form className='signUpForm' onSubmit={handleSubmit}>
                    <div className='name'>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={username}
                            onChange={(e) => setName(e.target.value)}
                        />
                        {errors.username && <span className='error'>{errors.username}</span>}
                    </div>
                    <div className='email'>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <span className='error'>{errors.email}</span>}
                    </div>
                    <div className='password'>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errors.password && <span className='error'>{errors.password}</span>}
                    </div>
                    <div className='confirmPassword'>
                        <label htmlFor="confirmPassword">Confirm Password:</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        {errors.confirmPassword && <span className='error'>{errors.confirmPassword}</span>}
                    </div>
                    <div className='submitButton'>
                    <button type="submit">Sign Up</button>
                    </div>
                </form>
                <div className='goToLogin'>
                <p>
                    Already have an account? <Link to={'/login'}>Log In</Link>
                </p>
                </div>
               
            </div>
        </div>




    )
}

export default SignUp