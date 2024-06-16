// pages/services.js
import React from 'react';
import Layout from '../components/Layout';

const Services = () => {
  return (
    <Layout>
      <section id="services" className="py-20 bg-gray-50">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Services</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-blue-600">
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">Full Stack Web Development</h3>
            <p className="text-base text-gray-600">Expertise in MERN stack for creating dynamic and responsive web applications, tailored to meet business needs and drive user engagement.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-blue-600">
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">Blockchain Development</h3>
            <p className="text-base text-gray-600">Specializing in NFTs and blockchain marketplaces, leveraging Solidity and smart contracts to create secure and innovative digital solutions.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-blue-600">
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">SEO & Digital Marketing</h3>
            <p className="text-base text-gray-600">Advanced SEO strategies and comprehensive digital marketing solutions to enhance online visibility and drive business growth.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-blue-600">
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">Data Analytics & Business Insights</h3>
            <p className="text-base text-gray-600">Utilizing data analytics to derive actionable business insights, informing strategic decisions and fostering growth.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-blue-600">
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">Technical Writing & Content Creation</h3>
            <p className="text-base text-gray-600">Creating engaging and informative technical content that effectively communicates complex ideas to diverse audiences.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-blue-600">
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">App Development and Feature Innovation</h3>
            <p className="text-base text-gray-600">Developing cutting-edge applications and implementing innovative features that meet user needs and align with business goals.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-blue-600">
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">Cloud Services & Data Migration</h3>
            <p className="text-base text-gray-600">Expertise in Google Cloud Platform, handling extensive data migrations and scripting on the cloud to enhance operational efficiency.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-blue-600">
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">Project Management</h3>
            <p className="text-base text-gray-600">Proficient in agile methodologies and leading cross-functional teams to deliver projects on time, aligning with business objectives.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-blue-600">
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">Chatbot Integration</h3>
            <p className="text-base text-gray-600">Implementing chatbots to enhance customer interaction and support, improving overall user experience and operational efficiency.</p>
          </div>
          
        </div>
      </section>
    </Layout>
  );
};

export default Services;
