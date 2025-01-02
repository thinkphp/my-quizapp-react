import React, { useState } from 'react';
import questions from './questions';
import { styles } from './styles';
import QuestionCard from './QuestionCard';
import ScoreCard from './ScoreCard';

const QuizApp = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleAnswerSelect = (selectedOption) => {
    if (isAnswered) return;

    setSelectedAnswer(selectedOption);
    setIsAnswered(true);

    if (selectedOption === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setShowScore(true);
    }
  };

  const handleRestartQuiz = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setShowScore(false);
    setSelectedAnswer(null);
    setIsAnswered(false);
  };

  if (showScore) {
    return (
      <ScoreCard
        score={score}
        totalQuestions={questions.length}
        onRestart={handleRestartQuiz}
      />
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <QuestionCard
      questionNumber={currentQuestionIndex + 1}
      totalQuestions={questions.length}
      score={score}
      question={currentQuestion.question}
      options={currentQuestion.options}
      selectedAnswer={selectedAnswer}
      isAnswered={isAnswered}
      onSelectAnswer={handleAnswerSelect}
      onNext={handleNextQuestion}
      correctAnswer={currentQuestion.correctAnswer}
    />
  );
};

export default QuizApp;
