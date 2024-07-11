import React from "react";
import { Link } from "react-router-dom";
import { Container, Box, Typography, Button, Grid, Paper } from "@mui/material";

function Home() {
  return (
    <Container maxWidth="md">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
      >
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to Simper
        </Typography>
        <Typography variant="h6" component="p" gutterBottom>
          An AI-based exam management system
        </Typography>
        <Box mt={4}>
          <Button
            component={Link}
            to="/login"
            variant="contained"
            color="primary"
            size="large"
            style={{ marginRight: 16 }}
          >
            Login
          </Button>
          <Button
            component={Link}
            to="/register"
            variant="contained"
            color="secondary"
            size="large"
          >
            Register
          </Button>
        </Box>
        <Grid container spacing={3} style={{ marginTop: 40 }}>
          <Grid item xs={12} sm={6}>
            <Paper elevation={3} style={{ padding: 16 }}>
              <Typography variant="h5" gutterBottom>
                Generate Question Papers
              </Typography>
              <Typography variant="body1">
                Create comprehensive assessments with ease by uploading books
                and outlines, and tweaking parameters such as difficulty,
                creativity, and question type.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper elevation={3} style={{ padding: 16 }}>
              <Typography variant="h5" gutterBottom>
                Automated Grading
              </Typography>
              <Typography variant="body1">
                Upload answer sheets and let our AI handle the grading,
                providing accurate and quick results based on your specified
                parameters.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Home;
