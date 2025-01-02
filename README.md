# Quiz App React

An interactive quiz application built with React. Users can answer multiple-choice questions and see their final score.

## 📋 Features

- User-friendly interface
- Progress tracking with a visual progress bar
- Visual feedback for correct/incorrect answers
- Scoring system
- Quiz restart capability
- Responsive design

## 🚀 Technologies Used

- React 18
- JavaScript (ES6+)
- CSS-in-JS
- Lucide React for icons

## 💻 Installation and Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/quiz-app.git
   cd quiz-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Access the application**
   Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
quiz-app/
├── public/
│   └── index.html
├── src/
│   ├── index.js          # Application entry point
│   ├── QuizApp.js        # Main component
│   ├── QuestionCard.js   # Question display component
│   ├── ScoreCard.js      # Score display component
│   ├── questions.js      # Quiz questions data
│   └── styles.js         # Application styles
└── package.json
```

## 🛠️ Customization

### Adding New Questions

To add new questions, modify the `questions.js` file:

```javascript
const questions = [
  {
    question: "Your question here?",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    correctAnswer: "Correct answer here"
  },
  // Add more questions here
];
```

### Modifying Styles

Styles can be modified in the `styles.js` file. Example:

```javascript
export const styles = {
  container: {
    // Modify styles here
    maxWidth: '800px', // example modification
  }
  // ...
};
```

## 📱 Responsive Design

The application is fully responsive and adapts to different screen sizes:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🤝 Contributing

Contributions are welcome! For major changes:
1. Fork the repository
2. Create a new branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📜 License

This project is licensed under the [MIT License](LICENSE).

## 🐛 Issue Reporting

If you find a bug or have a suggestion, please open an issue in the repository.

## 🔜 Future Plans

- [ ] Add timer for each question
- [ ] Implement question categories
- [ ] Add transition animations
- [ ] Save scores in localStorage
- [ ] Add a leaderboard
