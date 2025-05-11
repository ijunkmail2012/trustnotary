import React from 'react';
import { PROCESS_STEPS } from '../../utils/constants';

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary-800 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our simple, streamlined process makes document notarization quick and hassle-free.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Progress line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200"></div>
            
            {/* Steps */}
            <div className="space-y-16 relative">
              {PROCESS_STEPS.map((step, index) => {
                const Icon = step.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <div key={step.id} className="relative">
                    {/* Step number with icon (center aligned for mobile, offset for desktop) */}
                    <div className="flex justify-center md:justify-start md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary-800 text-white border-4 border-white shadow-lg z-10">
                        <div className="text-lg font-bold">{step.id}</div>
                      </div>
                    </div>
                    
                    {/* Content box - stacked on mobile, side by side on desktop */}
                    <div className={`md:flex md:justify-between ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    } items-center mt-8 md:mt-0`}>
                      {/* Empty div for alignment on desktop */}
                      <div className="hidden md:block md:w-5/12"></div>
                      
                      {/* Content */}
                      <div className="bg-white rounded-lg shadow-card p-6 md:w-5/12 mt-6 md:mt-0">
                        <div className="flex items-center mb-4">
                          <div className="mr-4 text-gold-400">
                            <Icon size={24} />
                          </div>
                          <h3 className="text-xl font-semibold text-primary-800">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;