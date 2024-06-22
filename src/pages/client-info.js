import React from 'react';

const ClientInfo = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6 py-8 space-y-10">
      <div className="max-w-4xl w-full space-y-8 bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center text-blue-900">Client Project Information</h1>
        <p className="text-lg text-gray-700 text-center">Please include the following information in your email:</p>
        <ul className="list-disc space-y-2 pl-10 text-gray-800 text-lg">
          <li>Full Name</li>
          <li>Contact Email</li>
          <li>Phone Number</li>
          <li>Project Type (e.g., Website Development, SEO Optimization)</li>
          <li>Detailed Project Description</li>
          <li>Budget</li>
          <li>Timeline</li>
        </ul>
        <div className="mt-4 text-lg text-center">
          <p>Email your details to: <a href="mailto:Owner@fullstackservicesllc.net" className="text-blue-700 hover:underline">Owner@fullstackservicesllc.net</a></p>
          <p className="text-gray-600">Attach any relevant files in PDF format.</p>
        </div>
      </div>

      {/* New card for wireframe inquiry */}
      <div className="max-w-4xl w-full space-y-8 bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center text-blue-900">Wireframe and Project Visualization</h2>
        <p className="text-lg text-gray-700 text-center">Do you have a wireframe or need help creating your business idea into a visual project?</p>
        <p className="text-lg text-gray-700">We specialize in transforming ideas into detailed project plans and designs. Let us know how we can assist you:</p>
        <ul className="list-disc space-y-2 pl-10 text-gray-800 text-lg">
          <li>Do you already have a wireframe?</li>
          <li>Need help developing one?</li>
        </ul>
        <div className="mt-4 text-lg text-center">
          <p>Please contact us directly at: <a href="mailto:Owner@fullstackservicesllc.net" className="text-blue-700 hover:underline">Owner@fullstackservicesllc.net</a></p>
          <p className="text-gray-600">Provide your name and email so we can discuss your project needs in detail.</p>
        </div>
      </div>
    </div>
  );
};

export default ClientInfo;
