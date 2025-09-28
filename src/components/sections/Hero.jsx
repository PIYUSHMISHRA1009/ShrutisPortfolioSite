import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  const calculateTransform = (axis) => {
    const value = axis === 'x' 
      ? (mousePosition.x / window.innerWidth - 0.5) * 20
      : (mousePosition.y / window.innerHeight - 0.5) * 20;
    return value;
  };

  return (
    <section id="hero" className="h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-brand-orange/20 blur-[100px]"
          animate={{
            x: calculateTransform('x') * -0.5,
            y: calculateTransform('y') * -0.5,
          }}
          transition={{ type: 'spring', stiffness: 50 }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] rounded-full bg-orange-600/10 blur-[120px]"
          animate={{
            x: calculateTransform('x') * 0.3,
            y: calculateTransform('y') * 0.3,
          }}
          transition={{ type: 'spring', stiffness: 30 }}
        />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgcGF0dGVyblRyYW5zZm9ybT0icm90YXRlKDQ1KSI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMC41IiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiAvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIgLz48L3N2Zz4=')] opacity-20" />
      </div>
      
      <div className="section-container z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl mx-auto"
        >
          <motion.h2 
            className="text-lg md:text-xl font-medium mb-2 text-brand-orange"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Personal Branding Strategist
          </motion.h2>
          
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-[clamp(4rem,8vw,6.5rem)] font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <span className="heading-gradient">Shruti Singh</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl lg:text-[clamp(1.25rem,3vw,1.75rem)] mb-10 text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            I Add <span className="text-brand-orange font-medium">'Voice'</span> to Your <span className="text-brand-orange font-medium">'Personality'</span>
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-12"
          >
            <motion.a 
              href="#contact" 
              className="apple-button orange-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Work With Me
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;