import React, { useState } from 'react';
import './RegistrationForm.css'

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform registration logic here
  };

  return (
    <form onSubmit={handleSubmit} className="registration-form">
      <h2 className="registration-heading">Create an Account</h2>
      {/* <label className="registration-label">
        Name:
        <input type="text" value={name} onChange={handleNameChange} className="registration-input" />
      </label> */}
      <label className="registration-label">
        Email:
        <input type="email" value={email} onChange={handleEmailChange} className="registration-input" />
      </label>
      <label className="registration-label">
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} className="registration-input" />
      </label>
      <label className="registration-label">
        con_Password:
        <input type="password"  className="registration-input" />
      </label>
      
      <button type="submit" className="registration-button">Register</button>
    </form>
  );
};

export default RegistrationForm;
