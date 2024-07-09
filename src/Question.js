import React from 'react';
import AnswerButton from './AnswerButton';

function Question({ question, answers, handleAnswerOptionClick, isAnswered }) {
  return (
    <div>
      <h2>{question}</h2>
      <div id="answer-button">
        {answers.map((answer, index) => (
          <AnswerButton
            key={index}
            answerText={answer.text}
            isCorrect={answer.correct}
            handleAnswerOptionClick={handleAnswerOptionClick}
            isAnswered={isAnswered}
          />
        ))}
      </div>
    </div>
  );
}

export default Question;
