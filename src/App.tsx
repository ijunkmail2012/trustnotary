import React, { useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import WhyChooseUs from './components/sections/WhyChooseUs';
import HowItWorks from './components/sections/HowItWorks';
import Contact from './components/sections/Contact';

function App() {
  useEffect(() => {
    // Update page title
    document.title = 'TrustNotary - Professional Notary Services';
    
    // Add scroll reveal animation
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    // Observe all section headings and key elements
    const animateElements = document.querySelectorAll('section > div > div:first-child, .service-card');
    animateElements.forEach(el => {
      el.classList.remove('fade-in');
      observer.observe(el);
    });
    
    return () => {
      animateElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <WhyChooseUs />
        <HowItWorks />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;