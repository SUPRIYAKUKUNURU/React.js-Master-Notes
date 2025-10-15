import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // store individual field errors
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
  });

  // validation regexes (more practical for a full name)
  const userRegex = /^[A-Za-z]+(?: [A-Za-z]+)+$/; // letters + at least one space (first + last name)
  const emailRegex = /^[A-Za-z0-9._%+-]+@gmail\.com$/; // gmail only
  const passwordRegex = /^[A-Z][a-z]{3,10}$/; // starts with uppercase, then 3-10 lowercase

  const validateField = (name, value) => {
    let msg = "";

    if (name === "username") {
      if (!value.trim()) msg = "Full name is required.";
      else if (!userRegex.test(value.trim()))
        msg = "Enter first and last name (letters only, separated by space).";
    }

    if (name === "email") {
      if (!value.trim()) msg = "Email is required.";
      else if (!emailRegex.test(value.trim()))
        msg = "Please enter a valid Gmail address (example@gmail.com).";
    }

    if (name === "password") {
      if (!value) msg = "Password is required.";
      else if (!passwordRegex.test(value))
        msg =
          "Password must start with an uppercase letter followed by 3–10 lowercase letters.";
    }

    setErrors((prev) => ({ ...prev, [name]: msg }));
    return msg === "";
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const handleChange = (setter) => (e) => {
    const { name, value } = e.target;
    setter(value);
    // clear that field's error while typing
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isUserValid = validateField("username", username);
    const isEmailValid = validateField("email", email);
    const isPassValid = validateField("password", password);

    if (!isUserValid || !isEmailValid || !isPassValid) return;

    // success
    setErrors({ username: "", email: "", password: "" });
    alert("Sign up successful!");
    console.log("Submitted:", {
      username: username.trim(),
      email: email.trim(),
      password,
    });

    // reset fields (optional)
    // setUsername("");
    // setEmail("");
    // setPassword("");
  };

  return (
    <div className="form-box mx-auto mt-5">
      <form className="form" onSubmit={handleSubmit} noValidate>
        <span className="title">Login</span>
        <span className="subtitle">Create a free account with your email.</span>

        <div className="form-container">
          <input
            name="username"
            type="text"
            className="input"
            placeholder="Full Name (e.g. John Doe)"
            value={username}
            onChange={handleChange(setUsername)}
            onBlur={handleBlur}
            aria-invalid={!!errors.username}
            aria-describedby="username-error"
          />
          {errors.username && (
            <p id="username-error" className="text-danger" role="alert">
              {errors.username}
            </p>
          )}

          <input
            name="email"
            type="text"
            className="input"
            placeholder="Email (must be @gmail.com)"
            value={email}
            onChange={handleChange(setEmail)}
            onBlur={handleBlur}
            aria-invalid={!!errors.email}
            aria-describedby="email-error"
          />
          {errors.email && (
            <p id="email-error" className="text-danger" role="alert">
              {errors.email}
            </p>
          )}

          <input
            name="password"
            type="password"
            className="input"
            placeholder="Password (Start with A, then 3-10 lowercase)"
            value={password}
            onChange={handleChange(setPassword)}
            onBlur={handleBlur}
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
          Login
        </button>
      </form>

      <div className="form-section">
        <p>
          Have an account? <a href="#">Sign Up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
