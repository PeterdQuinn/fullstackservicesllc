// pages/index.js
import React from 'react';
import Layout from '../component/Layout';

const Home = () => {
  return (
    <Layout>
      <section className="text-center py-20 bg-blue-900 text-white">
        <h1 className="text-5xl font-bold mb-4">Welcome to Full Stack Services LLC</h1>
        <p className="text-xl mb-8">Your Partner in Digital Transformation</p>
        <a href="/services" className="bg-white text-blue-900 font-bold py-3 px-6 rounded-full">Our Services</a>
      </section>
      <section id="about" className="py-20">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">About Us</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-600 text-lg">
              Full Stack Services LLC specializes in Full Stack Web Development, Blockchain Development, SEO, and Digital Marketing. Our expertise lies in transforming complex challenges into streamlined, user-friendly solutions that drive business success.
            </p>
          </div>
          <div>
            <img src="/path-to-your-image.jpg" alt="About Us" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
