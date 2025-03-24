import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaChartBar, FaComments, FaClipboardList, FaBookOpen } from 'react-icons/fa';

const Dock = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: FaHome, label: 'Home' },
    { path: '/research', icon: FaChartBar, label: 'Research' },
    { path: '/chat', icon: FaComments, label: 'Chat' },
    { path: '/quiz', icon: FaClipboardList, label: 'Quiz' },
    { path: '/resources', icon: FaBookOpen, label: 'Resources' },
  ];

  return (
    <div className="fixed inset-x-0 bottom-0 flex items-center justify-center p-4 pointer-events-none">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 p-2 pointer-events-auto"
      >
        <div className="flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center p-2 sm:p-3 rounded-xl transition-colors ${
                location.pathname === item.path
                  ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20'
                  : 'text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20'
              }`}
            >
              <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-xs mt-1 font-medium">{item.label}</span>
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Dock; 