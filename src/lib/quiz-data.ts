export interface Question {
    id: number;
    question: string;
    options: string[];
    correctIndex: number;
    difficulty: number;
}

export const QUIZ_QUESTIONS: Question[] = [
    {
        id: 1,
        question: "Which of these sentences is grammatically correct?",
        options: [
            "She don't like coffee.",
            "She doesn't likes coffee.",
            "She doesn't like coffee.",
            "She don't likes coffee."
        ],
        correctIndex: 2,
        difficulty: 1
    },
    {
        id: 2,
        question: "Select the correct synonym for 'Happy'.",
        options: ["Sad", "Elated", "Angry", "Tired"],
        correctIndex: 1,
        difficulty: 1
    },
    {
        id: 3,
        question: "Which tense is used in: 'I have been working here for 5 years'?",
        options: ["Present Continuous", "Present Perfect", "Present Perfect Continuous", "Past Continuous"],
        correctIndex: 2,
        difficulty: 2
    },
    {
        id: 4,
        question: "Choose the correct preposition: 'I am good ___ English.'",
        options: ["at", "in", "on", "with"],
        correctIndex: 0,
        difficulty: 2
    },
    {
        id: 5,
        question: "What is the past participle of 'write'?",
        options: ["Wrote", "Written", "Writing", "Writed"],
        correctIndex: 1,
        difficulty: 1
    }
];
