import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link'; // Import Link for internal navigation
import Image from 'next/image'; // Import Image for optimized image handling

const Home = () => {
  return (
    <Layout>
      <section className="text-center py-20 bg-blue-900 text-white">
        <h1 className="text-5xl font-bold mb-4">Welcome to Full Stack Services LLC</h1>
        <p className="text-xl mb-8">Innovative SEO Approach: Pioneering the Future of Digital Marketing with Graphic Icons</p>
        <Link href="/services" legacyBehavior>
          <a className="bg-white text-blue-900 font-bold py-3 px-6 rounded-full">Our Services</a>
        </Link>
      </section>
      <section id="about" className="py-20">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">About Us</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-600 text-lg">
              Experience the Future of Digital Marketing with Full Stack Services LLC. Harnessing the Power of Artificial Intelligence (AI), we deliver cutting-edge strategies designed to elevate your online presence.
            </p>
          </div>
          <div>
            {/* Using Next.js Image component for optimized image handling */}
            <Image src="/fullstack.png" alt="About Us" width={500} height={300} className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
