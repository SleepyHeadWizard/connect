import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from 'recharts';

// Data from the research
const platformUsageData = [
  { name: 'Instagram', value: 45 },
  { name: 'Youtube', value: 25 },
  { name: 'Whatsapp', value: 20 },
  { name: 'Facebook', value: 10 },
];

const impactData = [
  { category: 'Yes', value: 60 },
  { category: 'Maybe', value: 25 },
  { category: 'No', value: 15 },
];

const usagePatternData = [
  { pattern: 'Often', value: 40 },
  { pattern: 'Sometimes', value: 35 },
  { pattern: 'Rarely', value: 15 },
  { pattern: 'Never', value: 10 },
];

const COLORS = ['#6366f1', '#22c55e', '#f59e0b', '#ec4899'];

const Research = () => {
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
            Impact of Social Media on Mental Health
          </h1>
          <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-300 mb-4 max-w-3xl mx-auto px-2">
            A data-driven research study examining the relationship between social media usage patterns and mental well-being
          </p>
        </motion.div>

        {/* Research Overview */}
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
          {/* Hypothesis Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="md:col-span-2 space-y-4"
          >
            <h2 className="text-2xl font-semibold mb-4 px-2">Research Focus Areas</h2>
            <div className="grid sm:grid-cols-2 gap-4 px-2">
              <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-4 rounded-lg border border-indigo-200 dark:border-indigo-500/20 hover:border-indigo-500 dark:hover:border-indigo-500 transition-colors shadow-lg">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-2">Social Impact</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Analyzing the relationship between social media use and its effects on studies, finances, and relationships
                </p>
              </div>
              <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-4 rounded-lg border border-green-200 dark:border-green-500/20 hover:border-green-500 dark:hover:border-green-500 transition-colors shadow-lg">
                <h3 className="text-lg font-semibold text-green-600 dark:text-green-400 mb-2">Usage Patterns</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Examining purposeless browsing and its impact on productivity and mental health
                </p>
              </div>
              <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-4 rounded-lg border border-amber-200 dark:border-amber-500/20 hover:border-amber-500 dark:hover:border-amber-500 transition-colors shadow-lg">
                <h3 className="text-lg font-semibold text-amber-600 dark:text-amber-400 mb-2">Demographics</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Understanding how social media affects different age groups and demographics
                </p>
              </div>
              <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-4 rounded-lg border border-pink-200 dark:border-pink-500/20 hover:border-pink-500 dark:hover:border-pink-500 transition-colors shadow-lg">
                <h3 className="text-lg font-semibold text-pink-600 dark:text-pink-400 mb-2">Mental Health</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Measuring the psychological impact of social media usage patterns
                </p>
              </div>
            </div>
          </motion.div>

          {/* Platform Distribution */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-3 sm:p-6 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700"
          >
            <h3 className="text-lg font-semibold mb-2 sm:mb-4 px-2">Most Used Platforms</h3>
            <div className="h-[250px] sm:h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={platformUsageData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {platformUsageData.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      border: '1px solid #e2e8f0',
                      borderRadius: '0.5rem',
                      color: '#1e293b',
                      fontSize: '12px'
                    }}
                  />
                  <Legend 
                    layout="horizontal" 
                    align="center"
                    verticalAlign="bottom"
                    iconType="circle"
                    iconSize={8}
                    formatter={(value) => (
                      <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">{value}</span>
                    )}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        {/* Key Findings with Visualizations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid md:grid-cols-2 gap-4 sm:gap-6"
        >
          {/* Impact on Life */}
          <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-3 sm:p-6 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-semibold mb-2 sm:mb-4 px-2">Impact on Life Areas</h3>
            <div className="h-[250px] sm:h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={impactData} margin={{ top: 20, right: 10, left: 0, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis 
                    dataKey="category" 
                    stroke="#64748b"
                    tick={{ fill: '#64748b', fontSize: 12 }}
                    tickMargin={8}
                  />
                  <YAxis 
                    stroke="#64748b"
                    tick={{ fill: '#64748b', fontSize: 12 }}
                    tickMargin={8}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      border: '1px solid #e2e8f0',
                      borderRadius: '0.5rem',
                      color: '#1e293b',
                      fontSize: '12px'
                    }}
                  />
                  <Bar dataKey="value" fill="#6366f1" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 sm:mt-4 px-2">
              Percentage of users reporting impact on studies, finances, or relationships
            </p>
          </div>

          {/* Usage Patterns */}
          <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-3 sm:p-6 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-semibold mb-2 sm:mb-4 px-2">Purposeless Browsing Frequency</h3>
            <div className="h-[250px] sm:h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={usagePatternData} margin={{ top: 20, right: 10, left: 0, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis 
                    dataKey="pattern" 
                    stroke="#64748b"
                    tick={{ fill: '#64748b', fontSize: 12 }}
                    tickMargin={8}
                  />
                  <YAxis 
                    stroke="#64748b"
                    tick={{ fill: '#64748b', fontSize: 12 }}
                    tickMargin={8}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      border: '1px solid #e2e8f0',
                      borderRadius: '0.5rem',
                      color: '#1e293b',
                      fontSize: '12px'
                    }}
                  />
                  <Bar dataKey="value" fill="#22c55e" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 sm:mt-4 px-2">
              How often users browse social media without specific purpose
            </p>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-r from-indigo-500 to-purple-600 p-4 sm:p-8 rounded-lg text-center shadow-xl mx-2"
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">Contribute to Our Research</h2>
          <p className="text-base sm:text-lg mb-4 sm:mb-6 text-white/90 max-w-2xl mx-auto">
            Take our comprehensive assessment to help us understand social media's impact and receive personalized insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link to="/quiz" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-white text-indigo-600 px-6 sm:px-8 py-2 sm:py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-indigo-50 transition-colors shadow-lg"
              >
                Take Assessment
              </motion.button>
            </Link>
            <Link to="/chat" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Discuss with AI
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center text-xs sm:text-sm text-slate-600 dark:text-slate-400 px-2"
        >
          This research is ongoing. Data is continuously updated as more participants contribute.
        </motion.p>
      </div>
    </div>
  );
};

export default Research; 