import React, { useState } from "react";

function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    cpassword: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const regex = {
    un: /^[A-Z][a-z]{6,16}$/, // Username starts with capital letter, then 6–16 lowercase
    pw: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%&*]).{8,16}$/, // Strong password
  };

  const validate = () => {
    let errors = {};

    if (!regex.un.test(formData.username.trim())) {
      errors.username =
        "Username must start with a capital letter and be 7–17 letters long.";
    }

    if (!regex.pw.test(formData.password)) {
      errors.password =
        "Password must contain upper, lower, number, and special char (8–16 chars).";
    }

    if (formData.password !== formData.cpassword) {
      errors.cpassword = "Passwords do not match.";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      alert("Signup successful!");
      console.log("Form Data:", formData);
      // Optionally clear form
      setFormData({ username: "", password: "", cpassword: "" });
    }
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <p className="form-title">Sign up to your account</p>

        <div className="input-container">
          <input
            onChange={handleChange}
            name="username"
            value={formData.username}
            type="text"
            placeholder="Enter username"
          />
        </div>
        <p className="text-danger">{formErrors.username}</p>

        <div className="input-container">
          <input
            onChange={handleChange}
            name="password"
            value={formData.password}
            type="password"
            placeholder="Enter password"
          />
        </div>
        <p className="text-danger">{formErrors.password}</p>

        <div className="input-container">
          <input
            onChange={handleChange}
            name="cpassword"
            value={formData.cpassword}
            type="password"
            placeholder="Confirm password"
          />
        </div>
        <p className="text-danger">{formErrors.cpassword}</p>

        <button
          type="submit"
          className="submit mx-auto"
          style={{ width: "200px" }}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
