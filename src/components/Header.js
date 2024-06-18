// components/Header.js
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-blue-900 text-white p-6 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Image src="/fstack.webp" alt="Full Stack Services LLC Logo" width={50} height={50} />
          <div className="text-2xl font-bold text-white">Full Stack Services LLC</div>
        </div>
        <div className="flex space-x-6">
          <Link href="/" legacyBehavior>
            <a className="hover:text-gray-300 transition-colors duration-300">Home</a>
          </Link>
          <Link href="/services" legacyBehavior>
            <a className="hover:text-gray-300 transition-colors duration-300">Services</a>
          </Link>
          <Link href="/clients" legacyBehavior>
            <a className="hover:text-gray-300 transition-colors duration-300">Clients</a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className="hover:text-gray-300 transition-colors duration-300">Contact</a>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
