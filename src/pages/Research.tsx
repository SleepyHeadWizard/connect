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
  LabelList, // Import LabelList
  Label, // Import Label for axis labels
} from 'recharts';
import { FiAlertTriangle, FiCheckCircle, FiInfo, FiMessageSquare, FiTrendingUp } from 'react-icons/fi';

// Data from the research (Placeholder - REPLACE WITH YOUR ACTUAL DATA)
const platformUsageData = [
  { name: 'Instagram', value: 45 },
  { name: 'Youtube', value: 25 },
  { name: 'Whatsapp', value: 20 },
  { name: 'Facebook', value: 10 },
];

const impactData = [
  { category: 'Significant Impact', value: 60, fill: '#ef4444' }, // Example: Red for significant
  { category: 'Some Impact', value: 25, fill: '#f59e0b' },      // Example: Amber for some
  { category: 'No Impact', value: 15, fill: '#22c55e' },       // Example: Green for no
];

const usagePatternData = [
  { pattern: 'Often', value: 40, fill: '#ef4444' },
  { pattern: 'Sometimes', value: 35, fill: '#f59e0b' },
  { pattern: 'Rarely', value: 15, fill: '#22c55e' },
  { pattern: 'Never', value: 10, fill: '#10b981' },
];

const demographicImpactData = [
  { ageGroup: '18-24', anxietyLevel: 70, depressionLevel: 60 },
  { ageGroup: '25-34', anxietyLevel: 60, depressionLevel: 50 },
  { ageGroup: '35-44', anxietyLevel: 50, depressionLevel: 40 },
  // Add more data if available
];

const specificMentalHealthData = [
  { outcome: 'Anxiety', correlation: 0.7, fill: '#ef4444' },
  { outcome: 'Depression', correlation: 0.6, fill: '#ec4899' },
  { outcome: 'Loneliness', correlation: 0.5, fill: '#f59e0b' },
  { outcome: 'Body Image Issues', correlation: 0.8, fill: '#dc2626' }, // Darker red for higher impact
];

const timeSpentMentalHealthData = [
  { time: '<1 Hr', impact: 20, fill: '#22c55e' }, // Less impact, greener
  { time: '1-3 Hrs', impact: 40, fill: '#a3e635' },
  { time: '3-5 Hrs', impact: 60, fill: '#facc15' }, // More impact, yellower/orange
  { time: '>5 Hrs', impact: 80, fill: '#ef4444' },   // High impact, redder
];

const COLORS = ['#6366f1', '#22c55e', '#f59e0b', '#ec4899', '#8b5cf6', '#10b981']; // Added more colors

// Custom Tooltip Component for better styling
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-slate-800 p-3 rounded-lg shadow-xl border border-slate-200 dark:border-slate-700">
        <p className="label text-sm font-semibold text-slate-700 dark:text-slate-300">{`${label}`}</p>
        {payload.map((entry: any, index: number) => (
          <p key={`item-${index}`} style={{ color: entry.color || entry.payload.fill }} className="text-xs">
            {`${entry.name || entry.dataKey} : ${entry.value}${entry.unit || ''}`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};


const Research = () => {
  const tickColor = "fill-slate-500 dark:fill-slate-400";
  const axisLabelColor = "fill-slate-600 dark:fill-slate-300";
  const gridStrokeColor = "stroke-slate-200 dark:stroke-slate-700";

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 text-slate-900 dark:text-white overflow-x-hidden pb-24">
      <div className="w-full px-3 sm:px-6 py-4 sm:py-8 space-y-8 sm:space-y-12">
        {/* Header - (Keep as is) */}
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

        {/* Research Overview (Hypothesis Cards & Platform Distribution) - (Keep as is) */}
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
           {/* Hypothesis Cards (Keep as is) */}
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
          {/* Platform Distribution Pie Chart (Keep as is) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-3 sm:p-6 rounded-lg shadow-xl border border-slate-200 dark:border-slate-700"
          >
            <h3 className="text-lg font-semibold mb-2 sm:mb-4 px-2 text-slate-700 dark:text-slate-200">Most Used Platforms</h3>
            <div className="h-[250px] sm:h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={platformUsageData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius="80%"
                    innerRadius="50%" // Donut chart style
                    fill="#8884d8"
                    dataKey="value"
                    paddingAngle={2}
                  >
                    {platformUsageData.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                  <Legend
                    iconType="circle"
                    iconSize={10}
                    wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }}
                    formatter={(value, entry) => (
                      <span style={{ color: entry.color }} className="dark:text-slate-300">{value}</span>
                    )}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>


        {/* Key Quantitative Findings with Visualizations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid md:grid-cols-2 gap-6 sm:gap-8" // Increased gap
        >
          {/* Impact on Life Areas */}
          <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-md p-4 sm:p-6 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-semibold mb-3 sm:mb-4 px-1 text-slate-700 dark:text-slate-200">Impact on Life Areas</h3>
            <div className="h-[280px] sm:h-[320px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={impactData} margin={{ top: 5, right: 5, left: 0, bottom: 30 }}> {/* Adjusted margins */}
                  <CartesianGrid strokeDasharray="3 3" className={gridStrokeColor} />
                  <XAxis
                    dataKey="category"
                    tick={{ fontSize: 11, className: tickColor }}
                    angle={-15} // Slightly angle labels
                    textAnchor="end"
                    height={50} // Increased height for angled labels
                    interval={0} // Show all labels
                  />
                  <YAxis tick={{ fontSize: 11, className: tickColor }} >
                     <Label value="Percentage (%)" angle={-90} position="insideLeft" style={{ textAnchor: 'middle', fontSize: '12px', fill: 'currentColor' }} className={axisLabelColor} />
                  </YAxis>
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(200,200,200,0.1)' }} />
                  <Bar dataKey="value" radius={[6, 6, 0, 0]} barSize={35}>
                    {impactData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill || COLORS[index % COLORS.length]} />
                    ))}
                    <LabelList dataKey="value" position="top" style={{ fontSize: '10px' }} className={tickColor} formatter={(value: number) => `${value}%`} />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-3 sm:mt-4 px-1 text-center">
              Users reporting impact on studies, finances, or relationships.
            </p>
          </div>

          {/* Purposeless Browsing Frequency */}
          <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-md p-4 sm:p-6 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-semibold mb-3 sm:mb-4 px-1 text-slate-700 dark:text-slate-200">Purposeless Browsing</h3>
            <div className="h-[280px] sm:h-[320px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={usagePatternData} margin={{ top: 5, right: 5, left: 0, bottom: 30 }}>
                  <CartesianGrid strokeDasharray="3 3" className={gridStrokeColor} />
                  <XAxis
                    dataKey="pattern"
                    tick={{ fontSize: 11, className: tickColor }}
                    angle={-15}
                    textAnchor="end"
                    height={50}
                    interval={0}
                  />
                  <YAxis tick={{ fontSize: 11, className: tickColor }} >
                    <Label value="Respondents (%)" angle={-90} position="insideLeft" style={{ textAnchor: 'middle', fontSize: '12px', fill: 'currentColor' }} className={axisLabelColor} />
                  </YAxis>
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(200,200,200,0.1)' }} />
                  <Bar dataKey="value" radius={[6, 6, 0, 0]} barSize={35}>
                     {usagePatternData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill || COLORS[index % COLORS.length]} />
                    ))}
                    <LabelList dataKey="value" position="top" style={{ fontSize: '10px' }} className={tickColor} formatter={(value: number) => `${value}%`} />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-3 sm:mt-4 px-1 text-center">
              Frequency of browsing social media without specific purpose.
            </p>
          </div>

           {/* Demographic Impact */}
           <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-md p-4 sm:p-6 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700">
             <h3 className="text-xl font-semibold mb-3 sm:mb-4 px-1 text-slate-700 dark:text-slate-200">Demographic Impact</h3>
             <div className="h-[300px] sm:h-[350px]"> {/* Increased height for legend */}
               <ResponsiveContainer width="100%" height="100%">
                 <BarChart data={demographicImpactData} margin={{ top: 5, right: 5, left: 0, bottom: 30 }}>
                   <CartesianGrid strokeDasharray="3 3" className={gridStrokeColor} />
                   <XAxis dataKey="ageGroup" tick={{ fontSize: 11, className: tickColor }} interval={0} />
                   <YAxis yAxisId="left" tick={{ fontSize: 11, className: tickColor }} >
                       <Label  value="Anxiety Level (Avg)" angle={-90} position="insideLeft" style={{ textAnchor: 'middle', fontSize: '12px', fill: 'currentColor' }} className={axisLabelColor} />
                   </YAxis>
                   <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 11, className: tickColor }} >
                       <Label value="Depression Level (Avg)" angle={-90} position="insideRight" style={{ textAnchor: 'middle', fontSize: '12px', fill: 'currentColor' }} className={axisLabelColor} />
                   </YAxis>
                   <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(200,200,200,0.1)' }} />
                   <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} formatter={(value) => (<span className="dark:text-slate-300">{value}</span>)}/>
                   <Bar yAxisId="left" dataKey="anxietyLevel" fill={COLORS[2]} name="Anxiety Level" radius={[6, 6, 0, 0]} barSize={25}>
                     <LabelList dataKey="anxietyLevel" position="top" style={{ fontSize: '10px' }} className={tickColor} />
                   </Bar>
                   <Bar yAxisId="right" dataKey="depressionLevel" fill={COLORS[3]} name="Depression Level" radius={[6, 6, 0, 0]} barSize={25}>
                     <LabelList dataKey="depressionLevel" position="top" style={{ fontSize: '10px' }} className={tickColor} />
                   </Bar>
                 </BarChart>
               </ResponsiveContainer>
             </div>
             <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-3 sm:mt-4 px-1 text-center">
               Average reported anxiety and depression levels by age group.
             </p>
           </div>

            {/* Mental Health Correlations */}
           <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-md p-4 sm:p-6 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700">
             <h3 className="text-xl font-semibold mb-3 sm:mb-4 px-1 text-slate-700 dark:text-slate-200">Mental Health Correlations</h3>
             <div className="h-[300px] sm:h-[350px]">
               <ResponsiveContainer width="100%" height="100%">
                 <BarChart data={specificMentalHealthData} margin={{ top: 5, right: 5, left: 0, bottom: 30 }}>
                   <CartesianGrid strokeDasharray="3 3" className={gridStrokeColor} />
                   <XAxis dataKey="outcome" tick={{ fontSize: 11, className: tickColor }} angle={-15} textAnchor="end" height={50} interval={0} />
                   <YAxis domain={[0, 1]} tickFormatter={(value) => value.toFixed(1)} tick={{ fontSize: 11, className: tickColor }} >
                       <Label value="Correlation Strength" angle={-90} position="insideLeft" style={{ textAnchor: 'middle', fontSize: '12px', fill: 'currentColor' }} className={axisLabelColor} />
                   </YAxis>
                   <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(200,200,200,0.1)' }} />
                   <Bar dataKey="correlation" name="Correlation Strength" radius={[6, 6, 0, 0]} barSize={35}>
                    {specificMentalHealthData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill || COLORS[index % COLORS.length]} />
                    ))}
                    <LabelList dataKey="correlation" position="top" style={{ fontSize: '10px' }} className={tickColor} formatter={(value: number) => value.toFixed(2)} />
                   </Bar>
                 </BarChart>
               </ResponsiveContainer>
             </div>
             <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-3 sm:mt-4 px-1 text-center">
               Strength of correlation (0 to 1) between social media use and specific mental health outcomes.
             </p>
           </div>

           {/* Time Spent vs. Mental Health Impact */}
           <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-md p-4 sm:p-6 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 md:col-span-2">
             <h3 className="text-xl font-semibold mb-3 sm:mb-4 px-1 text-slate-700 dark:text-slate-200">Time Spent vs. Reported Negative Impact</h3>
             <div className="h-[300px] sm:h-[350px]">
               <ResponsiveContainer width="100%" height="100%">
                 <BarChart data={timeSpentMentalHealthData} margin={{ top: 5, right: 5, left: 0, bottom: 30 }}>
                   <CartesianGrid strokeDasharray="3 3" className={gridStrokeColor} />
                   <XAxis dataKey="time" name="Daily Time Spent" tick={{ fontSize: 11, className: tickColor }} interval={0}/>
                   <YAxis tick={{ fontSize: 11, className: tickColor }} >
                       <Label value="Reported Negative Impact (%)" angle={-90} position="insideLeft" style={{ textAnchor: 'middle', fontSize: '12px', fill: 'currentColor' }} className={axisLabelColor} />
                   </YAxis>
                   <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(200,200,200,0.1)' }} />
                   <Bar dataKey="impact" name="Negative Impact %" radius={[6, 6, 0, 0]} barSize={40}>
                     {timeSpentMentalHealthData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill || COLORS[index % COLORS.length]} />
                     ))}
                    <LabelList dataKey="impact" position="top" style={{ fontSize: '10px' }} className={tickColor} formatter={(value: number) => `${value}%`} />
                   </Bar>
                 </BarChart>
               </ResponsiveContainer>
             </div>
             <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-3 sm:mt-4 px-1 text-center">
               Percentage of users reporting negative mental health impact based on daily social media usage.
             </p>
           </div>
        </motion.div>

        {/* Qualitative Insights & Conclusions - (Keep as is) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-md p-4 sm:p-6 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700"
        >
          <h2 className="text-2xl font-semibold mb-4 flex items-center text-slate-700 dark:text-slate-200">
            <FiMessageSquare className="mr-3 text-purple-500" size={28} /> Key Qualitative Insights
          </h2>
          <div className="space-y-3 text-slate-700 dark:text-slate-300 text-sm sm:text-base">
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-md p-4 sm:p-6 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700"
        >
          <h2 className="text-2xl font-semibold mb-4 flex items-center text-slate-700 dark:text-slate-200">
            <FiTrendingUp className="mr-3 text-green-500" size={28} /> Overall Conclusions & Implications
          </h2>
          <div className="space-y-3 text-slate-700 dark:text-slate-300 text-sm sm:text-base">
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
          </div>
        </motion.div>

        {/* Call to Action - (Keep as is) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
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

        {/* Footer Note - (Keep as is) */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center text-xs sm:text-sm text-slate-600 dark:text-slate-400 px-2"
        >
          This research is ongoing. Data is continuously updated as more participants contribute.
        </motion.p>
      </div>
    </div>
  );
};
export default Research;