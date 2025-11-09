import React, { useState } from "react";
// ✅ Import Material UI components
import { Box, TextField, Button, Typography, Link, Paper } from "@mui/material";

function Login() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
  });

  const userRegex = /^[A-Za-z]+(?: [A-Za-z]+)+$/;
  const emailRegex = /^[A-Za-z0-9._%+-]+@gmail\.com$/;
  const passwordRegex = /^[A-Z][a-z]{3,10}$/;

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
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isUserValid = validateField("username", username);
    const isEmailValid = validateField("email", email);
    const isPassValid = validateField("password", password);

    if (!isUserValid || !isEmailValid || !isPassValid) return;

    setErrors({ username: "", email: "", password: "" });
    alert("Sign up successful!");
    console.log("Submitted:", {
      username: username.trim(),
      email: email.trim(),
      password,
    });
  };

  return (
    // ✅ MUI Box used as main container (with Paper for card effect)
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      {/* ✅ Paper adds a white card look with shadow */}
      <Paper
        elevation={4}
        sx={{
          p: 4,
          borderRadius: 3,
          width: 360,
          textAlign: "center",
        }}
      >
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Login
        </Typography>

        <Typography variant="body2" color="text.secondary" mb={2}>
          Create a free account with your email.
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate>
          {/* ✅ TextField replaces <input>, with built-in label and error handling */}
          <TextField
            label="Full Name (e.g. John Doe)"
            name="username"
            fullWidth
            margin="normal"
            value={username}
            onChange={handleChange(setUsername)}
            onBlur={handleBlur}
            error={!!errors.username}
            helperText={errors.username}
          />

          <TextField
            label="Email (must be @gmail.com)"
            name="email"
            fullWidth
            margin="normal"
            value={email}
            onChange={handleChange(setEmail)}
            onBlur={handleBlur}
            error={!!errors.email}
            helperText={errors.email}
          />

          <TextField
            label="Password (Start with A, then 3-10 lowercase)"
            name="password"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={handleChange(setPassword)}
            onBlur={handleBlur}
            error={!!errors.password}
            helperText={errors.password}
          />

          {/* ✅ MUI Button styled with variant and spacing */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2, py: 1 }}
          >
            Login
          </Button>
        </Box>

        {/* ✅ MUI Typography + Link for bottom section */}
        <Typography variant="body2" sx={{ mt: 2 }}>
          Have an account?{" "}
          <Link href="#" underline="hover">
            Sign Up
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
}

export default Login;
