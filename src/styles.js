export const styles = {
  container: {
    maxWidth: '600px',
    margin: '2rem auto',
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  },
  header: {
    marginBottom: '20px',
  },
  headerTop: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '15px',
  },
  questionNumber: {
    color: '#666',
    fontSize: '14px',
  },
  scoreContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    color: '#666',
    fontSize: '14px',
  },
  progressBar: {
    width: '100%',
    height: '8px',
    backgroundColor: '#e9ecef',
    borderRadius: '4px',
    marginBottom: '20px',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#4CAF50',
    borderRadius: '4px',
    transition: 'width 0.3s ease',
  },
  question: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#333',
  },
  optionsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    marginBottom: '20px',
  },
  option: {
    padding: '12px 16px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    backgroundColor: 'white',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    textAlign: 'left',
    fontSize: '16px',
    width: '100%',
  },
  optionHover: {
    backgroundColor: '#f8f9fa',
  },
  optionCorrect: {
    backgroundColor: '#4CAF50',
    color: 'white',
    borderColor: '#4CAF50',
  },
  optionWrong: {
    backgroundColor: '#dc3545',
    color: 'white',
    borderColor: '#dc3545',
  },
  optionDisabled: {
    opacity: 0.7,
    cursor: 'not-allowed',
  },
  footer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '20px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.2s ease',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
  scoreCard: {
    textAlign: 'center',
  },
  trophy: {
    color: '#ffc107',
    margin: '20px auto',
  },
  finalScore: {
    fontSize: '24px',
    marginBottom: '20px',
  },
};
