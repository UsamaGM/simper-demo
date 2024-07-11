import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Box, TextField, Button, Typography } from "@mui/material";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [document, setDocument] = useState(null);
  const [documentVerified, setDocumentVerified] = useState(false);
  const navigate = useNavigate();

  const handleRegister = () => {
    // Simulate registration
    if (document && documentVerified) {
      navigate("/dashboard");
    } else {
      alert("Please upload and verify your document.");
    }
  };

  const handleDocumentUpload = (event) => {
    const file = event.target.files[0];
    setDocument(file);
    // Simulate document verification
    setTimeout(() => {
      setDocumentVerified(true);
      alert("Document verified successfully!");
    }, 1000);
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
          Register
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
        <Typography
          variant="h6"
          component="p"
          color={"darkorange"}
          gutterBottom
        >
          Please upload a document showing that you are a teacher
        </Typography>
        <Button
          variant="contained"
          component="label"
          style={{ marginTop: 16, marginBottom: 16 }}
        >
          Upload Document
          <input type="file" hidden onChange={handleDocumentUpload} />
        </Button>
        {document && (
          <Typography
            variant="body1"
            color={documentVerified ? "green" : "red"}
          >
            {documentVerified ? "Document verified" : "Verifying document..."}
          </Typography>
        )}
        <Button
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: 16 }}
          onClick={handleRegister}
        >
          Register
        </Button>
      </Box>
    </Container>
  );
}

export default Register;
