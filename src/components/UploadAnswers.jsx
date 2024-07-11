import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  Button,
  Slider,
  Checkbox,
  FormControlLabel,
  CircularProgress,
  FormControl,
  FormLabel,
} from "@mui/material";

function UploadAnswers() {
  const [answerSheets, setAnswerSheets] = useState(null);
  const [strictness, setStrictness] = useState(5);
  const [knowledge, setKnowledge] = useState(5);
  const [grammar, setGrammar] = useState(false);
  const [loading, setLoading] = useState(false);
  const [assessmentResult, setAssessmentResult] = useState(null);

  const handleAnswerSheetUpload = (event) => {
    const file = event.target.files[0];
    setAnswerSheets(file);
  };

  const handleStrictnessChange = (event, newValue) => {
    setStrictness(newValue);
  };

  const handleKnowledgeChange = (event, newValue) => {
    setKnowledge(newValue);
  };

  const handleGrammarChange = (event) => {
    setGrammar(event.target.checked);
  };

  const handleAssess = () => {
    setLoading(true);
    setTimeout(() => {
      setAssessmentResult({
        score: 85,
        feedback: "Good overall performance with minor grammar mistakes.",
      });
      setLoading(false);
    }, 2000);
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
          Upload Answer Sheets
        </Typography>
        <Box mt={4} width="100%">
          <Typography variant="h6">Upload Answer Sheets</Typography>
          <input
            type="file"
            onChange={handleAnswerSheetUpload}
            style={{ marginBottom: 16 }}
          />
        </Box>
        <FormControl
          component="fieldset"
          style={{ marginTop: 16, width: "100%" }}
        >
          <FormLabel component="legend">Strictness</FormLabel>
          <Slider
            value={strictness}
            onChange={handleStrictnessChange}
            aria-labelledby="discrete-slider-always"
            step={1}
            marks={[
              { value: 0, label: "0" },
              { value: 10, label: "10" },
            ]}
            min={0}
            max={10}
            valueLabelDisplay="auto"
          />
        </FormControl>
        <FormControl
          component="fieldset"
          style={{ marginTop: 16, width: "100%" }}
        >
          <FormLabel component="legend">Out of Book Knowledge</FormLabel>
          <Slider
            value={knowledge}
            onChange={handleKnowledgeChange}
            aria-labelledby="discrete-slider-always"
            step={1}
            marks={[
              { value: 0, label: "0" },
              { value: 10, label: "10" },
            ]}
            min={0}
            max={10}
            valueLabelDisplay="auto"
          />
        </FormControl>
        <FormControlLabel
          control={
            <Checkbox checked={grammar} onChange={handleGrammarChange} />
          }
          label="Check for Grammar"
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: 16 }}
          onClick={handleAssess}
        >
          Assess
        </Button>
        {loading && (
          <Box mt={4} display="flex" justifyContent="center">
            <CircularProgress />
          </Box>
        )}
        {assessmentResult && (
          <Box mt={4} width="100%">
            <Typography variant="h6">Assessment Result:</Typography>
            <Typography variant="body1">
              Score: {assessmentResult.score}
            </Typography>
            <Typography variant="body1">
              Feedback: {assessmentResult.feedback}
            </Typography>
          </Box>
        )}
      </Box>
    </Container>
  );
}

export default UploadAnswers;
