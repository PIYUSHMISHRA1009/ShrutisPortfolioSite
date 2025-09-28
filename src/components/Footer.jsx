import { motion } from 'framer-motion';
import { useState } from 'react';

const Footer = () => {
  const [isHovered, setIsHovered] = useState({
    email: false,
    linkedin: false
  });

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10">
      {/* Background accent */}
      <motion.div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-32 rounded-full bg-brand-orange/10 filter blur-[80px] -z-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <p className="text-gray-400 text-sm">
              © {currentYear} Shruti Singh. All rights reserved.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.1
            }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <motion.a 
              href="mailto:singhshruti1203@gmail.com"
              className="w-9 h-9 rounded-full glass-card flex items-center justify-center orange-glow"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              onMouseEnter={() => setIsHovered(prev => ({ ...prev, email: true }))}
              onMouseLeave={() => setIsHovered(prev => ({ ...prev, email: false }))}
            >
              <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4" 
                viewBox="0 0 20 20" 
                fill="currentColor"
                animate={{ 
                  scale: isHovered.email ? 1.1 : 1,
                  color: isHovered.email ? "#FF5A1F" : "#D1D5DB"
                }}
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </motion.svg>
            </motion.a>
            
            <motion.a 
              href="https://www.linkedin.com/in/shrutipersonalbrandingstrategist/"
              target="_blank" 
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full glass-card flex items-center justify-center orange-glow"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              onMouseEnter={() => setIsHovered(prev => ({ ...prev, linkedin: true }))}
              onMouseLeave={() => setIsHovered(prev => ({ ...prev, linkedin: false }))}
            >
              <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4" 
                fill="currentColor" 
                viewBox="0 0 24 24"
                animate={{ 
                  scale: isHovered.linkedin ? 1.1 : 1,
                  color: isHovered.linkedin ? "#FF5A1F" : "#D1D5DB"
                }}
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </motion.svg>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;