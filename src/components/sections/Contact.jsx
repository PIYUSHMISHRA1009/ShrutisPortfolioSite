import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isHovered, setIsHovered] = useState({
    email: false,
    linkedin: false,
    submit: false
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [id]: value
    }));
  };

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
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background accents */}
      <motion.div 
        className="absolute top-20 right-10 w-72 h-72 rounded-full bg-brand-orange/20 filter blur-[120px] -z-10"
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
            Let's Connect
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Ready to elevate your personal brand? Reach out and let's discuss how we can make you stand out.
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="glass-card-hover p-10 md:p-14 rounded-2xl border border-white/10 shadow-xl relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 70,
              damping: 20,
              delay: 0.2
            }}
            viewport={{ once: true }}
            whileHover={{
              boxShadow: "0 25px 50px -12px rgba(255, 90, 31, 0.25)"
            }}
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-brand-orange/10 rounded-full blur-2xl -z-0"></div>
            <div className="absolute bottom-10 left-10 w-20 h-20 bg-brand-orange/20 rounded-full blur-xl -z-0"></div>
            
            <div className="relative z-10">
              <motion.h3 
                className="text-2xl md:text-3xl font-bold mb-8 text-center text-white"
                variants={itemVariants}
              >
                Let's Build Your <span className="text-brand-orange">Personal Brand</span>
              </motion.h3>
              
              <div className="grid md:grid-cols-2 gap-10 md:gap-16">
                {/* Contact Information */}
                <motion.div 
                  className="space-y-8"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.div variants={itemVariants}>
                    <p className="text-gray-400 mb-2 text-sm">Email</p>
                    <motion.a 
                      href="mailto:singhshruti1203@gmail.com" 
                      className="text-white text-lg flex items-center gap-3 group"
                      onMouseEnter={() => setIsHovered(prev => ({ ...prev, email: true }))}
                      onMouseLeave={() => setIsHovered(prev => ({ ...prev, email: false }))}
                      whileHover={{ x: 5 }}
                    >
                      <span className={`inline-block transition-all duration-300 ${isHovered.email ? 'text-brand-orange' : 'text-white'}`}>
                        singhshruti1203@gmail.com
                      </span>
                      <motion.span 
                        className="text-brand-orange orange-glow-strong"
                        animate={{ 
                          x: isHovered.email ? 5 : 0,
                          opacity: isHovered.email ? 1 : 0.7
                        }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      </motion.span>
                    </motion.a>
                  </motion.div>
                  
                  <motion.div variants={itemVariants}>
                    <p className="text-gray-400 mb-2 text-sm">LinkedIn</p>
                    <motion.a 
                      href="https://www.linkedin.com/in/shrutipersonalbrandingstrategist/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white text-lg flex items-center gap-3 group"
                      onMouseEnter={() => setIsHovered(prev => ({ ...prev, linkedin: true }))}
                      onMouseLeave={() => setIsHovered(prev => ({ ...prev, linkedin: false }))}
                      whileHover={{ x: 5 }}
                    >
                      <span className={`inline-block transition-all duration-300 ${isHovered.linkedin ? 'text-brand-orange' : 'text-white'}`}>
                        Connect on LinkedIn
                      </span>
                      <motion.span 
                        className="text-brand-orange orange-glow-strong"
                        animate={{ 
                          x: isHovered.linkedin ? 5 : 0,
                          opacity: isHovered.linkedin ? 1 : 0.7
                        }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </motion.span>
                    </motion.a>
                  </motion.div>
                  
                  <motion.div 
                    variants={itemVariants}
                    className="mt-8 pt-8 border-t border-white/10"
                  >
                    <div className="flex gap-4 justify-center md:justify-start">
                      <motion.a 
                        href="mailto:singhshruti1203@gmail.com"
                        className="w-10 h-10 rounded-full glass-card flex items-center justify-center orange-glow"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-orange" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      </motion.a>
                      
                      <motion.a 
                        href="https://www.linkedin.com/in/shrutipersonalbrandingstrategist/"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full glass-card flex items-center justify-center orange-glow"
                        whileHover={{ scale: 1.2, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-orange" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </motion.a>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Contact Form */}
                <motion.form 
                  className="space-y-6"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.div variants={itemVariants}>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formState.name}
                      onChange={handleInputChange}
                      className="glass-input w-full"
                      placeholder="Your name"
                    />
                  </motion.div>
                  
                  <motion.div variants={itemVariants}>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formState.email}
                      onChange={handleInputChange}
                      className="glass-input w-full"
                      placeholder="your.email@example.com"
                    />
                  </motion.div>
                  
                  <motion.div variants={itemVariants}>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      value={formState.message}
                      onChange={handleInputChange}
                      className="glass-input w-full"
                      placeholder="How can I help with your personal branding?"
                    ></textarea>
                  </motion.div>
                  
                  <motion.button
                    type="submit"
                    className="apple-button orange-glow-strong w-full flex items-center justify-center gap-2"
                    variants={itemVariants}
                    onMouseEnter={() => setIsHovered(prev => ({ ...prev, submit: true }))}
                    onMouseLeave={() => setIsHovered(prev => ({ ...prev, submit: false }))}
                    whileHover={{ 
                      scale: 1.03,
                      boxShadow: "0 0 25px rgba(255, 90, 31, 0.6)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Let's Build Your Personal Brand</span>
                    <motion.svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-6 w-6" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                      stroke="white"
                      strokeWidth="0.5"
                      animate={{ 
                        x: isHovered.submit ? 5 : 0,
                        opacity: isHovered.submit ? 1 : 0.9
                      }}
                    >
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </motion.svg>
                  </motion.button>
                </motion.form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;