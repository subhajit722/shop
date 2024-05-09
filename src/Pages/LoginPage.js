import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Basic validation
    if (formData.email && formData.password) {
      console.log(formData.email);
      console.log(formData.password);
      try {
        const response = await axios.post('http://192.168.1.12:5000/api/user/login', {
          email: formData.email,
          password: formData.password,
        });
        localStorage.setItem('userId', response.data.userid);
        navigate('/')
        console.log('Login successful!');
        console.log('Response:', response.data);
      } catch (error) {
        console.error('Error logging in:', error);
      }
    } else {
      alert('Please enter username and password.');
    }
  };

  return (
    <div className='loginuser'>
      <div className='login-card'>
        <h1>Login Page</h1>
        <form onSubmit={handleSubmit}>
          <div className='something'>
            <label htmlFor="email">email:</label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className='something'>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;