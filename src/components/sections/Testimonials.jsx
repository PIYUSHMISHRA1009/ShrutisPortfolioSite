import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
  const carouselRef = useRef(null);
  
  const testimonials = [
    {
      id: 1,
      name: "Rahul Sharma",
      role: "Corporate Lawyer",
      content: "Working with Shruti transformed my LinkedIn presence. Her strategic approach to personal branding helped me establish myself as a thought leader in corporate law.",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 2,
      name: "Priya Patel",
      role: "Tech Startup Founder",
      content: "Shruti has an incredible talent for capturing your authentic voice. She helped me craft a personal brand that resonates with investors and industry peers alike.",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 3,
      name: "Vikram Mehta",
      role: "Financial Consultant",
      content: "The 45-day program was transformative for my personal brand. Shruti's guidance helped me gain visibility in my industry and attract high-value clients.",
      image: "https://randomuser.me/api/portraits/men/67.jpg"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        let nextIndex = activeIndex + direction;
        
        // Handle edge cases
        if (nextIndex >= testimonials.length) {
          nextIndex = 0;
        } else if (nextIndex < 0) {
          nextIndex = testimonials.length - 1;
        }
        
        setActiveIndex(nextIndex);
      }, 5000); // Change slide every 5 seconds
      
      return () => clearInterval(interval);
    }
  }, [activeIndex, isPaused, direction, testimonials.length]);

  // Handle swipe gestures
  const handleDragEnd = (e, info) => {
    if (info.offset.x > 100) {
      // Swiped right
      setActiveIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
    } else if (info.offset.x < -100) {
      // Swiped left
      setActiveIndex(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }
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
    hidden: { opacity: 0, y: 30 },
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
    <section id="testimonials" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background accents */}
      <motion.div 
        className="absolute top-20 left-1/4 w-64 h-64 rounded-full bg-brand-orange/20 filter blur-[100px] -z-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-1/4 w-80 h-80 rounded-full bg-brand-orange/15 filter blur-[120px] -z-10"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2]
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
            Client Testimonials
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Hear what my clients have to say about their branding journey
          </motion.p>
        </motion.div>

        <div 
          className="relative max-w-5xl mx-auto px-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          ref={carouselRef}
        >
          <motion.div 
            className="overflow-hidden rounded-2xl"
            drag="x"
            dragConstraints={carouselRef}
            onDragEnd={handleDragEnd}
          >
            <motion.div 
              className="flex"
              animate={{ x: `-${activeIndex * 100}%` }}
              transition={{ 
                type: "spring", 
                stiffness: 70, 
                damping: 20 
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 px-4 py-6"
                >
                  <motion.div 
                    className="glass-card-hover p-8 md:p-10 relative overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      y: -5,
                      boxShadow: "0 20px 25px -5px rgba(255, 90, 31, 0.1), 0 10px 10px -5px rgba(255, 90, 31, 0.04)"
                    }}
                  >
                    {/* Decorative quote mark */}
                    <div className="absolute top-6 right-6 text-6xl text-brand-orange/10 font-serif">
                      "
                    </div>
                    
                    <div className="flex flex-col md:flex-row md:items-center mb-6 gap-4">
                      <motion.div 
                        className="w-20 h-20 rounded-full overflow-hidden border-2 border-brand-orange/50 orange-glow"
                        whileHover={{ scale: 1.05 }}
                      >
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                      <div>
                        <h4 className="text-xl md:text-2xl font-semibold text-white">{testimonial.name}</h4>
                        <p className="text-brand-orange pill-tag inline-block mt-1">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-200 text-lg md:text-xl italic leading-relaxed">
                      "{testimonial.content}"
                    </p>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Navigation controls */}
          <div className="flex justify-between items-center mt-10">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setActiveIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
                setDirection(-1);
              }}
              className="w-12 h-12 rounded-full glass-card flex items-center justify-center orange-glow"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            {/* Navigation dots */}
            <div className="flex justify-center space-x-3">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    activeIndex === index 
                      ? 'bg-brand-orange w-8 orange-glow-strong' 
                      : 'bg-gray-600 hover:bg-gray-400'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setActiveIndex(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
                setDirection(1);
              }}
              className="w-12 h-12 rounded-full glass-card flex items-center justify-center orange-glow"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;