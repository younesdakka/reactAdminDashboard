import { ListItem, ListItemText, RadioGroup, FormControlLabel, Radio } from '@mui/material';

export const QuestionItem = ({ question, index, handleAnswerChange }) => (
  <ListItem>
    <ListItemText primary={<strong>{question.question}</strong>} />
    <RadioGroup onChange={(e) => handleAnswerChange(index, e.target.value)}>
      {[...question.incorrect_answers, question.correct_answer].map((answer, i) => (
        <FormControlLabel key={i} value={answer} control={<Radio />} label={answer} />
      ))}
    </RadioGroup>
  </ListItem>
);
