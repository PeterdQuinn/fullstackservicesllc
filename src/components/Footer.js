import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="text-xl font-semibold mb-2">Full Stack Services LLC</h3>
          <p className="text-sm">
            Full Stack Services LLC specializes in comprehensive digital solutions including SEO, web development, and data analytics. Our innovative approaches drive business success and enhance online presence.
          </p>
          <div className="mt-4">
            LinkedIn: <a href="https://www.linkedin.com/in/peterdquinn31/" className="text-blue-400">Full Stack Services LLC</a>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
          <p className="text-sm">Feel free to get in touch for collaborations or inquiries:</p>
          <p className="text-sm mt-2">Email: Owner@fullstackservicesllc.net</p>
        </div>
      </div>
      <div className="text-center mt-6 text-sm">
        © 2024 Full Stack Services LLC. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
