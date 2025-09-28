import { useEffect } from 'react';

const ParallaxScroll = () => {
  useEffect(() => {
    // Function to handle smooth parallax scrolling
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sections = document.querySelectorAll('section');
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionBottom = sectionTop + sectionHeight;
        
        // Check if section is in viewport
        if (scrollY > sectionTop - window.innerHeight && scrollY < sectionBottom) {
          // Calculate how far through the section we are (0 to 1)
          const scrollProgress = (scrollY - (sectionTop - window.innerHeight)) / 
                               (sectionHeight + window.innerHeight);
          
          // Apply parallax effect to section background elements
          const bgElements = section.querySelectorAll('.bg-parallax');
          bgElements.forEach((el) => {
            const speed = el.getAttribute('data-speed') || 0.2;
            const yPos = -(scrollProgress * speed * 100);
            el.style.transform = `translate3d(0, ${yPos}px, 0)`;
          });
          
          // Apply fade-in effect to content as it enters viewport
          const contentElements = section.querySelectorAll('.content-parallax');
          contentElements.forEach((el) => {
            if (scrollProgress > 0.1 && scrollProgress < 0.9) {
              el.style.opacity = Math.min(1, (scrollProgress - 0.1) * 2);
              el.style.transform = `translate3d(0, ${20 - scrollProgress * 20}px, 0)`;
            }
          });
        }
      });
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial call to set positions
    handleScroll();
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null; // This is a utility component with no UI
};

export default ParallaxScroll;