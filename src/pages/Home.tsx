import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaChartBar, FaComments, FaBookOpen, FaLightbulb, FaUsers, FaUniversity, FaProjectDiagram, FaUserTie } from 'react-icons/fa'; // Added more icons

// == YOU NEED TO FILL THESE IN FROM YOUR REPORT ===
const YOUR_NAME = "Om Jaiswal, Anubhav Singh, Shiwaditya Chandra Mukesh, Ashish Kumar Singh & Harsh Rawat";
const SUPERVISOR_NAME = "Ms, Ranjit Kaur";
const SUPERVISOR_DESIGNATION = "Assistant Professor, School of Computer Application";
const PROGRAMME_NAME = "Bachelor of Computer Application"; 
const RESEARCH_TITLE = "Al-Driven Predictive Analysis of Social Media's Impact on Youth Mental Health with Chatbot Integration";
// =================================================

const Home = () => {
  const cardHover = { scale: 1.03, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" };
  const cardTap = { scale: 0.97 };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 text-slate-900 dark:text-white overflow-x-hidden pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Hero Section - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5 sm:mb-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight"
          >
            {RESEARCH_TITLE}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-md sm:text-lg md:text-xl mb-8 sm:mb-10 text-slate-600 dark:text-slate-300 max-w-3xl mx-auto"
          >
            An initiative by students of Lovely Professional University to explore the intricate relationship between social media usage and mental wellbeing, offering data-driven insights and personalized support.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/quiz" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0px 8px 15px rgba(99, 102, 241, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-indigo-600 text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg text-base sm:text-lg font-semibold hover:bg-indigo-700 transition-colors shadow-xl w-full"
              >
                Take Self-Assessment
              </motion.button>
            </Link>
            <Link to="/research" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0px 8px 15px rgba(0,0,0,0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-indigo-600 px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg text-base sm:text-lg font-semibold hover:bg-indigo-50 transition-colors shadow-lg border border-indigo-300 dark:border-indigo-700 dark:bg-slate-800 dark:text-indigo-300 dark:hover:bg-slate-700 w-full"
              >
                Explore Our Findings
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* About Our Research Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-16 sm:mb-20 px-2 sm:px-0"
        >
          <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-md p-6 sm:p-8 rounded-xl border border-slate-200 dark:border-slate-700 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-800 dark:text-white flex items-center">
              <FaProjectDiagram className="mr-3 text-purple-500" /> About Our Research
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              In an age dominated by digital interaction, understanding the nuances of social media's impact on mental health is more critical than ever. This project, undertaken as part of the {PROGRAMME_NAME} at Lovely Professional University, delves into this complex issue.
              Our primary goal is to investigate usage patterns, identify potential risk factors, and explore protective measures related to social media and psychological wellbeing. Through quantitative surveys and qualitative analysis, we aim to provide a clearer picture of this relationship and offer actionable insights.
            </p>
            <Link to="/research" className="mt-6 inline-block text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">
              Dive deeper into our methodology and findings →
            </Link>
          </div>
        </motion.section>


        {/* Features Grid - Enhanced Descriptions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }} // Staggered animation
          className="grid md:grid-cols-2 gap-5 sm:gap-8 mb-16 sm:mb-20 px-2 sm:px-0"
        >
          {/* Research Insights Card */}
          <Link to="/research" className="block">
            <motion.div
              whileHover={cardHover}
              whileTap={cardTap}
              className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm p-5 sm:p-8 rounded-xl border border-slate-200 dark:border-slate-700 shadow-xl group hover:border-indigo-500 transition-all cursor-pointer h-full flex flex-col"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-indigo-100 dark:bg-indigo-900/60 p-3 sm:p-4 rounded-lg group-hover:bg-indigo-500 transition-colors">
                  <FaChartBar className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600 dark:text-indigo-300 group-hover:text-white" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white">Research Insights</h2>
              </div>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 flex-grow">
                Explore our comprehensive findings, data visualizations, and qualitative analyses on how different social media usage patterns correlate with mental health indicators like anxiety, depression, and self-esteem.
              </p>
              <span className="mt-4 text-indigo-600 dark:text-indigo-400 text-sm font-medium self-start group-hover:underline">Learn more →</span>
            </motion.div>
          </Link>

          {/* AI Consultation Card */}
          <Link to="/chat" className="block">
            <motion.div
              whileHover={cardHover}
              whileTap={cardTap}
              className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm p-5 sm:p-8 rounded-xl border border-slate-200 dark:border-slate-700 shadow-xl group hover:border-green-500 transition-all cursor-pointer h-full flex flex-col"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-green-100 dark:bg-green-900/60 p-3 sm:p-4 rounded-lg group-hover:bg-green-500 transition-colors">
                  <FaComments className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 dark:text-green-300 group-hover:text-white" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white">AI Wellbeing Assistant</h2>
              </div>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 flex-grow">
                Engage with our intelligent assistant for personalized reflections on your digital habits, coping strategies for online stress, and guidance towards a healthier relationship with technology.
              </p>
              <span className="mt-4 text-green-600 dark:text-green-400 text-sm font-medium self-start group-hover:underline">Chat now →</span>
            </motion.div>
          </Link>

          {/* Resources Card */}
          <Link to="/resources" className="block">
            <motion.div
              whileHover={cardHover}
              whileTap={cardTap}
              className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm p-5 sm:p-8 rounded-xl border border-slate-200 dark:border-slate-700 shadow-xl group hover:border-amber-500 transition-all cursor-pointer h-full flex flex-col"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-amber-100 dark:bg-amber-900/60 p-3 sm:p-4 rounded-lg group-hover:bg-amber-500 transition-colors">
                  <FaBookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-amber-600 dark:text-amber-300 group-hover:text-white" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white">Curated Resources</h2>
              </div>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 flex-grow">
                Access a handpicked collection of articles, tools, books, and support organizations dedicated to promoting digital wellness and mental health in the context of social media.
              </p>
              <span className="mt-4 text-amber-600 dark:text-amber-400 text-sm font-medium self-start group-hover:underline">Find help →</span>
            </motion.div>
          </Link>

          {/* Self-Assessment & Recommendations Card */}
          <Link to="/quiz" className="block">
            <motion.div
              whileHover={cardHover}
              whileTap={cardTap}
              className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm p-5 sm:p-8 rounded-xl border border-slate-200 dark:border-slate-700 shadow-xl group hover:border-pink-500 transition-all cursor-pointer h-full flex flex-col"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-pink-100 dark:bg-pink-900/60 p-3 sm:p-4 rounded-lg group-hover:bg-pink-500 transition-colors">
                  <FaLightbulb className="w-6 h-6 sm:w-8 sm:h-8 text-pink-600 dark:text-pink-300 group-hover:text-white" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white">Personalized Assessment</h2>
              </div>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 flex-grow">
                Take our interactive quiz to assess your social media usage patterns and receive personalized feedback and actionable recommendations to improve your digital habits and overall mental wellbeing.
              </p>
              <span className="mt-4 text-pink-600 dark:text-pink-400 text-sm font-medium self-start group-hover:underline">Get started →</span>
            </motion.div>
          </Link>
        </motion.div>

        {/* Meet the Team / Acknowledgements Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mb-16 sm:mb-20 px-2 sm:px-0"
        >
          <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-md p-6 sm:p-8 rounded-xl border border-slate-200 dark:border-slate-700 shadow-2xl text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-slate-800 dark:text-white flex items-center justify-center">
              <FaUsers className="mr-3 text-green-500" /> Acknowledgements
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg">
                This research project was conducted by <strong className="text-indigo-600 dark:text-indigo-400">{YOUR_NAME}</strong>,
                 student of {PROGRAMME_NAME} at
                <strong className="block mt-1 text-lg">
                  <FaUniversity className="inline mr-2 mb-1 text-purple-500" />Lovely Professional University, Phagwara, Punjab.
                </strong>
              </p>
              <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg">
                The work was carried out under the insightful supervision and guidance of
                <strong className="block mt-1 text-lg">
                  <FaUserTie className="inline mr-2 mb-1 text-blue-500" />{SUPERVISOR_NAME}
                </strong>
                , {SUPERVISOR_DESIGNATION}.
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-sm mt-4">
                We extend our sincere gratitude to LPU for providing the platform and resources for this study, and to all participants who contributed their valuable time and insights.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Final Call to Action - Re-emphasize */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-6 sm:p-10 rounded-xl shadow-2xl mx-2 sm:mx-0"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-5 text-white">
            Ready to foster a healthier relationship with technology?
          </h2>
          <p className="text-sm sm:text-base mb-6 sm:mb-8 text-white/90 max-w-2xl mx-auto">
            Our tools and research are designed to empower you with knowledge and practical strategies for better digital wellbeing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quiz" className="w-full sm:w-auto">
              <motion.button
                 whileHover={{ scale: 1.05, y: -2, boxShadow: "0px 10px 20px rgba(255,255,255,0.2)"}}
                 whileTap={{ scale: 0.95 }}
                className="bg-white text-indigo-700 px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg text-base sm:text-lg font-semibold hover:bg-indigo-50 transition-colors shadow-xl w-full"
              >
                Start Your Journey
              </motion.button>
            </Link>
             <Link to="/chat" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05, y: -2, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)"}}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg text-base sm:text-lg font-semibold hover:bg-white/10 transition-colors w-full"
              >
                Talk to Our AI
              </motion.button>
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Home;