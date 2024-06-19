// components/Header.js
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-blue-900 text-white p-4 md:p-6 shadow-lg">
      <nav className="container mx-auto flex flex-wrap items-center justify-between relative z-50">
        <div className="flex items-center space-x-4">
          <Image src="/fstack.webp" alt="Full Stack Services LLC Logo" width={50} height={50} />
          <div className="text-xl md:text-2xl font-bold text-white">Full Stack Services LLC</div>
        </div>
        <div className="flex space-x-4 md:space-x-6 mt-2 md:mt-0 w-full md:w-auto justify-center md:justify-end">
          <Link href="/">
            <a className="hover:text-gray-300 transition-colors duration-300 block">Home</a>
          </Link>
          <Link href="/services">
            <a className="hover:text-gray-300 transition-colors duration-300 block">Services</a>
          </Link>
          <Link href="/clients">
            <a className="hover:text-gray-300 transition-colors duration-300 block">Clients</a>
          </Link>
          <Link href="/contact">
            <a className="hover:text-gray-300 transition-colors duration-300 block">Contact</a>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
