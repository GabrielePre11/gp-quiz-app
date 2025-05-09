import type { ResultProps } from "../assets/data"
import Button from "./Button"

/*========== ICONS ==========*/

// Button
import { FaRepeat } from "react-icons/fa6";

// Social
import { LuGithub } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";

const Results = ({ score, setScore, setQuestionIndex }: ResultProps) => {

    /*========== FUNCTION THAT ALLOWS THE USER TO PLAY AGAIN ==========*/
    const playAgain = (): void => {
        // Resets the QuestionIndex and the Score
        setQuestionIndex(0);
        setScore(0);
    }

    return (
        /*
        - If the user's score is higher than 5 it means the user's has passed the quiz,
        - so it shows "Congratulations 👏🏼", otherwise it shows "So close! You’re on the right track 💪🏼"
        */

        <div className="container p-4 mx-auto max-w-2xl w-full bg-beige text-black rounded-xl shadow-lg shadow-celestial-blue">
            <header className="flex flex-col text-center sm:flex-row sm:items-center sm:justify-between pb-2 text-4xl font-semibold text-celestial-blue relative before:content-[''] before:absolute before:left-0 before:-bottom-2.5 before:h-1 before:w-full before:bg-oxford-blue">
                GPQuiz
                <p className="flex items-center justify-center mt-2 sm:justify-start sm:mt-0 text-2xl gap-2.5">{score > 5 ? "Congratulations 👏🏼" : "So close! You’re on the right track 💪🏼"}</p>
            </header>

            <h1 className="flex flex-col items-center gap-3 my-10 text-6xl text-center uppercase">You scored <div className="flex items-center gap-3"><span className="text-8xl font-semibold text-oxford-blue">{score}</span>/<span className="text-7xl text-celestial-blue">10</span></div></h1>

            <footer className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:items-center sm:justify-between mt-5 py-2 relative before:content-[''] before:absolute before:left-0 before:-top-2.5 before:h-1 before:w-full before:bg-oxford-blue">
                <Button
                    className="flex items-center"
                    onClick={playAgain}
                    label="Play Again"
                    icon={<FaRepeat className="ml-auto" />}
                />

                <p className="flex items-center justify-center sm:justify-end gap-3 text-[1.2rem] text-celestial-blue font-semibold">
                    Follow me on
                    <a
                        href="https://github.com/GabrielePre11"
                        target="_blank"
                        className="grid place-content-center p-2 bg-oxford-blue rounded-full text-[1.3rem] hover:transform hover:-translate-y-2.5 duration-600">
                        <LuGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/gabriele-prestano-70a346357"
                        target="_blank"
                        className="grid place-content-center p-2 bg-oxford-blue rounded-full text-[1.3rem] hover:transform hover:-translate-y-2.5 duration-600">
                        <FaLinkedinIn />
                    </a>
                </p>
            </footer>
        </div>
    )
}

export default Results