import React, { useState } from "react";
// Import required Material UI components
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
} from "@mui/material";

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
      setFormData({ username: "", password: "", cpassword: "" });
    }
  };

  return (
    //  Box provides responsive container using MUI's flexbox system
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      {/* Paper creates a white card-like container with shadow */}
      <Paper
        elevation={3}
        sx={{
          p: 4,
          borderRadius: 3,
          width: 350,
          textAlign: "center",
        }}
      >
        {/*  Typography replaces <p> or <h1> with Material UI text styling */}
        <Typography variant="h5" fontWeight="bold" mb={2}>
          Sign up to your account
        </Typography>

        {/*  MUI Box used as form wrapper */}
        <Box component="form" onSubmit={handleSubmit}>
          {/* TextField replaces <input> with built-in label, error & helper text */}
          <TextField
            label="Enter username"
            name="username"
            fullWidth
            margin="normal"
            value={formData.username}
            onChange={handleChange}
            error={!!formErrors.username}
            helperText={formErrors.username}
          />

          <TextField
            label="Enter password"
            name="password"
            type="password"
            fullWidth
            margin="normal"
            value={formData.password}
            onChange={handleChange}
            error={!!formErrors.password}
            helperText={formErrors.password}
          />

          <TextField
            label="Confirm password"
            name="cpassword"
            type="password"
            fullWidth
            margin="normal"
            value={formData.cpassword}
            onChange={handleChange}
            error={!!formErrors.cpassword}
            helperText={formErrors.cpassword}
          />

          {/*  MUI Button replaces <button>, styled with variant & spacing */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2, py: 1 }}
          >
            Sign Up
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default Signup;
