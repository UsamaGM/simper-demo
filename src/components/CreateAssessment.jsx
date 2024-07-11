import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  CircularProgress,
  FormControlLabel,
  FormControl,
  FormLabel,
  Grid,
  Paper,
  RadioGroup,
  Radio,
  Slider,
  Typography,
} from "@mui/material";

function CreateAssessment() {
  const [difficulty, setDifficulty] = useState(5);
  const [creativity, setCreativity] = useState(5);
  const [questionType, setQuestionType] = useState("");
  const [theme, setTheme] = useState("");
  const [book, setBook] = useState(null);
  const [outline, setOutline] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const tempQuestions = [
    {
      id: 1,
      question:
        "What is Generative AI, and how does it differ from other types of AI?",
    },
    {
      id: 2,
      question:
        "Explain the difference between generative models and discriminative models.",
    },
    {
      id: 3,
      question:
        "Describe the architecture and key components of a Generative Adversarial Network (GAN).",
    },
    {
      id: 4,
      question:
        "What are some common applications of Generative AI in various industries?",
    },
    {
      id: 5,
      question:
        "How does a Variational Autoencoder (VAE) work, and what are its main components?",
    },
    {
      id: 6,
      question:
        "Discuss the concept of latent space in the context of generative models.",
    },
    {
      id: 7,
      question: "Explain the role of the discriminator and generator in a GAN.",
    },
    {
      id: 8,
      question:
        "Provide a high-level overview of how you would implement a simple text generation model using an RNN.",
    },
    {
      id: 9,
      question:
        "Describe a step-by-step procedure to train a GAN on a dataset of images.",
    },
    {
      id: 10,
      question:
        "What are the common challenges faced during the training of GANs, and how can they be mitigated?",
    },
  ];

  const handleGenerate = () => {
    setLoading(true);
    setTimeout(() => {
      setQuestions(tempQuestions);
      setLoading(false);
    }, 2000);
  };

  const handleBookUpload = (event) => {
    const file = event.target.files[0];
    setBook(file);
  };

  const handleOutlineUpload = (event) => {
    const file = event.target.files[0];
    setOutline(file);
  };

  const difficultyMarks = [
    { value: 0, label: "0" },
    { value: 10, label: "10" },
  ];

  const handleDifficultyChange = (event, newValue) => {
    setDifficulty(newValue);
  };

  const creativityMarks = [
    { value: 0, label: "0" },
    { value: 10, label: "10" },
  ];

  const handleCreativityChange = (event, newValue) => {
    setCreativity(newValue);
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
          Create Assessment
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={6}>
            <Paper elevation={3} style={{ padding: 16 }}>
              <Typography variant="h6" gutterBottom>
                Upload Book
              </Typography>
              <input
                type="file"
                onChange={handleBookUpload}
                style={{ marginBottom: 16 }}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper elevation={3} style={{ padding: 16 }}>
              <Typography variant="h6" gutterBottom>
                Upload Outline
              </Typography>
              <input
                type="file"
                onChange={handleOutlineUpload}
                style={{ marginBottom: 16 }}
              />
              {outline && (
                <Typography variant="body1">{outline.name}</Typography>
              )}
            </Paper>
          </Grid>
        </Grid>
        <FormControl
          component="fieldset"
          style={{ marginTop: 16, width: "100%" }}
        >
          <FormLabel component="legend">Theme</FormLabel>
          <RadioGroup
            aria-label="theme"
            name="theme"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            style={{ flexDirection: "row" }}
          >
            <FormControlLabel
              value="Creative"
              control={<Radio />}
              label="Creative"
            />
            <FormControlLabel
              value="Logic based"
              control={<Radio />}
              label="Logic based"
            />
            <FormControlLabel
              value="Memory based"
              control={<Radio />}
              label="Memory based"
            />
            <FormControlLabel
              value="Scenario based"
              control={<Radio />}
              label="Scenario based"
            />
          </RadioGroup>
        </FormControl>
        <FormControl
          component="fieldset"
          style={{ marginTop: 16, width: "100%" }}
        >
          <FormLabel component="legend">Difficulty</FormLabel>
          <Slider
            value={difficulty}
            onChange={handleDifficultyChange}
            aria-labelledby="discrete-slider-always"
            step={1}
            marks={difficultyMarks}
            min={0}
            max={10}
            valueLabelDisplay="auto"
          />
        </FormControl>
        <FormControl
          component="fieldset"
          style={{ marginTop: 16, width: "100%" }}
        >
          <FormLabel component="legend">Creativity</FormLabel>
          <Slider
            value={creativity}
            onChange={handleCreativityChange}
            aria-labelledby="discrete-slider-always"
            step={1}
            marks={creativityMarks}
            min={0}
            max={10}
            valueLabelDisplay="auto"
          />
        </FormControl>
        <FormControl
          component="fieldset"
          style={{ marginTop: 16, width: "100%" }}
        >
          <FormLabel component="legend">Type</FormLabel>
          <RadioGroup
            aria-label="questionType"
            name="questionType"
            value={questionType}
            onChange={(e) => setQuestionType(e.target.value)}
            style={{ flexDirection: "row" }}
          >
            <FormControlLabel
              value="Subjective"
              control={<Radio />}
              label="Subjective"
            />
            <FormControlLabel
              value="Objective"
              control={<Radio />}
              label="Objective"
            />
            <FormControlLabel
              value="True/False"
              control={<Radio />}
              label="True/False"
            />
          </RadioGroup>
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: 16 }}
          onClick={handleGenerate}
        >
          Generate Question Paper
        </Button>
        {loading && (
          <Box mt={4} display="flex" justifyContent="center">
            <CircularProgress />
          </Box>
        )}
        {questions.length > 0 && (
          <Box mt={4} width="100%">
            <Typography variant="h6">Generated Questions:</Typography>
            <ul>
              {questions.map((q) => (
                <li key={q.id}>{q.question}</li>
              ))}
            </ul>
          </Box>
        )}
      </Box>
    </Container>
  );
}

export default CreateAssessment;
