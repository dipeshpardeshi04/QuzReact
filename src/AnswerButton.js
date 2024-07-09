import React from 'react';

function AnswerButton({ answerText, isCorrect, handleAnswerOptionClick, isAnswered }) {
  const handleClick = () => {
    if (!isAnswered) {
      handleAnswerOptionClick(isCorrect);
    }
  };

  return (
    <button
      className={`btn ${isAnswered && (isCorrect ? 'correct' : 'incorrect')}`}
      onClick={handleClick}
      disabled={isAnswered}
    >
      {answerText}
    </button>
  );
}

export default AnswerButton;
