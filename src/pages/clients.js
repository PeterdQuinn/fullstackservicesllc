// pages/clients.js
import React from 'react';
import Layout from '../components/Layout';

const clients = [
  {
    name: 'The Credit Cat',
    description: 'Transitioning The Credit Cat’s website from Wix to WordPress to enhance performance and SEO. This move involves updating and optimizing all content, including detailed graphics like our credit score improvement infographic, to better serve our clients and improve search engine rankings.',
    link: 'https://thecreditcat.com/',
  },
  {
    name: 'WTF Cannabis Extracts',
    description: 'After a comprehensive overhaul of the WTF Extracts website, we introduced a visually appealing layout and infused the content with SEO strategies to enhance visibility.',
    link: 'https://wtfextracts.com/',
  },
  {
    name: 'Low Voltage Parts',
    description: 'The collaboration with LowVoltageParts.com showcased the significant impact of integrating strategic SEO enhancements with a user-centric website redesign.',
    link: 'https://lowvoltageparts.com/',
  },
  {
    name: "Junior's Custom Towing LLC",
    description: 'For Junior’s Custom Towing, a meticulous SEO strategy was crafted and executed, focusing on enhancing visibility and engagement.',
    link: 'https://www.juniorscustomtowing.com/',
  },
  {
    name: 'Nomadic Cooling',
    description: 'Collaborated on digital footprint enhancement through SEO and web development, focusing on product visibility and performance.',
    link: 'https://www.nomadiccooling.com/',
  },
];

const Clients = () => {
  return (
    <Layout>
      <section id="clients" className="py-20 bg-gray-50">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Clients</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <div key={index} className="client-card p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-blue-600">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{client.name}</h3>
              <p className="text-base mb-4 text-gray-600">{client.description}</p>
              <a href={client.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-semibold">Visit Site</a>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Clients;
