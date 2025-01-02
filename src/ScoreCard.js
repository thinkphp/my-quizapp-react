import React from 'react';
import { Trophy } from 'lucide-react';
import { styles } from './styles';

const ScoreCard = ({ score, totalQuestions, onRestart }) => {
  return (
    <div style={styles.container}>
      <div style={styles.scoreCard}>
        <h2 style={styles.question}>Quiz Finalizat!</h2>
        <Trophy size={48} style={styles.trophy} />
        <p style={styles.finalScore}>
          Scorul tău: {score} din {totalQuestions}
        </p>
        <div style={styles.progressBar}>
          <div
            style={{
              ...styles.progressFill,
              width: `${(score / totalQuestions) * 100}%`
            }}
          />
        </div>
        <button
          style={styles.button}
          onClick={onRestart}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = styles.buttonHover.backgroundColor;
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = styles.button.backgroundColor;
          }}
        >
          Încearcă din nou
        </button>
      </div>
    </div>
  );
};

export default ScoreCard;
