import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [showOtpSection, setShowOtpSection] = useState(false);
  const [otp, setOtp] = useState('');
  const [token,settoken]=useState('')
  const navigate = useNavigate(); // Initialize navigate hook

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await handleregister(formData);
     // Show OTP section after registration
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    await verifyOtp(otp);
    navigate('/login');
  };

  const handleregister = async (data) => {
    try {
      const response = await axios.post('http://192.168.1.12:5000/api/user/register', {
        email: data.email,
        username: data.username,
        password: data.password,
      });
      const token = response.data.token;
      settoken(token)
      console.log('Registration successful!');
      console.log(response.data.token)
      if (token){
        setShowOtpSection(true);
      }
    } catch (error) {
      console.error('Error registering:', error);
    }
  };

  const verifyOtp = async (otp) => {
    console.log("eifgnao");
    console.log(token);

    console.log(formData.email)
    console.log(formData.username)
    console.log(formData.password)
    try {
        const response = await axios.post('http://192.168.1.12:5000/api/user/verify', {
          otpToken: token,
          otp : parseInt(otp),  
          email: formData.email,
          username: formData.username,
          password: formData.password,
        });
       
      } catch (error) {
        console.error('Error registering:', error);
      }
    };
  

  return (
    <div className='main-page2'>
      <div className='container'>
        <h1>Register</h1>
        {!showOtpSection ? ( // Show registration form if OTP section is not shown
          <form onSubmit={handleFormSubmit}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleInputChange}
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <button type="submit">Register</button>
          </form>
        ) : (
          <form onSubmit={handleOtpSubmit}>
            <label htmlFor="otp">Enter OTP:</label>
            <input
              type="text"
              name="otp"
              placeholder="OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button type="submit">Verify OTP</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;