import { useEffect, useCallback } from 'react';

const ParallaxScroll = () => {
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollProgress = scrollY / (documentHeight - windowHeight);
    
    // Update CSS custom property for scroll progress
    document.documentElement.style.setProperty('--scroll-progress', scrollProgress);
    
    const sections = document.querySelectorAll('section');
    
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top + scrollY;
      const sectionHeight = section.offsetHeight;
      
      // Check if section is in viewport with some buffer
      if (rect.top < windowHeight && rect.bottom > 0) {
        // Calculate how far through the section we are (0 to 1)
        const sectionProgress = Math.max(0, Math.min(1, 
          (windowHeight - rect.top) / (windowHeight + sectionHeight)
        ));
        
        // Apply parallax effect to background elements
        const bgElements = section.querySelectorAll('.bg-parallax');
        bgElements.forEach((el) => {
          const speed = parseFloat(el.getAttribute('data-speed')) || 0.3;
          const yPos = -(sectionProgress * speed * 100);
          el.style.transform = `translate3d(0, ${yPos}px, 0)`;
        });
        
        // Apply fade-in and slide-up effect to content
        const contentElements = section.querySelectorAll('.content-parallax');
        contentElements.forEach((el, index) => {
          const delay = index * 0.1; // Stagger animation
          const adjustedProgress = Math.max(0, sectionProgress - delay);
          
          if (adjustedProgress > 0) {
            const opacity = Math.min(1, adjustedProgress * 2);
            const translateY = Math.max(0, 40 - (adjustedProgress * 40));
            
            el.style.opacity = opacity;
            el.style.transform = `translate3d(0, ${translateY}px, 0)`;
          }
        });
        
        // Apply scale effect to images
        const imageElements = section.querySelectorAll('.image-parallax');
        imageElements.forEach((el) => {
          const scale = 1 + (sectionProgress * 0.1);
          el.style.transform = `scale(${scale})`;
        });
        
        // Apply rotation effect to rotating elements
        const rotateElements = section.querySelectorAll('.rotate-parallax');
        rotateElements.forEach((el) => {
          const rotation = sectionProgress * 360;
          el.style.transform = `rotate(${rotation}deg)`;
        });
      }
    });
  }, []);

  useEffect(() => {
    // Throttle scroll events for better performance
    let ticking = false;
    
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', onScroll, { passive: true });
    
    // Initial call to set positions
    handleScroll();
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return null; // This is a utility component with no UI
};

export default ParallaxScroll;