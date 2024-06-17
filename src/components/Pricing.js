// components/Pricing.js
import React from 'react';

const services = [
  {
    name: 'SEO Services',
    price: 'Starting at $500/month',
    features: [
      'Deep dive SEO support',
      'Ongoing SEO support',
      'Advanced SEO Techniques',
      'Local SEO enhancements',
      'Data-Driven SEO',
      'Keyword Research',
      'Competitor Analysis',
      'SEO Blueprint Generator',
      'Comprehensive Traffic Enhancement Blueprint',
    ],
  },
  {
    name: 'Content Creation',
    price: 'Starting at $200/post',
    features: [
      'Blog posts',
      'Premium content pieces',
      'Custom content strategy',
      'Email Marketing Campaigns',
      'Newsletters',
    ],
  },
  {
    name: 'Web Development',
    price: 'Starting at $1,000/project',
    features: [
      'Custom Website Design',
      'Responsive Web Development',
      'E-commerce Integration',
      'Monthly Website Maintenance',
      'Content Management System',
    ],
  },
  {
    name: 'Social Media Management',
    price: 'Starting at $400/month',
    features: [
      'Social Media Strategy Builder',
      'Engagement Optimization Calculator',
      'Social Media Account Setup',
      'Social Media Management (Facebook, Instagram, LinkedIn)',
    ],
  },
  {
    name: 'Analytics and Reporting',
    price: 'Starting at $500/month',
    features: [
      'Monthly analytics and reporting',
      'Enhanced monthly analytics and reporting',
      'Performance dashboards',
      'Data Collection and Cleaning',
      'Data Visualization',
      'Advanced Analytics Reporting',
      'Performance Tracking',
      'Business Insights',
    ],
  },
  {
    name: 'Digital Business Card Services',
    price: '$100 per card',
    features: [
      'Professional design',
      'Reflects your brand\'s unique identity',
      'Networking in the digital age',
      'Custom pricing for data and targeting',
    ],
  },
  {
    name: 'Custom Plans',
    price: 'Contact Us for Pricing',
    features: [
      'Tailored to specific client needs',
      'Mix and match services',
      'Flexible pricing based on selected features',
      'Personal consultation',
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{service.name}</h3>
              <p className="text-xl font-bold text-blue-600 mb-4">{service.price}</p>
              <ul className="text-gray-700 mb-6">
                {service.features.map((feature, index) => (
                  <li key={index} className="mb-2">{feature}</li>
                ))}
              </ul>
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
