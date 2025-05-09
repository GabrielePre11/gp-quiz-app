import { useEffect, useState } from "react";
import { questions, type QuestionProps, type QuestionStructure } from "../assets/data"

/*========== QUESTION ICON ==========*/
import { MdQuestionAnswer } from "react-icons/md";

const Question = ({ questionIndex, selectedAnswer, setSelectedAnswer, score, setScore }: QuestionProps) => {
    /*========== STATES ==========*/

    /*
    - The <QuestionStructure> interface represents the structure of the question
    - The variable currentQuestion stores the current question based on questionIndex (ex. 0 => First Question)
    - When the value of questionIndex is updated, the currentQuestion changes.
    */
    const [currentQuestion, setCurrentQuestion] = useState<QuestionStructure>(questions[questionIndex]);

    /*
    - This useEffect updates the currentQuestion based on questionIndex, ONLY when questionIndex changes,
    - so it goes to the Prev./Next question
    */
    useEffect(() => {
        setCurrentQuestion(questions[questionIndex]);
    }, [questionIndex]);

    /*========== FUNCTION TO HANDLE THE USER'S ANSWER ==========*/
    const handleAnswerClick = (option: string) => {
        // Sets the user's answer
        setSelectedAnswer(option);

        /*
        - It updates the score ONLY if any answer hasn't been given yet, and if the
        - option choiced by the user is equal to currentQuestion.answer
        */
        if (!selectedAnswer && option === currentQuestion.answer) {
            // Increments the score
            setScore(score + 1);
        }
    };

    return (
        <div className="mt-7">
            {/*========== QUESTION'S TITLE ==========*/}
            <h2 className="flex items-center gap-2 text-[1.2rem] xs:text-2xl text-oxford-blue font-semibold">
                <MdQuestionAnswer
                    className="text-3xl text-celestial-blue shrink-0"
                />
                {currentQuestion.question}
            </h2>

            {/*========== OPTIONS ==========*/}
            <ul className="mt-7 text-[1.2rem] space-y-4.5">
                {currentQuestion.options.map((option, index) => (
                    <li
                        /*
                        - When an answer is clicked, the handleAnswerClick function is called
                        - with the selected option as a parameter.
                        - If the selected answer matches the clicked option, the class changes (for example, color and bg-color).
                        */
                        onClick={() => { handleAnswerClick(option) }}
                        className={`rounded-lg p-2 cursor-pointer transition-colors duration-100 ${selectedAnswer === option ? 'bg-oxford-blue text-amber-50 ring-2 ring-celestial-blue' : 'ring ring-oxford-blue hover:bg-oxford-blue hover:text-amber-50 hover:ring-celestial-blue'}`}
                        key={index}>{option}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Question