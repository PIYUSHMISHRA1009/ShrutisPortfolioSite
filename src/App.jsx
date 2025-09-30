import { useEffect, useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/Footer';
import ParallaxScroll from './components/ParallaxScroll';
import ScrollToTop from './components/ScrollToTop';
import LoadingAnimation from './components/LoadingAnimation';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Portfolio from './components/sections/Portfolio';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Testimonials from './components/sections/Testimonials';
import Courses from './components/sections/Courses';
import Contact from './components/sections/Contact';

function App() {
  // Smooth scroll implementation
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const target = e.target;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        if (element) {
          window.scrollTo({
            top: element.offsetTop,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-black dark:bg-gray-900 text-white transition-colors duration-300">
      <LoadingAnimation />
      <Navbar />
      <ParallaxScroll />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Skills />
        <Experience />
        <Testimonials />
        <Courses />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
