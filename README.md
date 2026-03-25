# PIS Quiz

A simple React application for practicing PIS course material through multiple-choice questions.

## Features

- Displays questions one by one.
- Randomizes question order.
- Randomizes answer options for each question.
- Immediately shows whether the selected answer is correct or incorrect.
- Tracks the current score during the quiz.
- Shows the final score and success percentage at the end.
- Provides a full answer review (including the correct answer for incorrect responses).
- Supports quiz restart.

## Quiz Content

- Total questions: 390
- Questions are grouped into topics such as:
  - UML Basics
  - Class Diagrams
  - Sequence Diagrams
  - Activity Diagrams
  - Use Cases
  - Structural System Analysis
  - Requirements Analysis
  - OCL
  - MDA
  - Documentation
  - and other PIS-related topics

## Technologies

- React 18
- react-scripts 5 (Create React App)

## Running the Project Locally

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm start
```

The app will be available at:

http://localhost:3000

## Available Commands

```bash
npm start      # Run in development mode
npm test       # Launch the test runner
npm run build  # Build for production into the build/ folder
npm run eject  # Eject CRA configuration (irreversible)
```

## Project Structure

```text
pis-kviz/
├── public/
│   └── index.html
├── src/
│   ├── App.js          # Main quiz logic
│   ├── App.css         # Application styles
│   ├── index.js        # Application entry point
│   └── questions.js    # Question dataset
├── build/              # Generated production build
├── package.json
└── README.md
```

## Adding New Questions

Questions are stored in src/questions.js as an array of objects.

Example format:

```js
{
  id: 391,
  section: "UML BASICS",
  question: "Question text",
  options: ["Answer A", "Answer B", "Answer C"],
  correct: 0
}
```

Notes:
- correct is the index of the right answer in the options array.
- The app automatically shuffles options and recalculates the correct index when the quiz starts.

## Author

- GitHub: https://github.com/kole284/
