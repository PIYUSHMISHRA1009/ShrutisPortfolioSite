import { motion } from 'framer-motion';
import ScrollReveal from '../ScrollReveal';
import StaggeredReveal from '../StaggeredReveal';

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-24 md:py-32 relative">
      {/* Background accent */}
      <div className="bg-parallax absolute right-0 top-1/4 w-64 h-64 rounded-full bg-brand-orange/10 blur-[80px] -z-10" data-speed="0.2"></div>
      
      <div className="section-container">
        <ScrollReveal direction="up" delay={0.1} className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 heading-gradient text-center">About Me</h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto">My journey from law to personal branding</p>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0 }
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="space-y-6">
              <motion.p 
                variants={fadeInUp}
                className="text-lg text-gray-300"
              >
                My journey has been a fascinating evolution from being a <span className="text-white font-medium">lawyer</span> to a <span className="text-white font-medium">content writer</span>, and finally finding my true calling as a <span className="text-brand-orange font-medium">personal branding strategist</span>.
              </motion.p>
              
              <motion.p 
                variants={fadeInUp}
                className="text-lg text-gray-300"
              >
                With a background in law and a passion for storytelling, I've developed a unique approach to personal branding that combines strategic thinking with authentic narrative creation.
              </motion.p>
              
              <motion.p 
                variants={fadeInUp}
                className="text-lg text-gray-300"
              >
                I've successfully built over <span className="text-brand-orange font-medium">25 authority-led personal brands</span> organically on LinkedIn, helping professionals stand out in their industries and attract the right opportunities.
              </motion.p>
            </div>
          </motion.div>
          
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: { opacity: 1, x: 0 }
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="glass-card glass-card-hover h-full">
              <h3 className="text-2xl font-bold mb-6 text-brand-orange">My Approach</h3>
              <ul className="space-y-5">
                <motion.li 
                  className="flex items-start"
                  variants={fadeInUp}
                  transition={{ delay: 0.5 }}
                >
                  <span className="text-brand-orange mr-3 text-xl orange-glow">✦</span>
                  <span className="text-gray-200">I believe in creating <span className="text-white font-medium">authentic personal brands</span> that reflect your true voice and expertise.</span>
                </motion.li>
                <motion.li 
                  className="flex items-start"
                  variants={fadeInUp}
                  transition={{ delay: 0.6 }}
                >
                  <span className="text-brand-orange mr-3 text-xl orange-glow">✦</span>
                  <span className="text-gray-200">My strategy focuses on <span className="text-white font-medium">organic growth</span> through consistent, valuable content.</span>
                </motion.li>
                <motion.li 
                  className="flex items-start"
                  variants={fadeInUp}
                  transition={{ delay: 0.7 }}
                >
                  <span className="text-brand-orange mr-3 text-xl orange-glow">✦</span>
                  <span className="text-gray-200">I work closely with each client to understand their <span className="text-white font-medium">unique strengths and goals</span>.</span>
                </motion.li>
                <motion.li 
                  className="flex items-start"
                  variants={fadeInUp}
                  transition={{ delay: 0.8 }}
                >
                  <span className="text-brand-orange mr-3 text-xl orange-glow">✦</span>
                  <span className="text-gray-200"><span className="text-white font-medium">Professional yet approachable</span> - that's the tone I bring to every brand I help build.</span>
                </motion.li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;