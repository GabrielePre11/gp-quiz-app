/*
- IMPORT ReactNode AND ButtonHTMLAttributes TO DEFINE THE TYPE OF
- THE ICON (ReactNode) AND TO ALLOW THE BUTTON COMPONENT ACCEPT 
- HTML ATTRIBUTES SUCH AS onClick ETC.
*/
import type { ReactNode, ButtonHTMLAttributes } from 'react'

/*========== QUESTION'S INTERFACE ==========*/

/*
- The QuestionStructure interface defines the structure of a question.
- Each question consists of a text (the question title), a list of options, 
- and the answer (the correct one)
*/

export interface QuestionStructure {
    question: string,
    options: string[],
    answer: string
};

/*========== QUIZPROPS INTERFACE ==========*/

/*
- The QuizProps interface defines the properties for the Quiz component.
- questionIndex => tracks the current question
- setQuestionIndex => is used to update the index (PREV/NEXT BUTTONS)
- score => stores the score of the user (initially 0)
- setScore => is used to update the user'score
*/

export interface QuizProps {
    questionIndex: number,
    setQuestionIndex: (value: number) => void
    score: number,
    setScore: (value: number) => void;
};

/*========== QUESTIONSPROPS INTERFACE ==========*/

/*
- The QuestionProps interface defines the properties for the Question component.
*/

export interface QuestionProps {
    questionIndex: number
    selectedAnswer: string | null,
    setSelectedAnswer: (value: string | null) => void,
    score: number,
    setScore: (value: number) => void
};

/*========== RESULTPROPS INTERFACE ==========*/

/*
- The ResultProps interface defines the properties for the Results component.
*/

export interface ResultProps {
    score: number,
    setScore: (value: number) => void
    setQuestionIndex: (value: number) => void
};

/*========== BUTTONPROPS INTERFACE (WHICH EXTENDS ButtonHTMLAttributes) ==========*/

// The icon is optional

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string,
    icon?: ReactNode
};

/*========== QUESTIONS DATA ==========*/

/*
- An array of objects in which each object represents a question
- with 4 options (array) and the correct answer.
*/

export const questions = [
    {
        "question": "What is the capital city of France? 🗺️",
        "options": ["Paris", "London", "Berlin", "Rome"],
        "answer": "Paris"
    },

    {
        "question": "Who wrote the play 'Romeo and Juliet'? 🎨",
        "options": ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
        "answer": "William Shakespeare"
    },

    {
        "question": "What is the chemical symbol for Gold? 🪙",
        "options": ["Au", "Ag", "Gd", "Go"],
        "answer": "Au"
    },

    {
        "question": "In which year did the Titanic sink? 🚢",
        "options": ["1905", "1912", "1920", "1898"],
        "answer": "1912"
    },

    {
        "question": "Which planet is known as the Red Planet? 🌌",
        "options": ["Venus", "Mars", "Jupiter", "Mercury"],
        "answer": "Mars"
    },

    {
        "question": "How many continents are there on Earth? 🌍",
        "options": ["5", "6", "7", "8"],
        "answer": "7"
    },

    {
        "question": "Who painted the 'Mona Lisa'? 🖌️",
        "options": ["Leonardo da Vinci", "Michelangelo", "Vincent van Gogh", "Pablo Picasso"],
        "answer": "Leonardo da Vinci"
    },

    {
        "question": "What is the largest ocean on Earth? 🌊",
        "options": ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        "answer": "Pacific Ocean"
    },

    {
        "question": "What language has the most native speakers in the world? 🗣️",
        "options": ["English", "Spanish", "Mandarin Chinese", "Hindi"],
        "answer": "Mandarin Chinese"
    },

    {
        "question": "What is the hardest natural substance on Earth? ⛏️",
        "options": ["Diamond", "Gold", "Iron", "Quartz"],
        "answer": "Diamond"
    }
];
