// components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="bg-white text-gray-800 p-6 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-900">Full Stack Services LLC</div>
        <div className="flex space-x-6">
          <a href="/" className="hover:text-blue-700 transition-colors duration-300">Home</a>
          <a href="/services" className="hover:text-blue-700 transition-colors duration-300">Services</a>
          <a href="/clients" className="hover:text-blue-700 transition-colors duration-300">Clients</a>
          <a href="/contact" className="hover:text-blue-700 transition-colors duration-300">Contact</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
