import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-blue-900 text-white p-6 shadow-lg">
      <nav className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="flex items-center space-x-4 mb-4 md:mb-0">
          <Image src="/fstack.webp" alt="Full Stack Services LLC Logo" width={50} height={50} />
          <div className="text-2xl font-bold text-white">Full Stack Services LLC</div>
        </div>
        <div className="flex flex-wrap space-x-6">
          <Link href="/" className="hover:text-gray-300 transition-colors duration-300 mb-2 md:mb-0">Home</Link>
          <Link href="/services" className="hover:text-gray-300 transition-colors duration-300 mb-2 md:mb-0">Services</Link>
          <Link href="/clients" className="hover:text-gray-300 transition-colors duration-300 mb-2 md:mb-0">Clients</Link>
          <Link href="/contact" className="hover:text-gray-300 transition-colors duration-300">Contact</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
