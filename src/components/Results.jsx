import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemText,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

const studentResults = [
  {
    studentName: "John Doe",
    score: 85,
    totalQuestions: 100,
    correctAnswers: 85,
    incorrectAnswers: 15,
    feedback: "Good overall performance with minor mistakes.",
    suggestions: [
      "Revise chapter 4 for better understanding.",
      "Work on time management during the exam.",
      "Practice more on the topic of linear equations.",
    ],
  },
  {
    studentName: "Jane Smith",
    score: 90,
    totalQuestions: 100,
    correctAnswers: 90,
    incorrectAnswers: 10,
    feedback: "Excellent performance.",
    suggestions: [
      "Keep up the good work.",
      "Continue practicing advanced topics.",
    ],
  },
  {
    studentName: "Alice Johnson",
    score: 75,
    totalQuestions: 100,
    correctAnswers: 75,
    incorrectAnswers: 25,
    feedback: "Needs improvement in several areas.",
    suggestions: [
      "Focus on understanding concepts.",
      "Practice more problems on algebra.",
    ],
  },
  {
    studentName: "Bob Brown",
    score: 65,
    totalQuestions: 100,
    correctAnswers: 65,
    incorrectAnswers: 35,
    feedback: "Fair performance, but significant room for improvement.",
    suggestions: [
      "Review the basics thoroughly.",
      "Seek help on challenging topics.",
    ],
  },
  {
    studentName: "Charlie Davis",
    score: 95,
    totalQuestions: 100,
    correctAnswers: 95,
    incorrectAnswers: 5,
    feedback: "Outstanding performance.",
    suggestions: [
      "Maintain your current study habits.",
      "Help peers with their studies to reinforce your knowledge.",
    ],
  },
];

function Results() {
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleOpenDialog = (student) => {
    setSelectedStudent(student);
  };

  const handleCloseDialog = () => {
    setSelectedStudent(null);
  };

  return (
    <Container maxWidth="md">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Assessment Results
        </Typography>
        <Grid container spacing={3}>
          {studentResults.map((student, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6">{student.studentName}</Typography>
                  <Typography variant="body1">
                    Score: {student.score}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ marginTop: 16 }}
                    onClick={() => handleOpenDialog(student)}
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Dialog
          open={!!selectedStudent}
          onClose={handleCloseDialog}
          fullWidth
          maxWidth="sm"
        >
          <DialogTitle>Student Details</DialogTitle>
          <DialogContent>
            {selectedStudent && (
              <>
                <Typography variant="h6">
                  {selectedStudent.studentName}
                </Typography>
                <Typography variant="body1">
                  <strong>Score:</strong> {selectedStudent.score}
                </Typography>
                <Typography variant="body1">
                  <strong>Total Questions:</strong>{" "}
                  {selectedStudent.totalQuestions}
                </Typography>
                <Typography variant="body1">
                  <strong>Correct Answers:</strong>{" "}
                  {selectedStudent.correctAnswers}
                </Typography>
                <Typography variant="body1">
                  <strong>Incorrect Answers:</strong>{" "}
                  {selectedStudent.incorrectAnswers}
                </Typography>
                <Typography variant="body1">
                  <strong>Feedback:</strong>
                </Typography>
                <Typography variant="body2">
                  {selectedStudent.feedback}
                </Typography>
                <Box mt={3}>
                  <Typography variant="body1">
                    <strong>Suggestions:</strong>
                  </Typography>
                  <List>
                    {selectedStudent.suggestions.map((suggestion, index) => (
                      <ListItem key={index}>
                        <ListItemText primary={suggestion} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Container>
  );
}

export default Results;
