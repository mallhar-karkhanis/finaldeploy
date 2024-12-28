import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Footer content with separate columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Company Info */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-extrabold text-white">Medtipss</h2>
            <p className="text-gray-400 text-lg mt-2">Medicine Delivery in 30 Minutes</p>
          </div>
          
          {/* Quick Links */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Services</a></li>
              <li><a href="https://api.whatsapp.com/send?phone=917814772720&text=Hello%2C%20i%20need%20medicine%20" className="text-gray-300 hover:text-white transition duration-300">Contact Us</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold text-white mb-3">Follow Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://www.facebook.com/medtips.store/" className="text-gray-300 hover:text-blue-500 transition duration-300 " aria-label="Facebook">Facebook</a>
              </li>
              <li>
                <a href="https://x.com/MedtipsStore" className="text-gray-300 hover:text-blue-400 transition duration-300 " aria-label="Twitter">X (Formerly Twitter)</a>
              </li>
              <li>
                <a href="https://www.instagram.com/medtips.store/" className="text-gray-300 hover:text-pink-500 transition duration-300 " aria-label="Instagram">Instagram</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/medtips" className="text-gray-300 hover:text-blue-700 transition duration-300 " aria-label="LinkedIn">LinkedIn</a>
              </li>
            </ul>
          </div>
          
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
