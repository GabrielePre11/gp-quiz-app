import { useState } from "react"
import Question from "./Question"

/*========== BUTTONS ICONS ==========*/
import { TbPlayerTrackPrevFilled } from "react-icons/tb";
import { TbPlayerTrackNextFilled } from "react-icons/tb";

/*========== COMPONENTS / QUESTIONS'S DATA / QUIZPROPS INTERFACE  ==========*/
import Button from "./Button";
import { questions, type QuizProps } from "../assets/data";

const Quiz = ({ questionIndex, setQuestionIndex, score, setScore }: QuizProps) => {
    /*========== STATES ==========*/

    /*
    - The variable selectedAnswer stores the answer given by the user.
    - Initially, it is (null) because the user hasn't selected any option yet.
    - Once an option is selected, it becomes a string (the selected answer), so its type is either <string | (or) null>.
    */
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

    /*
    - These functions change the value of questionIndex when the Prev. and Next buttons
    are clicked. 
    - The Prev. button is disabled at the start 'cause questionIndex is (0),
    so I don't need to add a security check on handlePrevQuestion.
    */
    const handlePrevQuestion = (): void => {
        setQuestionIndex(questionIndex - 1);
        setSelectedAnswer(null);
    }

    const handleNextQuestion = (): void => {
        setQuestionIndex(questionIndex + 1);
        setSelectedAnswer(null);
    }

    return (
        <div className="container p-4 mx-auto max-w-2xl w-full bg-beige text-black rounded-xl shadow-lg shadow-celestial-blue">

            {/* Header (Title and Question Info) */}
            <header className="flex flex-col text-center sm:flex-row sm:items-center sm:justify-between pb-2 text-4xl font-semibold text-celestial-blue relative before:content-[''] before:absolute before:left-0 before:-bottom-2.5 before:h-1 before:w-full before:bg-oxford-blue">
                GPQuiz
                <p className="flex items-center justify-center mt-2 sm:justify-start sm:mt-0 text-2xl gap-2.5">Question <span className="bg-oxford-blue grid place-items-center items-center h-10 w-10 rounded-full">{questionIndex + 1}</span> out of 10</p>
            </header>

            {/* Question and Answers */}
            <Question
                questionIndex={questionIndex}
                selectedAnswer={selectedAnswer}
                setSelectedAnswer={setSelectedAnswer}
                score={score}
                setScore={setScore}
            />

            {/* Buttons */}
            <div className="flex items-center justify-between mt-6">
                {/* Prev. Button */}
                <Button
                    disabled={questionIndex === 0 ? true : false}
                    onClick={handlePrevQuestion}
                    label="Prev."
                    icon=<TbPlayerTrackPrevFilled
                        className="text-2xl" />
                />

                {/* Next Button */}

                {/* If the user selects an option, the Next button will be unlocked to proceed with the Quiz. */}
                <Button
                    disabled={selectedAnswer === null ? true : false}
                    onClick={handleNextQuestion}
                    /*
                    - When the user comes to the last question (10), the text of the button shows 'Finish Quiz'
                    instead of 'Next'.
                    */
                    label={`${questionIndex === questions.length - 1 ? 'Finish Quiz' : 'Next'}`}
                    icon=<TbPlayerTrackNextFilled
                        className="text-2xl" />
                />
            </div>
        </div>
    )
}

export default Quiz