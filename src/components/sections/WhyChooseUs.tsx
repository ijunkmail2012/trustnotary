import React from 'react';
import { FEATURES } from '../../utils/constants';

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-choose" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary-800 mb-4">Why Choose Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With years of experience and a commitment to excellence, we provide notary services you can trust.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            
            return (
              <div key={feature.id} className="flex space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-800 text-white">
                    <Icon size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 bg-primary-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-semibold text-primary-800 mb-4">
            Ready to get started?
          </h3>
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            We're committed to providing the highest quality notary services with convenience and professionalism.
          </p>
          <button 
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                window.scrollTo({
                  top: contactSection.offsetTop - 80,
                  behavior: 'smooth'
                });
              }
            }}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-800 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            Contact Us Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;