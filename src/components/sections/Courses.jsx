import { motion } from 'framer-motion';
import { useState } from 'react';

const Courses = () => {
  const [isHovered, setIsHovered] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="courses" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background accents */}
      <motion.div 
        className="absolute top-40 right-10 w-72 h-72 rounded-full bg-brand-orange/20 filter blur-[120px] -z-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div 
        className="absolute bottom-20 left-10 w-64 h-64 rounded-full bg-brand-orange/15 filter blur-[100px] -z-10"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.3, 0.15]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6 heading-gradient"
          >
            Elevate Your Brand
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Transform your professional presence with my specialized branding programs
          </motion.p>
        </motion.div>

        <motion.div 
          className="glass-card-hover overflow-hidden rounded-2xl border border-white/10 shadow-xl max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 70,
            damping: 20,
            delay: 0.2
          }}
          viewport={{ once: true }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{
            boxShadow: "0 25px 50px -12px rgba(255, 90, 31, 0.25)"
          }}
        >
          <div className="md:flex relative">
            {/* Left column with orange gradient */}
            <div className="md:w-1/2 bg-gradient-to-br from-brand-orange/40 to-orange-900/20 p-10 md:p-14 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-brand-orange/10 rounded-full blur-2xl -z-0"></div>
              <div className="absolute bottom-10 left-10 w-20 h-20 bg-brand-orange/20 rounded-full blur-xl -z-0"></div>
              
              <motion.div
                className="relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl md:text-4xl font-bold mb-3 text-white">45 Days Program</h3>
                <motion.p 
                  className="text-2xl mb-8 text-brand-orange pill-tag inline-block"
                  animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  October Batch
                </motion.p>
                
                <ul className="space-y-5 mb-10">
                  {[
                    { label: "Start Date", value: "5th October" },
                    { label: "Duration", value: "45 days" },
                    { label: "Fee", value: "₹7,000" },
                    { label: "Format", value: "Zoom + WhatsApp group + 1:1 mentorship" }
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + (index * 0.1) }}
                      viewport={{ once: true }}
                    >
                      <span className="text-brand-orange mr-3 orange-glow-strong">✦</span>
                      <div>
                        <span className="font-medium text-white">{item.label}:</span>{" "}
                        <span className="text-gray-200">{item.value}</span>
                      </div>
                    </motion.li>
                  ))}
                </ul>
                
                <motion.a 
                  href="https://forms.gle/v2o1PcPBGbSwVEUm8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="apple-button orange-glow-strong inline-flex items-center gap-2"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 25px rgba(255, 90, 31, 0.6)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Enroll Now</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor" stroke="white" strokeWidth="0.5">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </motion.a>
              </motion.div>
            </div>
            
            {/* Right column with course details */}
            <div className="md:w-1/2 p-10 md:p-14 relative">
              <motion.h4 
                className="text-2xl font-semibold mb-6 text-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                What You'll Learn
              </motion.h4>
              
              <ul className="space-y-4 mb-10">
                {[
                  "Strategic personal brand positioning",
                  "Content creation for LinkedIn",
                  "Building authority in your niche",
                  "Network growth strategies",
                  "Engagement techniques that convert"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + (index * 0.1) }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-brand-orange mr-3 orange-glow">→</span>
                    <span className="text-gray-200">{item}</span>
                  </motion.li>
                ))}
              </ul>
              
              <motion.div 
                className="glass-card p-6 rounded-xl border border-white/10 orange-glow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <p className="text-gray-200 italic">
                  "This program is designed for professionals who want to establish themselves as thought leaders in their industry. Limited spots available for personalized attention."
                </p>
                <div className="mt-4 flex items-center">
                  <div className="h-1 w-10 bg-brand-orange rounded-full mr-2"></div>
                  <p className="text-brand-orange font-medium">Shruti Sharma</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Courses;