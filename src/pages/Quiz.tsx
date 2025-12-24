import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
// import clsx from 'clsx';
import { QUIZ_QUESTIONS } from '../lib/quiz-data';
import VideoBackground from '../components/VideoBackground';
import SEO from '../components/SEO';

const Quiz: React.FC = () => {
    const navigate = useNavigate();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [isFinished, setIsFinished] = useState(false);

    const handleAnswer = (optionIndex: number) => {
        const isCorrect = optionIndex === QUIZ_QUESTIONS[currentQuestionIndex].correctIndex;
        if (isCorrect) setScore(score + 1);

        if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
            setTimeout(() => setCurrentQuestionIndex(currentQuestionIndex + 1), 300);
        } else {
            setIsFinished(true);
        }
    };

    const percentage = Math.round((score / QUIZ_QUESTIONS.length) * 100);
    const isPassed = percentage >= 80;

    return (
        <div className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden font-sans text-white bg-black">
             <SEO 
                title="English Level Check - Sysca Anggelia"
                description="Take a quick English level assessment to determine if you qualify for advanced classes with Sysca Anggelia."
                url="https://sysca.web.app/quiz"
             />
             {/* Static/Slow BG for less distraction */}
             <VideoBackground src="/corporate.webp" /> 

             {/* Progress Bar */}
             <div className="absolute top-0 left-0 w-full h-2 bg-white/10">
                 <motion.div 
                    className="h-full bg-white"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentQuestionIndex + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                 />
             </div>

            <div className="relative z-10 w-full max-w-2xl px-6">
                <AnimatePresence mode="wait">
                    {!isFinished ? (
                        <motion.div
                            key={currentQuestionIndex}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 md:p-12 rounded-3xl shadow-2xl"
                        >
                            <h2 className="text-xl opacity-60 mb-2 uppercase tracking-widest">
                                Question {currentQuestionIndex + 1} of {QUIZ_QUESTIONS.length}
                            </h2>
                            <h1 className="text-3xl md:text-4xl font-light mb-8 leading-tight">
                                {QUIZ_QUESTIONS[currentQuestionIndex].question}
                            </h1>

                            <div className="grid gap-4">
                                {QUIZ_QUESTIONS[currentQuestionIndex].options.map((option, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => handleAnswer(idx)}
                                        className="p-4 text-left rounded-xl bg-white/5 hover:bg-white/20 border border-white/10 transition-all active:scale-95 text-lg"
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="text-center p-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl"
                        >
                            <h1 className="text-5xl md:text-7xl font-thin mb-4">
                                {isPassed ? "Excellent!" : "Great Effort!"}
                            </h1>
                            <p className="text-2xl opacity-90 mb-8">
                                You scored {percentage}%
                            </p>

                            {isPassed ? (
                                <div className="space-y-4">
                                    <p className="text-lg opacity-80 max-w-md mx-auto">
                                        Congratulations! You qualify for our Advanced English Class. Let's refine your skills further.
                                    </p>
                                    <button
                                        onClick={() => navigate('/?book=true&serviceId=3')} // Assuming 3 is English Class ID
                                        className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:scale-105 transition-transform w-full md:w-auto"
                                    >
                                        BOOK ADVANCED CLASS
                                    </button>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    <p className="text-lg opacity-80 max-w-md mx-auto">
                                        Keep practicing! You can still book a standard consultation to improve your basics.
                                    </p>
                                    <button
                                        onClick={() => navigate('/')}
                                        className="px-8 py-4 bg-white/20 text-white font-semibold rounded-full hover:bg-white/30 transition-colors w-full md:w-auto"
                                    >
                                        RETURN HOME
                                    </button>
                                </div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Quiz;
