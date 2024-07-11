import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Container, Box, TextField, Button, Typography } from "@mui/material";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulate login
    navigate("/dashboard");
  };

  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Login
        </Typography>
        <TextField
          label="Email"
          variant="outlined"
          margin="normal"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: 16 }}
          onClick={handleLogin}
        >
          Login
        </Button>
        <Box mt={2} display="flex" justifyContent="space-between" width="100%">
          <Button component={Link} to="/" variant="text" color="primary">
            Back to Home
          </Button>
          <Button
            component={Link}
            to="/register"
            variant="text"
            color="secondary"
          >
            Register
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;
