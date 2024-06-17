// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <h3 className="text-xl font-semibold mb-2">Full Stack Services LLC</h3>
          <p className="text-sm">
            Full Stack Services LLC specializes in comprehensive digital solutions including SEO, web development, and data analytics. Our innovative approaches drive business success and enhance online presence.
          </p>
          <div className="mt-4">
            <a href="https://www.linkedin.com/in/peterdquinn31/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 mr-4">
              LinkedIn
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
          <ul>
            <li><a href="#about" className="hover:text-gray-300">About</a></li>
            <li><a href="#services" className="hover:text-gray-300">Services</a></li>
            <li><a href="#clients" className="hover:text-gray-300">Clients</a></li>
            <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
          <p className="text-sm">Feel free to get in touch for collaborations or inquiries:</p>
          <p className="text-sm mt-2">Email: Owner@fullstackservicesllc.net</p>
        </div>
      </div>
      <div className="text-center mt-6 text-sm">
        © 2024 Full Stack Services LLC. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
