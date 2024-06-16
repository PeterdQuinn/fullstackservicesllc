import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 p-8 shadow-lg">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-blue-900">About Full Stack Services LLC</h3>
          <p className="text-base text-gray-600">
            Accomplished Full Stack  Developer and Blockchain Specialist, dedicated to creating innovative solutions that drive business success.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-blue-900">Quick Links</h3>
          <ul>
            <li><Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link></li>
            <li><Link href="/services" className="text-gray-600 hover:text-gray-900">Services</Link></li>
            <li><Link href="/clients" className="text-gray-600 hover:text-gray-900">Clients</Link></li>
            <li><Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-blue-900">Contact</h3>
          <p className="text-base text-gray-600">Feel free to get in touch for collaborations or just a friendly hello.</p>
          <p className="text-base mt-2 text-gray-600">Email: <a href="mailto:Peterdquinnsr@gmail.com" className="text-blue-500 hover:text-blue-700">Peterdquinnsr@gmail.com</a></p>
        </div>
      </div>
      <div className="text-center mt-8 text-sm text-gray-600">
        © 2024 Full Stack Services LLC. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
