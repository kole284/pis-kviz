import React, { useState, useEffect } from 'react';
import { questions } from './questions';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    // Mešamo pitanja na početku
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled);
  }, []);

  const handleAnswerClick = (answerIndex) => {
    if (!showAnswer) {
      setSelectedAnswer(answerIndex);
      setShowAnswer(true);
      
      const isCorrect = answerIndex === shuffledQuestions[currentQuestion].correct;
      if (isCorrect) {
        setScore(score + 1);
      }
      
      setAnsweredQuestions([
        ...answeredQuestions,
        {
          question: shuffledQuestions[currentQuestion],
          selectedAnswer: answerIndex,
          isCorrect
        }
      ]);
    }
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < shuffledQuestions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedAnswer(null);
      setShowAnswer(false);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled);
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
    setShowAnswer(false);
    setAnsweredQuestions([]);
  };

  if (shuffledQuestions.length === 0) {
    return <div className="loading">Učitavanje...</div>;
  }

  return (
    <div className="app">
      <div className="quiz-container">
        <h1>PIS Kviz</h1>
        
        {showScore ? (
          <div className="score-section">
            <h2>Završili ste kviz!</h2>
            <p className="score">
              Vaš rezultat: {score} / {shuffledQuestions.length}
            </p>
            <p className="percentage">
              ({Math.round((score / shuffledQuestions.length) * 100)}%)
            </p>
            
            <div className="review-section">
              <h3>Pregled odgovora:</h3>
              {answeredQuestions.map((item, index) => (
                <div 
                  key={index} 
                  className={`review-item ${item.isCorrect ? 'correct' : 'incorrect'}`}
                >
                  <p className="review-question">
                    <strong>Pitanje {index + 1}:</strong> {item.question.question}
                  </p>
                  <p className="review-answer">
                    <strong>Vaš odgovor:</strong> {item.question.options[item.selectedAnswer]}
                    {!item.isCorrect && (
                      <>
                        <br />
                        <strong>Tačan odgovor:</strong> {item.question.options[item.question.correct]}
                      </>
                    )}
                  </p>
                </div>
              ))}
            </div>
            
            <button onClick={restartQuiz} className="restart-button">
              Ponovi kviz
            </button>
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Pitanje {currentQuestion + 1}</span> / {shuffledQuestions.length}
              </div>
              <div className="section-badge">
                {shuffledQuestions[currentQuestion].section}
              </div>
              <div className="question-text">
                {shuffledQuestions[currentQuestion].question}
              </div>
            </div>
            
            <div className="answer-section">
              {shuffledQuestions[currentQuestion].options.map((option, index) => {
                let buttonClass = 'answer-button';
                
                if (showAnswer) {
                  if (index === shuffledQuestions[currentQuestion].correct) {
                    buttonClass += ' correct';
                  } else if (index === selectedAnswer) {
                    buttonClass += ' incorrect';
                  }
                } else if (selectedAnswer === index) {
                  buttonClass += ' selected';
                }
                
                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerClick(index)}
                    className={buttonClass}
                    disabled={showAnswer}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
            
            <button
              onClick={handleNextQuestion}
              disabled={!showAnswer}
              className="next-button"
            >
              {currentQuestion === shuffledQuestions.length - 1 ? 'Završi' : 'Sledeće'}
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
