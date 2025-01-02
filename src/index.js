import React from 'react';
import { createRoot } from 'react-dom/client';
import QuizApp from './QuizApp';

// Adăugăm un stil global pentru body
const globalStyles = `
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #f0f2f5;
    min-height: 100vh;
  }

  * {
    box-sizing: border-box;
  }
`;

// Creăm un element style și îl adăugăm în head
const styleSheet = document.createElement("style");

styleSheet.innerText = globalStyles;

document.head.appendChild(styleSheet);

// Găsim elementul root
const container = document.getElementById('root');

// Creăm rădăcina React
const root = createRoot(container);

// Renderăm aplicația
root.render(
  <React.StrictMode>
    <QuizApp />
  </React.StrictMode>
);
