import React from 'react';
import Layout from '../components/Layout';

const FAQ = () => {
  const faqData = [
    {
      question: 'What services do you offer?',
      answer: 'Full Stack LLC offers a range of services including web development, digital marketing, IT consulting, and API integration services. We specialize in developing and managing comprehensive web solutions across various platforms.'
    },
    {
      question: 'How can I get a quote for my project?',
      answer: 'To get a quote for your project, please contact us directly at Owner@fullstackservicesllc.net. We will get back to you with a tailored quote as soon as possible.'
    },
    {
      question: 'What is your typical turnaround time for a project?',
      answer: 'Our typical turnaround time varies depending on the scope and complexity of the project. Generally, we aim to deliver projects within 2-4 weeks. For more detailed timelines, please get in touch with us.'
    },
    {
      question: 'Do you offer ongoing support and maintenance?',
      answer: 'Yes, we offer ongoing support and maintenance services post-project completion.'
    },
    {
      question: 'How can I contact you for more information?',
      answer: 'If you have any more questions, please feel free to reach out to us at Owner@fullstackservicesllc.net or call us at 480-781-8033.'
    }
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h3 className="text-3xl font-semibold text-center text-gray-800 mb-8">Frequently Asked Questions</h3>
        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-medium text-gray-800">{faq.question}</h4>
              <p className="text-gray-600 mt-2">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const PrivacyPolicy = () => (
  <div className="bg-white px-8 py-12">
    <div className="mx-auto max-w-7xl pb-8 sm:px-6">
      <h1 className="text-2xl font-bold text-gray-700 m-4">Privacy Policy for Full Stack SEO Services</h1>
      <p className="text-gray-700 py-8">
        This Privacy Policy (Policy) outlines the practices of Full Stack LLC regarding the collection, use, and disclosure of personal information from clients (Clients or you) who engage in the Full Stack SEO provided by Full Stack LLC.
      </p>
      <p className="text-gray-700 font-semibold pt-4">1. Information Collection:</p>
      <h6 className="text-gray-700 pt-6">Full Stack LLC may collect the following types of personal information from Clients:</h6>
      <ul className="text-gray-700 p-2">
        <li className="text-gray-700 pl-8 py-2">- Name, email address, and contact information</li>
        <li className="text-gray-700 pl-8 py-2">- Website URL and relevant business information</li>
        <li className="text-gray-700 pl-8 py-2">- Payment and billing details</li>
        <li className="text-gray-700 pl-8 py-2">- Any other information voluntarily provided by Clients in communication with Full Stack LLC</li>
      </ul>

      <p className="text-gray-700 font-semibold pt-4">2. Use of Information:</p>
      <h6 className="text-gray-700 pt-6">Full Stack LLC may use the collected personal information for the following purposes:</h6>
      <ul className="text-gray-700 p-2">
        <li className="text-gray-700 pl-8 py-2">- To provide and deliver the Full Stack SEO services</li>
        <li className="text-gray-700 pl-8 py-2">- To communicate with Clients regarding the services, updates, and relevant information</li>
        <li className="text-gray-700 pl-8 py-2">- To process payments and invoices</li>
        <li className="text-gray-700 pl-8 py-2">- To respond to inquiries and provide customer support</li>
        <li className="text-gray-700 pl-8 py-2">- To improve the quality and effectiveness of the services offered</li>
        <li className="text-gray-700 pl-8 py-2">- To comply with legal obligations</li>
      </ul>

      <p className="text-gray-700 font-semibold pt-4">3. Information Sharing and Disclosure:</p>
      <h6 className="text-gray-700 pt-6">Full Stack LLC may share Clients personal information with third parties in the following circumstances:</h6>
      <ul className="text-gray-700 p-2">
        <li className="text-gray-700 pl-8 py-2">- With Full Stack LLCs authorized employees or contractors involved in providing the Full Stack SEO services</li>
        <li className="text-gray-700 pl-8 py-2">- With trusted third-party Full Stack LLCs who assist in delivering specific aspects of the services (e.g., payment processing)</li>
        <li className="text-gray-700 pl-8 py-2">- When required by law, court order, or legal process</li>
        <li className="text-gray-700 pl-8 py-2">- To enforce or protect Full Stack LLCs rights, property, or safety, or the rights, property, or safety of others</li>
        <li className="text-gray-700 pl-8 py-2">- With Clients consent</li>
      </ul>

      <p className="text-gray-700 font-semibold pt-4">4. Data Security:</p>
      <h6 className="text-gray-700 pt-6">
        Full Stack LLC takes reasonable measures to protect the personal information of Clients. However, no data transmission over the internet or electronic storage method is completely secure. Therefore, Full Stack LLC cannot guarantee the absolute security of Clients personal information.
      </h6>

      <p className="text-gray-700 font-semibold pt-4">5. Data Retention:</p>
      <h6 className="text-gray-700 pt-6">
        Full Stack LLC retains Clients personal information for as long as necessary to fulfill the purposes outlined in this Policy, unless a longer retention period is required or permitted by law.
      </h6>

      <p className="text-gray-700 font-semibold pt-4">6. Client Rights:</p>
      <h6 className="text-gray-700 pt-6">Clients have the right to:</h6>
      <ul className="text-gray-700 p-2">
        <li className="text-gray-700 pl-8 py-2">- Access and request a copy of their personal information held by Full Stack LLC</li>
        <li className="text-gray-700 pl-8 py-2">- Update or correct their personal information</li>
        <li className="text-gray-700 pl-8 py-2">- Request the erasure of their personal information, subject to legal obligations and legitimate interests</li>
        <li className="text-gray-700 pl-8 py-2">- Object to the processing of their personal information for certain purposes</li>
        <li className="text-gray-700 pl-8 py-2">- Withdraw consent to the processing of personal information (where applicable)</li>
        <li className="text-gray-700 pl-8 py-2">- Lodge a complaint with the relevant data protection authority</li>
      </ul>

      <p className="text-gray-700 font-semibold pt-4">7. Third-Party Websites:</p>
      <h6 className="text-gray-700 pt-6">
        The Full Stack SEO services provided by Full Stack LLC may include links to third-party websites or resources. Full Stack LLC does not have control over the privacy practices or content of these websites. Clients are encouraged to review the privacy policies of these third-party websites before engaging with them.
      </h6>

      <p className="text-gray-700 font-semibold pt-4">8. Updates to the Privacy Policy:</p>
      <h6 className="text-gray-700 pt-6">
        Full Stack LLC reserves the right to update or modify this Privacy Policy at any time. Clients will be notified of any material changes to the Policy by email or through a notice on Full Stack LLCs website.
      </h6>

      <p className="text-gray-700 font-semibold pt-4">9. Contact Information:</p>
      <h6 className="text-gray-700 pt-6">
        If you have any questions or concerns about this Privacy Policy or the handling of your personal information, please contact Full Stack LLC at Owner@fullstackservicesllc.net or call us at 480-781-8033.
      </h6>

      <p className="text-gray-700 pt-6">
        By engaging in the Full Stack SEO services provided by Full Stack LLC, you acknowledge that you have read, understood, and agree to the practices described in this Privacy Policy.
      </p>
    </div>
  </div>
);

const Contact = () => {
  return (
    <Layout>
      <section id="contact" className="py-20">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Contact Us</h2>
        <div className="text-center mb-8">
          <p className="text-xl text-gray-600">Email: <a href="mailto:Owner@fullstackservicesllc.net" className="text-blue-600 hover:text-blue-800">Owner@fullstackservicesllc.net</a></p>
          <p className="text-xl text-gray-600">Phone: <a href="tel:+14807818033" className="text-blue-600 hover:text-blue-800">480-781-8033</a></p>
        </div>
        <FAQ />
        <PrivacyPolicy />
      </section>
    </Layout>
  );
};

export default Contact;
