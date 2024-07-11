import React from "react";
import { Link } from "react-router-dom";
import { Container, Box, Typography, Button, Grid, Paper } from "@mui/material";

function Dashboard() {
  return (
    <Container maxWidth="md">
      <Box my={4} display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h4" component="h1" gutterBottom>
          Dashboard
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={4}>
            <Paper elevation={3} style={{ padding: 16, textAlign: "center" }}>
              <Typography variant="h6">Papers Generated</Typography>
              <Typography variant="body1">10</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper elevation={3} style={{ padding: 16, textAlign: "center" }}>
              <Typography variant="h6">Papers Checked</Typography>
              <Typography variant="body1">8</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper elevation={3} style={{ padding: 16, textAlign: "center" }}>
              <Typography variant="h6">Papers in Checking</Typography>
              <Typography variant="body1">2</Typography>
            </Paper>
          </Grid>
        </Grid>
        <Box mt={4} width="100%">
          <Button
            component={Link}
            to="/create-assessment"
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            style={{ marginBottom: 16 }}
          >
            Create Assessment
          </Button>
          <Button
            component={Link}
            to="/upload-answers"
            variant="contained"
            color="secondary"
            size="large"
            fullWidth
            style={{ marginBottom: 16 }}
          >
            Upload Answer Sheets
          </Button>
          <Button
            component={Link}
            to="/results"
            variant="contained"
            color="success"
            size="large"
            fullWidth
          >
            View Results
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Dashboard;
