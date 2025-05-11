import React from 'react';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      window.scrollTo({
        top: servicesSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero-image min-h-screen flex items-center relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center md:text-left">
        <div className="max-w-3xl fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Trusted Notary Services, Anytime, Anywhere
          </h1>
          <p className="text-xl md:text-2xl text-white opacity-90 mb-8">
            Fast, Reliable, and Convenient Notarization for All Your Important Documents.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="secondary" 
              size="lg"
              onClick={scrollToContact}
            >
              Book an Appointment
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-white border-white hover:bg-white hover:text-primary-800"
              onClick={scrollToContact}
            >
              Contact Us Now
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative angled divider */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ 
        clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' 
      }}></div>
    </section>
  );
};

export default Hero;