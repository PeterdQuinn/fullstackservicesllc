// pages/services.js
import React from 'react';
import Layout from '../components/Layout';

const Services = () => {
  return (
    <Layout>
      <section id="ervices" className="py-20 bg-gray-50">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Services</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-blue-600">
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">Social Media Strategy Blueprint</h3>
            <p className="text-base text-gray-600">Interactive tools to develop customized social media plans and optimize engagement.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-blue-600">
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">Website Traffic Enhancement Plan</h3>
            <p className="text-base text-gray-600">Generate a personalized SEO strategy and discover high-potential keywords to drive traffic.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-blue-600">
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">Comprehensive Traffic Enhancement Blueprint</h3>
            <p className="text-base text-gray-600">Collaborate with our SEO specialists to develop a tailored plan to drive significant traffic to your website.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-blue-600">
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">Data-Driven SEO</h3>
            <p className="text-base text-gray-600">Harnessing the power of analytics for unbeatable results.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-blue-600">
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">Digital Business Card Services</h3>
            <p className="text-base text-gray-600">Get professionally designed digital business cards that reflect your brand's unique identity. Perfect for networking in the digital age.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-blue-600">
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">Content Creation Services</h3>
            <p className="text-base text-gray-600">Empower your brand with our tailored content creation solutions, including blog posts, newsletters, and email marketing campaigns.</p>
          </div>
          
        </div>
      </section>
    </Layout>
  );
};

export default Services;
