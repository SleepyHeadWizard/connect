import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { quizQuestions, getQuizResults } from '../data/quizData';
import { FaChartLine, FaLightbulb, FaCheckCircle, FaChevronRight, FaArrowLeft } from 'react-icons/fa';

interface Answer {
  questionId: number;
  value: number;
}

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [quizResults, setQuizResults] = useState<any>(null);

  const handleAnswer = (value: number) => {
    const newAnswers = { ...answers, [quizQuestions[currentQuestion].id]: value };
    setAnswers(newAnswers);

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const results = getQuizResults(newAnswers);
      setQuizResults(results);
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setQuizResults(null);
  };

  const getScoreColor = (percentage: number) => {
    if (percentage < 30) return 'text-green-500';
    if (percentage < 60) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 text-slate-900 dark:text-white overflow-x-hidden pb-24">
      <div className="w-full px-3 sm:px-6 py-4 sm:py-8 space-y-6 sm:space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 px-2">
            Social Media Wellness Assessment
          </h1>
          <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-300 mb-4 max-w-3xl mx-auto px-2">
            Evaluate your relationship with social media and receive personalized insights
          </p>
        </motion.div>

        {/* Quiz Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          {!showResults ? (
            <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700">
              {/* Progress bar */}
              <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full mb-8">
                <motion.div
                  className="h-full bg-indigo-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Question */}
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="mb-4">
                  <span className="text-sm text-indigo-500 dark:text-indigo-400 font-medium">
                    Question {currentQuestion + 1} of {quizQuestions.length}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-semibold text-slate-800 dark:text-white">
                  {quizQuestions[currentQuestion].question}
                </h2>

                {/* Options */}
                <div className="grid gap-4">
                  {quizQuestions[currentQuestion].options.map((option, index) => (
                    <motion.button
                      key={index}
                      onClick={() => handleAnswer(option.value)}
                      className="w-full p-4 text-left rounded-lg bg-white/50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 hover:border-indigo-500 dark:hover:border-indigo-400 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {option.label}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6"
            >
              {/* Welcome Message */}
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-indigo-100 dark:border-indigo-800">
                <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
                  Your Personalized Insights
                </h2>
                <p className="text-slate-600 dark:text-slate-300">
                  Based on your responses, here are your personalized insights and recommendations for improving your digital wellbeing.
                </p>
              </div>

              {/* Category Results Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {quizResults.categoryResults.map((category: any, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center">
                          <FaChartLine className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-lg font-semibold mb-2 capitalize text-indigo-600 dark:text-indigo-400">{category.category}</h3>
                        <p className="text-slate-600 dark:text-slate-300 mb-4">{category.feedback}</p>
                        <div className="space-y-3">
                          {category.recommendations.map((rec: string, i: number) => (
                            <div key={i} className="flex items-start gap-3 bg-white/50 dark:bg-slate-800/50 p-3 rounded-lg">
                              <FaLightbulb className="w-5 h-5 text-indigo-500 dark:text-indigo-400 mt-0.5 flex-shrink-0" />
                              <p className="text-sm text-slate-600 dark:text-slate-300">{rec}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* General Recommendations Card */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-green-100 dark:border-green-800">
                <h3 className="text-lg font-semibold mb-4 text-green-600 dark:text-green-400">Recommended Next Steps</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {quizResults.generalRecommendations.map((rec: string, index: number) => (
                    <div key={index} className="flex items-start gap-3 bg-white/50 dark:bg-slate-800/50 p-3 rounded-lg">
                      <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-slate-600 dark:text-slate-300">{rec}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Retake Button */}
              <div className="text-center">
                <motion.button
                  onClick={resetQuiz}
                  className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Take Assessment Again
                </motion.button>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Info Cards */}
        {!showResults && (
          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-4 rounded-lg border border-slate-200 dark:border-slate-700"
            >
              <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
                Why Take This Assessment?
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Understand your social media habits and their potential impact on your mental well-being. Get personalized insights and recommendations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-4 rounded-lg border border-slate-200 dark:border-slate-700"
            >
              <h3 className="text-lg font-semibold text-green-600 dark:text-green-400 mb-2">
                What You'll Learn
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Discover patterns in your social media usage, identify potential areas of concern, and receive tips for maintaining a healthy digital lifestyle.
              </p>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz; 