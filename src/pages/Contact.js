// pages/contact.js
import React from 'react';
import Layout from '../components/Layout';

const Contact = () => {
  return (
    <Layout>
      <section id="contact" className="py-20">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Contact Us</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Get in Touch</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-600">Name</label>
                <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded-lg" />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-600">Email</label>
                <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded-lg" />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-600">Message</label>
                <textarea id="message" className="w-full p-2 border border-gray-300 rounded-lg" rows="4"></textarea>
              </div>
              <button type="submit" className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700">Send Message</button>
            </form>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Contact Details</h3>
            <p className="text-base text-gray-600">Feel free to get in touch for collaborations or just a friendly hello.</p>
            <p className="text-base mt-2 text-gray-600">Email: <a href="mailto:Peterdquinnsr@gmail.com" className="text-blue-500 hover:text-blue-700">Peterdquinnsr@gmail.com</a></p>
            <div className="mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509379!2d144.95373531561657!3d-37.8172097420217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5776a2e8a431b21!2sEnvato!5e0!3m2!1sen!2sau!4v1510913155911"
                width="100%"
                height="250"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
