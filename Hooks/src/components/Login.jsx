import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // store individual field errors
  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
  });

  // validation regexes
  const userRegex = /^[A-Za-z]{10,20}$/; // 10-20 letters only
  const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/; // gmail only
  const passwordRegex = /^[A-Z][a-z]{3,10}$/; // starts with uppercase, then 3-10 lowercase

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = { username: '', email: '', password: '' };
    let valid = true;

    const trimmedUsername = username.trim();
    const trimmedEmail = email.trim();
    const trimmedPassword = password; // don't trim password (optional)

    if (!userRegex.test(trimmedUsername)) {
      newErrors.username = 'Full name must be 10–20 alphabetic characters (no spaces).';
      valid = false;
    }

    if (!emailRegex.test(trimmedEmail)) {
      newErrors.email = 'Please enter a valid Gmail address (example@gmail.com).';
      valid = false;
    }

    if (!passwordRegex.test(trimmedPassword)) {
      newErrors.password = 'Password must start with an uppercase letter followed by 3–10 lowercase letters.';
      valid = false;
    }

    setErrors(newErrors);

    if (!valid) return;

    // success
    setErrors({ username: '', email: '', password: '' });
    alert('Sign up successful!');
    // TODO: send to backend or further processing
    console.log('Submitted:', { username: trimmedUsername, email: trimmedEmail, password: trimmedPassword });
  };

  return (
    <div className="form-box mx-auto mt-5">
      <form className="form" onSubmit={handleSubmit} noValidate>
        <span className="title">Sign up</span>
        <span className="subtitle">Create a free account with your email.</span>

        <div className="form-container ">
          <input
            type="text"
            className="input"
            placeholder="Full Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            aria-invalid={!!errors.username}
            aria-describedby="username-error"
          />
          {errors.username && (
            <p id="username-error" className="text-danger" role="alert">
              {errors.username}
            </p>
          )}

          <input
            type="email"
            className="input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={!!errors.email}
            aria-describedby="email-error"
          />
          {errors.email && (
            <p id="email-error" className="text-danger" role="alert">
              {errors.email}
            </p>
          )}

          <input
            type="password"
            className="input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            aria-invalid={!!errors.password}
            aria-describedby="password-error"
          />
          {errors.password && (
            <p id="password-error" className="text-danger" role="alert">
              {errors.password}
            </p>
          )}
        </div>

        <button type="submit" className="submit">
          Sign up
        </button>
      </form>

      <div className="form-section">
        <p>
          Have an account? <a href="#">Log in</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
