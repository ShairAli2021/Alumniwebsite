import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import RegistrationForm from '../RegistrationForm';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic here
  };

  return (
    <form onSubmit={handleSubmit} className="login-Form">
      <label className="login-label">
        Username:
        <input type="text" value={username} onChange={handleUsernameChange} className="login-input" />
      </label>
      <label className="login-label">
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} className="login-input" />
      </label>
      <div className='form'>
      <button type="submit" className='register-button' >Login</button>
   <Link to='/register' element={<RegistrationForm/>}>   <button type="submit"  className='login-button'>Registration</button></Link>
     </div>      
    </form>
  );
};

export default Login;
