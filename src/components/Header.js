import React from 'react';
import Link from 'next/link'; // Import Link from next/link
import Image from 'next/image'; // Import Image for optimized image handling

const Header = () => {
  return (
    <header className="bg-white text-gray-800 p-6 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Image src="/fullstack.webp" alt="Full Stack Services LLC Logo" width={50} height={50} /> {/* Using Next.js Image component */}
          <div className="text-2xl font-bold text-blue-900">Full Stack Services LLC</div>
        </div>
        <div className="flex space-x-6">
          <Link href="/"><a className="hover:text-blue-700 transition-colors duration-300">Home</a></Link>
          <Link href="/services"><a className="hover:text-blue-700 transition-colors duration-300">Services</a></Link>
          <Link href="/clients"><a className="hover:text-blue-700 transition-colors duration-300">Clients</a></Link>
          <Link href="/contact"><a className="hover:text-blue-700 transition-colors duration-300">Contact</a></Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
