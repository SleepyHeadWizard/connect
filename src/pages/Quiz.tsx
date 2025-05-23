import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { quizQuestions, getQuizResults } from '../data/quizData'; // Ensure these are correctly defined
import { FaChartLine, FaLightbulb, FaCheckCircle, FaRedoAlt, FaBrain, FaBalanceScale } from 'react-icons/fa'; // Added more icons

// Assuming your quizData.ts might look something like this (for context):
// interface QuizOption { label: string; value: number; }
// interface QuizQuestion { id: number; question: string; options: QuizOption[]; category: string; }
// interface CategoryResult { category: string; score: number; feedback: string; recommendations: string[]; }
// interface QuizResults { overallFeedback: string; categoryResults: CategoryResult[]; generalRecommendations: string[]; }
// export const quizQuestions: QuizQuestion[] = [...];
// export const getQuizResults = (answers: Record<number, number>): QuizResults => {...};


const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [quizResults, setQuizResults] = useState<any>(null); // Consider defining a strong type for QuizResults

  const handleAnswer = (value: number, optionIndex: number) => {
    setSelectedOptionIndex(optionIndex);
    const newAnswers = { ...answers, [quizQuestions[currentQuestion].id]: value };
    
    // Short delay to show selection before moving to next question or results
    setTimeout(() => {
      setAnswers(newAnswers);
      setSelectedOptionIndex(null); // Reset for next question
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        const results = getQuizResults(newAnswers); // Make sure this function is robust
        setQuizResults(results);
        setShowResults(true);
      }
    }, 300); // 300ms delay
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setQuizResults(null);
    setSelectedOptionIndex(null);
  };

  // Define a score color based on a normalized score (0-100) if available
  const getScoreColorClass = (score: number, maxScore: number = 5) => { // Assuming max value per question is 5
    const percentage = (score / (quizQuestions.filter(q => q.category === quizResults?.categoryResults?.find((cat: any) => cat.score === score)?.category).length * maxScore)) * 100 || (score/50 * 100) ; // Example calculation
    if (percentage <= 40) return 'text-green-500 dark:text-green-400 bg-green-100 dark:bg-green-900/50 border-green-500'; // Good
    if (percentage <= 70) return 'text-yellow-500 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900/50 border-yellow-500'; // Needs Attention
    return 'text-red-500 dark:text-red-400 bg-red-100 dark:bg-red-900/50 border-red-500'; // Concerning
  };


  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800 text-slate-900 dark:text-white overflow-x-hidden pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-5 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-2">
            Digital Wellbeing Check-in
          </h1>
          <p className="text-md sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Answer a few questions to understand your relationship with technology and gain personalized insights for a healthier digital life.
          </p>
        </motion.div>

        {/* Quiz Content */}
        <AnimatePresence mode="wait">
          {!showResults ? (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white dark:bg-slate-800/70 backdrop-blur-lg p-6 sm:p-8 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700"
            >
              {/* Progress bar */}
              <div className="mb-6 sm:mb-8">
                <div className="flex justify-between text-sm text-slate-500 dark:text-slate-400 mb-1">
                  <span>Progress</span>
                  <span>{currentQuestion + 1} / {quizQuestions.length}</span>
                </div>
                <div className="w-full h-2.5 bg-slate-200 dark:bg-slate-700 rounded-full">
                  <motion.div
                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentQuestion) / quizQuestions.length) * 100}%` }} // Start from 0 for better initial feel
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                </div>
              </div>

              {/* Question Area */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentQuestion} // This key change triggers enter/exit animations
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-5"
                >
                  <h2 className="text-xl sm:text-2xl font-semibold text-slate-800 dark:text-white leading-tight">
                    {quizQuestions[currentQuestion].question}
                  </h2>

                  {/* Options */}
                  <div className="space-y-3">
                    {quizQuestions[currentQuestion].options.map((option, index) => (
                      <motion.button
                        key={index}
                        onClick={() => handleAnswer(option.value, index)}
                        className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-150
                                      ${selectedOptionIndex === index 
                                        ? 'bg-indigo-500 border-indigo-600 text-white shadow-lg scale-105' 
                                        : 'bg-slate-50 dark:bg-slate-700/60 border-slate-200 dark:border-slate-600 hover:border-indigo-400 dark:hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-slate-700'
                                      }`}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {option.label}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          ) : (
            quizResults && ( // Ensure quizResults is not null
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              {/* Results Header */}
              <div className="text-center bg-gradient-to-br from-indigo-600 to-purple-600 p-6 sm:p-8 rounded-xl shadow-xl text-white">
                <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}>
                  <FaBrain className="mx-auto text-5xl sm:text-6xl mb-4 opacity-80" />
                </motion.div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-3">
                  Your Digital Wellbeing Snapshot
                </h2>
                <p className="text-md sm:text-lg opacity-90 max-w-xl mx-auto">
                  {quizResults.overallFeedback || "Here's a summary of your assessment. Remember, awareness is the first step towards positive change!"}
                </p>
              </div>

              {/* Category Results Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {quizResults.categoryResults.map((category: any, index: number) => (
                  <motion.div
                    key={category.category || index} // Use category name as key if unique
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.15, duration: 0.4 }}
                    className={`bg-white dark:bg-slate-800/70 backdrop-blur-lg p-5 sm:p-6 rounded-xl shadow-lg border-l-4 ${getScoreColorClass(category.score)}`} // Using score color for border
                  >
                    <div className="flex items-center gap-3 mb-3">
                       {/* Dynamic Icon based on category could be added here */}
                       <FaChartLine className={`w-6 h-6 flex-shrink-0 ${getScoreColorClass(category.score).split(' ')[0]}`} /> {/* Use first class for text color */}
                      <h3 className="text-lg sm:text-xl font-semibold capitalize text-slate-800 dark:text-white">{category.category}</h3>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">{category.feedback}</p>
                    <div className="space-y-2.5">
                      <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400">Suggestions:</h4>
                      {category.recommendations.map((rec: string, i: number) => (
                        <div key={i} className="flex items-start gap-2.5">
                          <FaLightbulb className="w-4 h-4 text-indigo-500 dark:text-indigo-400 mt-1 flex-shrink-0 opacity-80" />
                          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">{rec}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* General Recommendations Card */}
              {quizResults.generalRecommendations && quizResults.generalRecommendations.length > 0 && (
                <div className="bg-white dark:bg-slate-800/70 backdrop-blur-lg p-6 sm:p-8 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center gap-3 mb-4">
                    <FaBalanceScale className="w-6 h-6 text-green-500 dark:text-green-400 flex-shrink-0" />
                    <h3 className="text-xl sm:text-2xl font-semibold text-slate-800 dark:text-white">General Steps for Wellbeing</h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                    {quizResults.generalRecommendations.map((rec: string, index: number) => (
                      <div key={index} className="flex items-center gap-2.5 py-1">
                        <FaCheckCircle className="w-4 h-4 text-green-500 dark:text-green-400 flex-shrink-0" />
                        <p className="text-sm text-slate-700 dark:text-slate-300">{rec}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Retake & Explore Button */}
              <div className="text-center pt-4">
                <motion.button
                  onClick={resetQuiz}
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 flex items-center justify-center mx-auto"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaRedoAlt className="mr-2" />
                  Take Assessment Again
                </motion.button>
              </div>
            </motion.div>
            )
          )}
        </AnimatePresence>

        {/* Info Cards - Moved to bottom and styled differently */}
        {!showResults && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-12 grid sm:grid-cols-2 gap-6"
          >
            <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-lg">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-full">
                  <FaLightbulb className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
                  Why This Check-in?
                </h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Gain clarity on your digital habits and their impact. This quick assessment provides a starting point for enhancing your mental wellbeing in the digital age.
              </p>
            </div>

            <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-lg">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-green-100 dark:bg-green-900/50 rounded-full">
                    <FaCheckCircle className="w-5 h-5 text-green-500 dark:text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
                  What You'll Get
                </h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Receive personalized feedback across different areas, identify potential concerns, and get actionable tips for a more balanced digital life.
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Quiz;