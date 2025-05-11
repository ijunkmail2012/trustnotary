import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary-800 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">TrustNotary</h3>
            <p className="mb-4 text-gray-300">
              Providing trusted notary services to individuals and businesses since 2010.
            </p>
            <p className="text-sm text-gray-400">
              Licensed and insured in all 50 states.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Services', 'About Us', 'FAQs', 'Privacy Policy', 'Terms of Service'].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-gold-400 transition duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-gray-300 space-y-2">
              <p>123 Notary Avenue</p>
              <p>Document City, DC 12345</p>
              <p className="mt-4">
                <span className="block">Email: info@trustnotary.com</span>
                <span className="block">Phone: (555) 123-4567</span>
              </p>
            </address>
          </div>
          
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} TrustNotary. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;