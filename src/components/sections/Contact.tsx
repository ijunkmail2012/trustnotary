import React from 'react';
import ContactForm from '../ui/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary-800 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Reach out to schedule an appointment or ask any questions about our notary services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold text-primary-800 mb-6">Send Us a Message</h3>
            <ContactForm />
          </div>
          
          {/* Contact Information and Map */}
          <div>
            <h3 className="text-2xl font-semibold text-primary-800 mb-6">Contact Information</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-800">
                  <MapPin size={20} />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Our Location</h4>
                  <p className="mt-1 text-gray-600">
                    123 Notary Avenue<br />
                    Document City, DC 12345
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-800">
                  <Phone size={20} />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Phone</h4>
                  <p className="mt-1 text-gray-600">(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-800">
                  <Mail size={20} />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Email</h4>
                  <p className="mt-1 text-gray-600">info@trustnotary.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-800">
                  <Clock size={20} />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Business Hours</h4>
                  <p className="mt-1 text-gray-600">
                    Monday-Friday: 8:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 3:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="h-80 bg-gray-200 rounded-lg overflow-hidden shadow-md">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215266754809!2d-73.98776708459473!3d40.75798797932708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9aeb1c6b5%3A0x35b1cfbc89a6097f!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1634567890123!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;