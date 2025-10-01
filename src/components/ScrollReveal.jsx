import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const ScrollReveal = ({ 
  children, 
  direction = 'up', 
  delay = 0, 
  duration = 0.6, 
  distance = 50,
  threshold = 0.1,
  className = '',
  ...props 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    threshold,
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
    },
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={directionVariants[direction]}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75]
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;