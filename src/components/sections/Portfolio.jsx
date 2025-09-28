import { motion } from 'framer-motion';
import { useState } from 'react';

const Portfolio = () => {
  // Placeholder projects data
  const projects = Array(6).fill().map((_, i) => ({
    id: i + 1,
    title: `LinkedIn Branding Project ${i + 1}`,
    description: 'Personal branding strategy and content development for a professional on LinkedIn.',
    category: i % 3 === 0 ? 'Lawyer' : i % 3 === 1 ? 'Founder' : 'Professional',
    image: `project-${i + 1}` // This would be replaced with actual image paths in a real project
  }));

  // State for hover effect
  const [hoveredId, setHoveredId] = useState(null);

  // Spring animation config
  const springConfig = {
    type: "spring",
    stiffness: 300,
    damping: 20
  };

  return (
    <section id="portfolio" className="py-24 md:py-32 relative">
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
          <h2 className="text-3xl md:text-5xl font-bold mb-4 heading-gradient">Portfolio</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I've helped build over <span className="text-brand-orange font-medium">25 authority-led personal brands</span> on LinkedIn. Here's a showcase of some of my work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="glass-card glass-card-hover overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: project.id * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                scale: 1.03, 
                transition: springConfig 
              }}
              onHoverStart={() => setHoveredId(project.id)}
              onHoverEnd={() => setHoveredId(null)}
            >
              <div className="relative h-52 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/30 to-black/60 z-10"></div>
                <motion.div 
                  className="h-full bg-gradient-to-br from-brand-orange/20 via-black/40 to-apple-blue/10"
                  animate={{ 
                    scale: hoveredId === project.id ? 1.1 : 1,
                    filter: hoveredId === project.id ? 'brightness(1.2)' : 'brightness(1)'
                  }}
                  transition={springConfig}
                >
                  {/* This would be an actual image in a real project */}
                  <div className="h-full w-full flex items-center justify-center">
                    <span className="text-5xl text-white/20 font-bold">#{project.id}</span>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="absolute top-4 left-4 z-20"
                  animate={{ 
                    y: hoveredId === project.id ? 0 : 5,
                    opacity: hoveredId === project.id ? 1 : 0.8
                  }}
                  transition={springConfig}
                >
                  <span className="pill-tag orange-glow-strong">
                    {project.category}
                  </span>
                </motion.div>
              </div>
              
              <div className="p-6 relative">
                <motion.h3 
                  className="text-xl md:text-2xl font-bold mb-3 text-white"
                  animate={{ 
                    color: hoveredId === project.id ? 'rgb(255, 135, 66)' : 'rgb(255, 255, 255)'
                  }}
                  transition={springConfig}
                >
                  {project.title}
                </motion.h3>
                
                <p className="text-gray-300">{project.description}</p>
                
                <motion.div 
                  className="mt-6 flex justify-end"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: hoveredId === project.id ? 1 : 0,
                    y: hoveredId === project.id ? 0 : 10
                  }}
                  transition={springConfig}
                >
                  <button className="text-brand-orange flex items-center group-hover:orange-glow">
                    View Details
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;