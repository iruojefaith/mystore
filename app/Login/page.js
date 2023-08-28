import React, { useState } from 'react';
import Register from './register';
import GoogleLogin from './GoogleLogin';

const LoginSignupPage = () => {
  const [showRegister, setShowRegister] = useState(false);

  const handleShowRegister = () => {
    setShowRegister(true);
    
  };



  return (
    <div>
      
      <button href="/register" onClick={handleShowRegister}>Register</button>

      {/* Render the Register component if showRegister is true */}
      {showRegister && <Register />}
    </div>
  );
};

export default LoginSignupPage;
