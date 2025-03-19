import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaChartBar, FaComments, FaBookOpen, FaLightbulb } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 text-slate-900 dark:text-white overflow-x-hidden pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16 max-w-[90vw] mx-auto"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent leading-tight">
            Digital Wellbeing Research
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-slate-700 dark:text-slate-300 max-w-2xl mx-auto px-4">
            Understanding the impact of social media on mental health through research and personalized insights.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-3 justify-center px-4"
          >
            <Link to="/quiz" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-indigo-600 text-white px-5 sm:px-8 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-indigo-700 transition-colors shadow-lg w-full"
              >
                Take Assessment
              </motion.button>
            </Link>
            <Link to="/research" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-indigo-600 px-5 sm:px-8 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-indigo-50 transition-colors shadow-lg border border-indigo-200 w-full"
              >
                View Research
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid md:grid-cols-2 gap-3 sm:gap-6 mb-12 sm:mb-16 px-4"
        >
          <Link to="/research" className="block">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-slate-200 dark:border-slate-700 shadow-lg group hover:border-indigo-500 transition-all cursor-pointer"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-indigo-100 dark:bg-indigo-900/50 p-2 sm:p-3 rounded-lg group-hover:bg-indigo-500 transition-colors">
                  <FaChartBar className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 dark:text-indigo-400 group-hover:text-white" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-slate-900 dark:text-white">Research Insights</h2>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
                    Explore our findings on how social media affects mental health, productivity, and relationships.
                  </p>
                </div>
              </div>
            </motion.div>
          </Link>

          <Link to="/chat" className="block">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-slate-200 dark:border-slate-700 shadow-lg group hover:border-green-500 transition-all cursor-pointer"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 dark:bg-green-900/50 p-2 sm:p-3 rounded-lg group-hover:bg-green-500 transition-colors">
                  <FaComments className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 dark:text-green-400 group-hover:text-white" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-slate-900 dark:text-white">AI Consultation</h2>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
                    Get personalized advice and insights about your social media habits through AI-powered conversations.
                  </p>
                </div>
              </div>
            </motion.div>
          </Link>

          <Link to="/resources" className="block">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-slate-200 dark:border-slate-700 shadow-lg group hover:border-amber-500 transition-all cursor-pointer"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 dark:bg-amber-900/50 p-2 sm:p-3 rounded-lg group-hover:bg-amber-500 transition-colors">
                  <FaBookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600 dark:text-amber-400 group-hover:text-white" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-slate-900 dark:text-white">Resources</h2>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
                    Access evidence-based articles and guides about digital wellbeing and mental health.
                  </p>
                </div>
              </div>
            </motion.div>
          </Link>

          <Link to="/quiz" className="block">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-slate-200 dark:border-slate-700 shadow-lg group hover:border-pink-500 transition-all cursor-pointer"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-pink-100 dark:bg-pink-900/50 p-2 sm:p-3 rounded-lg group-hover:bg-pink-500 transition-colors">
                  <FaLightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-pink-600 dark:text-pink-400 group-hover:text-white" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-slate-900 dark:text-white">Recommendations</h2>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
                    Get tailored suggestions to improve your digital habits and mental wellbeing.
                  </p>
                </div>
              </div>
            </motion.div>
          </Link>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center bg-gradient-to-r from-indigo-500 to-purple-600 p-4 sm:p-8 rounded-lg shadow-xl mx-4"
        >
          <h2 className="text-lg sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-white">
            Ready to Understand Your Digital Habits?
          </h2>
          <p className="text-sm sm:text-base mb-4 sm:mb-6 text-white/90 max-w-2xl mx-auto">
            Take our comprehensive assessment to gain insights into your social media usage and its impact on your wellbeing.
          </p>
          <Link to="/quiz" className="inline-block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-indigo-600 px-5 sm:px-8 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-indigo-50 transition-colors shadow-lg"
            >
              Start Assessment
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Home; 