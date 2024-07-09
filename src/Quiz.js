import React, { useState } from 'react';
import Question from './Question';
import questions from './questions';

function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    setIsAnswered(true);
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const handleNextButtonClick = () => {
    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
      setIsAnswered(false);
    } else {
      setShowScore(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowScore(false);
    setIsAnswered(false);
  };

  return (
    <div className="quiz">
      {showScore ? (
        <div>
          <h2>You scored {score} out of {questions.length}</h2>
          <button onClick={handleRestartQuiz} id="next-btn">Play Again</button>
        </div>
      ) : (
        <>
          <Question
            question={questions[currentQuestionIndex].question}
            answers={questions[currentQuestionIndex].answers}
            handleAnswerOptionClick={handleAnswerOptionClick}
            isAnswered={isAnswered}
          />
          {isAnswered && (
            <button onClick={handleNextButtonClick} id="next-btn">
              Next
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default Quiz;
