import { motion } from 'framer-motion';
import { useState } from 'react';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  
  const skills = [
    { name: "Web Content Creation", level: 95 },
    { name: "Blog Management", level: 90 },
    { name: "Personal Branding", level: 98 },
    { name: "LinkedIn Strategy", level: 96 },
    { name: "Content Writing", level: 92 },
    { name: "Brand Storytelling", level: 94 },
    { name: "Social Media Management", level: 88 },
    { name: "SEO Optimization", level: 85 },
    { name: "Professional Networking", level: 93 }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-24 md:py-32 relative">
      {/* Background accents */}
      <div className="absolute left-1/4 top-1/4 w-64 h-64 rounded-full bg-brand-orange/10 blur-[100px] -z-10"></div>
      <div className="absolute right-1/4 bottom-1/4 w-72 h-72 rounded-full bg-apple-blue/5 blur-[80px] -z-10"></div>
      
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 heading-gradient">Skills & Expertise</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My diverse skill set allows me to create <span className="text-white font-medium">comprehensive personal branding strategies</span> tailored to your unique needs.
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center gap-4 md:gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="pill-tag relative"
              variants={itemVariants}
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
              whileHover={{ 
                scale: 1.08,
                transition: { type: "spring", stiffness: 300, damping: 10 }
              }}
              animate={{
                boxShadow: hoveredSkill === index 
                  ? '0 0 20px rgba(255, 135, 66, 0.6), 0 0 30px rgba(255, 135, 66, 0.3), inset 0 0 8px rgba(255, 135, 66, 0.3)' 
                  : '0 0 10px rgba(255, 135, 66, 0.3), inset 0 0 5px rgba(255, 135, 66, 0.1)'
              }}
            >
              <span className="relative z-10">{skill.name}</span>
              
              {/* Skill level indicator */}
              <motion.div 
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-brand-orange to-orange-400 rounded-full"
                initial={{ width: 0 }}
                animate={{ 
                  width: hoveredSkill === index ? `${skill.level}%` : "0%",
                  opacity: hoveredSkill === index ? 1 : 0
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
              
              {/* Pulse effect when hovered */}
              {hoveredSkill === index && (
                <motion.div
                  className="absolute inset-0 rounded-full orange-glow-strong"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: [0.2, 0.4, 0.2], 
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ 
                    duration: 1.5, 
                    ease: "easeInOut", 
                    repeat: Infinity,
                  }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;