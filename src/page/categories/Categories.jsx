import { useState, useEffect } from 'react';
import {
  Container, Typography, Select, MenuItem, CircularProgress, List, ListItem, ListItemText, Button, RadioGroup, FormControlLabel, Radio
} from '@mui/material';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [questions, setQuestions] = useState([]);
  const [quizQuestions, setQuizQuestions] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userAnswers, setUserAnswers] = useState({});
  const [showQuiz, setShowQuiz] = useState(false); 
  const [score, setScore] = useState(null);  

  useEffect(() => {
    fetch('https://opentdb.com/api_category.php')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setCategories(data.trivia_categories);
      })
      .catch((error) => {
        setError('Error fetching categories');
        console.error('Error fetching categories:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      setLoading(true);
      fetch(`https://opentdb.com/api.php?amount=10&type=multiple&category=${selectedCategory}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          setQuestions(data.results);
        })
        .catch((error) => {
          setError('Error fetching questions');
          console.error('Error fetching questions:', error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [selectedCategory]);

 
  const startQuiz = () => {
    const shuffled = questions.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 5);
    setQuizQuestions(selected);
    setShowQuiz(true);
    setScore(null);  
  };

   const handleAnswerChange = (questionIndex, answer) => {
    setUserAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionIndex]: answer
    }));
  };

   const submitQuiz = () => {
    let correctAnswersCount = 0;
    quizQuestions.forEach((question, index) => {
      if (userAnswers[index] === question.correct_answer) {
        correctAnswersCount++;
      }
    });
    setScore(correctAnswersCount);  
    setShowQuiz(false);  
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Trivia Categories
      </Typography>

      <Select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        displayEmpty
        fullWidth
        variant="outlined"
      >
        <MenuItem value="">
          <em>Select a category</em>
        </MenuItem>
        {categories.map(category => (
          <MenuItem key={category.id} value={category.id}>
            {category.name}
          </MenuItem>
        ))}
      </Select>

      {loading && <CircularProgress />}

      {error && <Typography color="error">{error}</Typography>}

 
      {questions.length > 0 && !showQuiz && score === null && (
        <Button variant="contained" color="primary" onClick={startQuiz}>
          Start Quiz
        </Button>
      )}

 
      {showQuiz && quizQuestions.length > 0 && (
        <div>
          <Typography variant="h5" gutterBottom>
            Answer the questions:
          </Typography>
          <List>
            {quizQuestions.map((question, index) => (
              <ListItem key={index}>
                <ListItemText primary={<strong>{question.question}</strong>} />
                <RadioGroup
                  onChange={(e) => handleAnswerChange(index, e.target.value)}
                >
                  {[...question.incorrect_answers, question.correct_answer]
                    
                    .map((answer, i) => (
                      <FormControlLabel
                        key={i}
                        value={answer}
                        control={<Radio />}
                        label={answer}
                      />
                    ))}
                </RadioGroup>
              </ListItem>
            ))}
          </List>
          <Button variant="contained" color="primary" onClick={submitQuiz}>
            Submit Quiz
          </Button>
        </div>
      )}

 
      {score !== null && (
        <Typography variant="h5">
          Your score: {score} / 5
        </Typography>
      )}
    </Container>
  );
};

export default Categories;
