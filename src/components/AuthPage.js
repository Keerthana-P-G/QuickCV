import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

const AuthPage = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [signupErrors, setSignupErrors] = useState({
    username: '',
    password: '',
    email: ''
  });

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSignUp = () => {
    let errors = {};

    if (username.trim() === '' || username.length < 5) {
      errors.username = 'Username must be at least 5 characters.';
    }

    if (password.trim() === '' || password.length < 5) {
      errors.password = 'Password must be at least 8 characters.';
    }

    if (email.trim() === '' || !isEmailValid(email)) {
      errors.email = 'Please provide a valid email address.';
    }

    setSignupErrors(errors);

    if (Object.keys(errors).length === 0) {
      setIsRegistered(true);
      setIsLogin(true);
      alert('Registration successful! You can now log in.');
    }
  };

  const handleLogin = (e) => {
    if (loginUsername.length >= 5 && loginPassword.length >= 8) {
      setLoginError('');
    } else {
      e.preventDefault();
      setLoginError('Invalid credentials. Please try again.');
    }
  };

  const handleReset = () => {
    setIsRegistered(false);
    setUsername('');
    setPassword('');
    setEmail('');
    setLoginUsername('');
    setLoginPassword('');
    setSignupErrors({});
  };

  const togglePage = () => {
    setIsLogin(!isLogin);
    setLoginError('');
    setSignupErrors({
      username: '',
      password: '',
      email: ''
    });
  };

  return (
    <div className="auth-section">
      {isRegistered ? (
        <div>
          <h2 className="auth-heading">Registration Successful!</h2>
          <p className="auth-message">You can now log in.</p>
          <button className="auth-button" onClick={handleReset}>Login</button>
        </div>
      ) : isLogin ? (
        <div>
          <h2 className="auth-heading">LOGIN</h2>
          <label className="auth-label">
            Username
            <input
              className="auth-input"
              type="text"
              value={loginUsername}
              onChange={(e) => setLoginUsername(e.target.value)}
              required
            />
          </label>
          <br />
          <label className="auth-label">
            Password
            <input
              className="auth-input"
              type="password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              required
            />
          </label>
          <br />
          {loginError && <p className="auth-error">{loginError}</p>}
          <Link to="/" className="auth-button" onClick={handleLogin}>
            Log In
          </Link>
          <p>Don't have an account? <button className='auth-button' onClick={togglePage}>Sign Up</button></p>
        </div>
      ) : (
        <div>
          <h2 className="auth-heading">REGISTER</h2>
          <label className="auth-label">
            Username
            <input
              className="auth-input"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {signupErrors.username && <p className="auth-error">{signupErrors.username}</p>}
          </label>
          <br />
          <label className="auth-label">
            Password
            <input
              className="auth-input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {signupErrors.password && <p className="auth-error">{signupErrors.password}</p>}
          </label>
          <br />
          <label className="auth-label">
            Email
            <input
              className="auth-input"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {signupErrors.email && <p className="auth-error">{signupErrors.email}</p>}
          </label>
          <br />
          <button className="auth-button" onClick={handleSignUp}>Sign Up</button>
          <p>Already have an account? <button className="auth-button" onClick={togglePage}>Login</button></p>
        </div>
      )}
    </div>
  );
};

export default AuthPage;
