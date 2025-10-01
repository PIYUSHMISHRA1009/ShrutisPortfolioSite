import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ScrollProgressIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollTop / docHeight;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    updateScrollProgress(); // Initial call

    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <>
      {/* Top Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-50 origin-left"
        style={{ scaleX: scrollProgress }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrollProgress }}
        transition={{ duration: 0.1 }}
      />
      
      {/* Circular Progress Indicator */}
      <div className="fixed bottom-8 right-8 z-50">
        <div className="relative w-12 h-12">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
            {/* Background circle */}
            <path
              className="text-gray-300 dark:text-gray-700"
              stroke="currentColor"
              strokeWidth="3"
              fill="transparent"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            {/* Progress circle */}
            <motion.path
              className="text-blue-500"
              stroke="currentColor"
              strokeWidth="3"
              fill="transparent"
              strokeLinecap="round"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              style={{
                strokeDasharray: '100, 100',
                strokeDashoffset: `${100 - (scrollProgress * 100)}`
              }}
              animate={{
                strokeDashoffset: `${100 - (scrollProgress * 100)}`
              }}
              transition={{ duration: 0.1 }}
            />
          </svg>
          
          {/* Percentage text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">
              {Math.round(scrollProgress * 100)}%
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScrollProgressIndicator;