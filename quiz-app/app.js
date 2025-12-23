import { useState } from "react";

function App() {
  const questions = [
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5"],
      answer: "4"
    },
    {
      question: "Capital of India?",
      options: ["Delhi", "Mumbai", "Chennai"],
      answer: "Delhi"
    }
  ];

  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswer = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Online Quiz</h1>

      {currentQuestion < questions.length ? (
        <>
          <h2>{questions[currentQuestion].question}</h2>

          {questions[currentQuestion].options.map((option) => (
            <button
              key={option}
              onClick={() => handleAnswer(option)}
              style={{ margin: "10px" }}
            >
              {option}
            </button>
          ))}
        </>
      ) : (
        <h2>Your Score: {score}</h2>
      )}
    </div>
  );
}

export default App;

