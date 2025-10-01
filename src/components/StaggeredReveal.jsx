import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const StaggeredReveal = ({ 
  children, 
  staggerDelay = 0.1, 
  direction = 'up', 
  distance = 30,
  className = '',
  ...props 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    threshold: 0.1,
    margin: "-10% 0px -10% 0px"
  });

  const directionVariants = {
    up: {
      hidden: { y: distance, opacity: 0 },
      visible: { y: 0, opacity: 1 }
    },
    down: {
      hidden: { y: -distance, opacity: 0 },
      visible: { y: 0, opacity: 1 }
    },
    left: {
      hidden: { x: distance, opacity: 0 },
      visible: { x: 0, opacity: 1 }
    },
    right: {
      hidden: { x: -distance, opacity: 0 },
      visible: { x: 0, opacity: 1 }
    },
    scale: {
      hidden: { scale: 0.8, opacity: 0 },
      visible: { scale: 1, opacity: 1 }
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className={className}
      {...props}
    >
      {Array.isArray(children) ? (
        children.map((child, index) => (
          <motion.div
            key={index}
            variants={directionVariants[direction]}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.25, 0.25, 0.75]
            }}
          >
            {child}
          </motion.div>
        ))
      ) : (
        <motion.div
          variants={directionVariants[direction]}
          transition={{
            duration: 0.6,
            ease: [0.25, 0.25, 0.25, 0.75]
          }}
        >
          {children}
        </motion.div>
      )}
    </motion.div>
  );
};

export default StaggeredReveal;