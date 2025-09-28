import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Personal Branding Strategist',
      company: 'Self-employed',
      period: '2024–Present',
      description: 'Helping professionals build their personal brand on LinkedIn through strategic content creation and brand positioning.',
      logo: '🚀' // Placeholder for logo
    },
    {
      id: 2,
      role: 'Associate',
      company: 'LawSikho',
      period: '2021–2024',
      description: 'Created content strategies and managed personal branding initiatives for legal professionals.',
      logo: '⚖️' // Placeholder for logo
    }
  ];

  const education = [
    {
      id: 1,
      degree: 'B.A.LLB (Hons.)',
      institution: 'HNLU Raipur',
      period: '2016-2021',
      description: 'Specialized in corporate law with focus on intellectual property and brand management.',
      logo: '🎓' // Placeholder for logo
    }
  ];

  // Animation variants
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
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="experience" className="py-24 md:py-32 relative">
      {/* Background accents */}
      <div className="absolute left-0 top-1/3 w-72 h-72 rounded-full bg-brand-orange/5 blur-[100px] -z-10"></div>
      <div className="absolute right-0 bottom-1/4 w-64 h-64 rounded-full bg-apple-blue/5 blur-[80px] -z-10"></div>
      
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 heading-gradient">Experience & Education</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey from law to personal branding
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <motion.h3 
              className="text-2xl font-bold mb-8 text-brand-orange orange-glow inline-block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Work Experience
            </motion.h3>
            
            <motion.div
              className="relative"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-brand-orange/80 via-brand-orange/50 to-brand-orange/20 timeline-line"></div>
              
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  className="relative mb-16 last:mb-0 pl-20"
                  variants={itemVariants}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-[30px] top-0 w-4 h-4 rounded-full bg-brand-orange timeline-dot"></div>
                  
                  {/* Logo circle */}
                  <div className="absolute left-0 top-0 w-16 h-16 rounded-full glass-card flex items-center justify-center text-2xl orange-glow">
                    {exp.logo}
                  </div>
                  
                  <motion.div 
                    className="glass-card glass-card-hover p-6"
                    whileHover={{ 
                      y: -5,
                      transition: { type: "spring", stiffness: 300, damping: 20 }
                    }}
                  >
                    <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                    <div className="flex justify-between text-sm text-gray-300 mb-3 mt-1">
                      <span className="font-medium">{exp.company}</span>
                      <span className="text-brand-orange">{exp.period}</span>
                    </div>
                    <p className="text-gray-400">{exp.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Education */}
          <div>
            <motion.h3 
              className="text-2xl font-bold mb-8 text-brand-orange orange-glow inline-block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Education
            </motion.h3>
            
            <motion.div
              className="relative"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-brand-orange/80 via-brand-orange/50 to-brand-orange/20 timeline-line"></div>
              
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  className="relative mb-16 last:mb-0 pl-20"
                  variants={itemVariants}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-[30px] top-0 w-4 h-4 rounded-full bg-brand-orange timeline-dot"></div>
                  
                  {/* Logo circle */}
                  <div className="absolute left-0 top-0 w-16 h-16 rounded-full glass-card flex items-center justify-center text-2xl orange-glow">
                    {edu.logo}
                  </div>
                  
                  <motion.div 
                    className="glass-card glass-card-hover p-6"
                    whileHover={{ 
                      y: -5,
                      transition: { type: "spring", stiffness: 300, damping: 20 }
                    }}
                  >
                    <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                    <div className="flex justify-between text-sm text-gray-300 mb-3 mt-1">
                      <span className="font-medium">{edu.institution}</span>
                      <span className="text-brand-orange">{edu.period}</span>
                    </div>
                    <p className="text-gray-400">{edu.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;