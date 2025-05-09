import { useState } from "react";
import Quiz from "./components/Quiz";
import { questions } from "./assets/data";
import Results from "./components/Results";

const App = () => {
  /*========== STATES ==========*/

  // State that determines the index of the question, which initially is (0)
  const [questionIndex, setQuestionIndex] = useState<number>(0);

  // State that determines the score of the user, which initially is (0)
  const [score, setScore] = useState<number>(0);

  return (
    <main className="px-4 flex justify-center items-center min-h-screen">

      {/*
      - If the questionIndex is lower than questions.length (10), the component <Quiz />,
      - is shown, but once the user reaches the last question (10) and clicks the 
      - "Finish Quiz" button, the <Results /> component is rendered to show the final score.
      */}

      {questionIndex < questions.length ?
        (
          <Quiz
            questionIndex={questionIndex}
            setQuestionIndex={setQuestionIndex}
            score={score}
            setScore={setScore}
          />
        ) :
        (
          <Results
            score={score}
            setScore={setScore}
            setQuestionIndex={setQuestionIndex}
          />
        )
      }
    </main>
  );
}

export default App;