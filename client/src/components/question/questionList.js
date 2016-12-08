import React from 'react';

import Question from './question';

const QuestionList = ({questions}) => (
  <div>
    {questions.map(question => (
      <Question key={question.id} question={question} />
    ))}
  </div>
);

export default QuestionList;
