import React from 'react';
import { Timer } from 'lucide-react';
import { styles } from './styles';

const QuestionCard = ({
  questionNumber,
  totalQuestions,
  score,
  question,
  options,
  selectedAnswer,
  isAnswered,
  onSelectAnswer,
  onNext,
  correctAnswer
}) => {
  const getOptionStyle = (option) => {
    let optionStyle = { ...styles.option };

    if (isAnswered) {
      if (option === correctAnswer) {
        optionStyle = { ...optionStyle, ...styles.optionCorrect };
      } else if (option === selectedAnswer) {
        optionStyle = { ...optionStyle, ...styles.optionWrong };
      } else {
        optionStyle = { ...optionStyle, ...styles.optionDisabled };
      }
    }

    return optionStyle;
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.headerTop}>
          <p style={styles.questionNumber}>
            Întrebarea {questionNumber}/{totalQuestions}
          </p>
          <div style={styles.scoreContainer}>
            <Timer size={16} />
            <span>Score: {score}</span>
          </div>
        </div>
        <div style={styles.progressBar}>
          <div
            style={{
              ...styles.progressFill,
              width: `${(questionNumber / totalQuestions) * 100}%`
            }}
          />
        </div>
        <h2 style={styles.question}>{question}</h2>
      </div>

      <div style={styles.optionsContainer}>
        {options.map((option, index) => (
          <button
            key={index}
            style={getOptionStyle(option)}
            onClick={() => onSelectAnswer(option)}
            disabled={isAnswered && option !== selectedAnswer && option !== correctAnswer}
            onMouseEnter={(e) => {
              if (!isAnswered) {
                e.target.style.backgroundColor = styles.optionHover.backgroundColor;
              }
            }}
            onMouseLeave={(e) => {
              if (!isAnswered) {
                e.target.style.backgroundColor = styles.option.backgroundColor;
              }
            }}
          >
            {option}
          </button>
        ))}
      </div>

      <div style={styles.footer}>
        {isAnswered && (
          <button
            style={styles.button}
            onClick={onNext}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = styles.buttonHover.backgroundColor;
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = styles.button.backgroundColor;
            }}
          >
            {questionNumber === totalQuestions ? 'Finalizează' : 'Următoarea întrebare'}
          </button>
        )}
      </div>
    </div>
  );
};

export default QuestionCard;
