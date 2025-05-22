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
import { FiAlertTriangle, FiCheckCircle, FiInfo, FiMessageSquare, FiTrendingUp } from 'react-icons/fi'; // Example icons

// Data from the research (Placeholder - REPLACE WITH YOUR ACTUAL DATA)
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

const demographicImpactData = [
  { ageGroup: '18-24', anxietyLevel: 70, depressionLevel: 60 },
  { ageGroup: '25-34', anxietyLevel: 60, depressionLevel: 50 },
  { ageGroup: '35-44', anxietyLevel: 50, depressionLevel: 40 },
];

const specificMentalHealthData = [
  { outcome: 'Anxiety', correlation: 0.7 },
  { outcome: 'Depression', correlation: 0.6 },
  { outcome: 'Loneliness', correlation: 0.5 },
  { outcome: 'Body Image Issues', correlation: 0.8 },
];

const timeSpentMentalHealthData = [
  { time: '<1 Hour', impact: 20},
  { time: '1-3 Hour', impact: 40},
  { time: '3-5 Hour', impact: 60},
  { time: '>5 Hour', impact: 80}
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
            A data-driven research study examining the relationship between social media usage patterns and mental well-being.
            <br />
            <span className="text-sm text-slate-500 dark:text-slate-400">Research conducted at Lovely Professional University, Phagwara, Punjab.</span>
          </p>
        </motion.div>

        {/* Research Overview (Hypothesis Cards & Platform Distribution) - KEEP AS IS */}
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
                  Analyzing the relationship between social media use and its effects on studies, finances, and relationships.
                </p>
              </div>
              <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-4 rounded-lg border border-green-200 dark:border-green-500/20 hover:border-green-500 dark:hover:border-green-500 transition-colors shadow-lg">
                <h3 className="text-lg font-semibold text-green-600 dark:text-green-400 mb-2">Usage Patterns</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Examining purposeless browsing and its impact on productivity and mental health.
                </p>
              </div>
              <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-4 rounded-lg border border-amber-200 dark:border-amber-500/20 hover:border-amber-500 dark:hover:border-amber-500 transition-colors shadow-lg">
                <h3 className="text-lg font-semibold text-amber-600 dark:text-amber-400 mb-2">Demographics</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Understanding how social media affects different age groups and demographics.
                </p>
              </div>
              <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-4 rounded-lg border border-pink-200 dark:border-pink-500/20 hover:border-pink-500 dark:hover:border-pink-500 transition-colors shadow-lg">
                <h3 className="text-lg font-semibold text-pink-600 dark:text-pink-400 mb-2">Mental Health</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Measuring the psychological impact of social media usage patterns.
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


        {/* Key Quantitative Findings with Visualizations - KEEP AS IS */}
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
           {/* Demographic Impact */}
           <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-3 sm:p-6 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700">
             <h3 className="text-xl font-semibold mb-2 sm:mb-4 px-2">Demographic Impact</h3>
             <div className="h-[300px]">
               <ResponsiveContainer width="100%" height="100%">
                 <BarChart data={demographicImpactData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                   <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                   <XAxis dataKey="ageGroup" stroke="#64748b" tick={{ fill: '#64748b', fontSize: 12 }} tickMargin={8} />
                   <YAxis stroke="#64748b" tick={{ fill: '#64748b', fontSize: 12 }} tickMargin={8} />
                   <Tooltip
                     contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', border: '1px solid #e2e8f0', borderRadius: '0.5rem', color: '#1e293b', fontSize: '12px'}}
                   />
                   <Legend formatter={(value) => (<span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">{value}</span>)} />
                   <Bar dataKey="anxietyLevel" fill="#f59e0b" name="Anxiety Level" radius={[4, 4, 0, 0]} />
                   <Bar dataKey="depressionLevel" fill="#ec4899" name="Depression Level" radius={[4, 4, 0, 0]} />
                 </BarChart>
               </ResponsiveContainer>
             </div>
             <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 sm:mt-4 px-2">
               Average anxiety and depression levels reported by different age groups.
             </p>
           </div>
            {/* Specific Mental Health Outcomes */}
           <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-3 sm:p-6 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700">
             <h3 className="text-xl font-semibold mb-2 sm:mb-4 px-2">Mental Health Correlations</h3>
             <div className="h-[300px]">
               <ResponsiveContainer width="100%" height="100%">
                 <BarChart data={specificMentalHealthData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                   <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                   <XAxis dataKey="outcome" stroke="#64748b" tick={{ fill: '#64748b', fontSize: 12 }} tickMargin={8} />
                   <YAxis stroke="#64748b" tick={{ fill: '#64748b', fontSize: 12 }} tickMargin={8} domain={[0, 1]} tickFormatter={(value) => value.toFixed(1)}/>
                   <Tooltip
                     contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', border: '1px solid #e2e8f0', borderRadius: '0.5rem', color: '#1e293b', fontSize: '12px'}}
                   />
                   <Bar dataKey="correlation" fill="#8b5cf6" name="Correlation Strength" radius={[4, 4, 0, 0]} />
                 </BarChart>
               </ResponsiveContainer>
             </div>
             <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 sm:mt-4 px-2">
               Strength of correlation between social media use and specific mental health outcomes.
             </p>
           </div>
           {/* Time Spent vs Impact */}
           <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-3 sm:p-6 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 md:col-span-2"> {/* Spanning two columns for better display if needed */}
             <h3 className="text-xl font-semibold mb-2 sm:mb-4 px-2">Time Spent vs. Mental Health Impact</h3>
             <div className="h-[300px]">
               <ResponsiveContainer width="100%" height="100%">
                 <BarChart data={timeSpentMentalHealthData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                   <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                   <XAxis dataKey="time" name="Daily Time Spent" stroke="#64748b" tick={{ fill: '#64748b', fontSize: 12 }} tickMargin={8} />
                   <YAxis stroke="#64748b" tick={{ fill: '#64748b', fontSize: 12 }} tickMargin={8} label={{ value: 'Reported Negative Impact (%)', angle: -90, position: 'insideLeft', fill: '#64748b', fontSize: 12 }} />
                   <Tooltip
                     contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', border: '1px solid #e2e8f0', borderRadius: '0.5rem', color: '#1e293b', fontSize: '12px'}}
                   />
                   <Bar dataKey="impact" fill="#10b981" name="Negative Impact %" radius={[4, 4, 0, 0]} />
                 </BarChart>
               </ResponsiveContainer>
             </div>
             <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 sm:mt-4 px-2">
               Percentage of users reporting negative mental health impact based on daily social media usage.
             </p>
           </div>
        </motion.div>

        {/* NEW SECTION: Key Qualitative Insights (Fuzzy Findings) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-4 sm:p-6 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700"
        >
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <FiMessageSquare className="mr-3 text-purple-500" size={28} /> Key Qualitative Insights
          </h2>
          <div className="space-y-3 text-slate-700 dark:text-slate-300 text-sm sm:text-base">
            {/* REPLACE WITH YOUR ACTUAL FUZZY FINDINGS */}
            <p>Beyond the quantitative data, our research uncovered several nuanced themes:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>
                <strong>The Comparison Trap:</strong> Many participants expressed distress arising from comparing their lives to curated online personas, particularly on image-centric platforms like Instagram. This often led to feelings of inadequacy and lower self-esteem.
              </li>
              <li>
                <strong>Fear of Missing Out (FOMO):</strong> A significant number reported experiencing FOMO, feeling anxious that others were having more rewarding experiences, which was exacerbated by constant exposure to social updates.
              </li>
              <li>
                <strong>Passive vs. Active Use:</strong> Participants who engaged more passively (e.g., endless scrolling) reported higher levels of negative mood compared to those who used social media for active communication or creative expression.
              </li>
              <li>
                <strong>Echo Chambers & Polarization:</strong> Some qualitative feedback indicated concerns about algorithmic filtering leading to echo chambers, potentially reinforcing negative thought patterns or limiting exposure to diverse perspectives.
              </li>
              <li>
                <strong>Impact of Notifications:</strong> Constant notifications were frequently cited as a source of distraction and anxiety, disrupting focus and contributing to a feeling of being "always on."
              </li>
            </ul>
            <p className="mt-3 italic text-slate-600 dark:text-slate-400">
              These insights highlight the complex and often subtle ways social media interacts with individual psychology.
            </p>
          </div>
        </motion.div>

        {/* NEW SECTION: Overall Conclusions & Implications (From Report) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-4 sm:p-6 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700"
        >
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <FiTrendingUp className="mr-3 text-green-500" size={28} /> Overall Conclusions & Implications
          </h2>
          <div className="space-y-3 text-slate-700 dark:text-slate-300 text-sm sm:text-base">
            {/* REPLACE WITH YOUR ACTUAL REPORT CONCLUSIONS */}
            <p>
              This study confirms a notable correlation between high levels of social media engagement, particularly purposeless browsing and passive consumption, and increased reports of negative mental health symptoms such as anxiety, depression, and diminished self-esteem among the surveyed LPU student population.
            </p>
            <h4 className="font-semibold mt-3 text-lg">Key Takeaways:</h4>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>
                <FiCheckCircle className="inline mr-2 text-green-500" />
                Increased social media usage time, especially beyond 3 hours daily, shows a stronger association with negative mental health indicators.
              </li>
              <li>
                <FiCheckCircle className="inline mr-2 text-green-500" />
                The nature of interaction (passive scrolling vs. active engagement) plays a crucial role in the experienced mental health impact.
              </li>
              <li>
                <FiAlertTriangle className="inline mr-2 text-amber-500" />
                Younger demographics (18-24) within the sample reported higher susceptibility to social comparison and FOMO.
              </li>
            </ul>
            <h4 className="font-semibold mt-3 text-lg">Implications & Recommendations:</h4>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>
                <FiInfo className="inline mr-2 text-blue-500" />
                Educational initiatives promoting digital literacy and mindful social media use are recommended for students.
              </li>
              <li>
                <FiInfo className="inline mr-2 text-blue-500" />
                Further longitudinal research could explore causal relationships and the long-term effects of these usage patterns.
              </li>
              <li>
                <FiInfo className="inline mr-2 text-blue-500" />
                Platform developers should consider features that encourage healthier engagement patterns and mitigate risks of social comparison.
              </li>
            </ul>
            {/* You could add a link to your full report if it's publicly available */}
            {/* <p className="mt-4">
              <Link to="/full-report.pdf" target="_blank" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                Read the Full Research Report (PDF)
              </Link>
            </p> */}
          </div>
        </motion.div>


        {/* Call to Action - KEEP AS IS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }} // Adjusted delay
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

        {/* Footer Note - KEEP AS IS */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }} // Adjusted delay
          className="text-center text-xs sm:text-sm text-slate-600 dark:text-slate-400 px-2"
        >
          This research is ongoing. Data is continuously updated as more participants contribute.
        </motion.p>
      </div>
    </div>
  );
};

export default Research;