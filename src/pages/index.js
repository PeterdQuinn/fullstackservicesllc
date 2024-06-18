// pages/index.js
import React from 'react';
import Layout from '../components/Layout';
import Pricing from '../components/Pricing';
import Link from 'next/link';
import Image from 'next/image';

const Home = () => {
  return (
    <Layout>
      <section className="text-center py-20 bg-white text-blue-900 px-5">
        <h1 className="text-5xl font-bold mb-4">COMPREHENSIVE DIGITAL SOLUTIONS FOR BUSINESSES</h1>
        <p className="text-xl mb-8">B2B Digital Marketing: Leveraging AI for High-End Results and Future-Forward Strategies</p>
        <Link href="/services" legacyBehavior>
          <a className="bg-blue-900 text-white font-bold py-3 px-6 rounded-full">Our Services</a>
        </Link>
      </section>

      <section id="overview" className="py-20 bg-blue-900 text-white">
        <h2 className="text-4xl font-bold text-center mb-8">Full Stack Services LLC</h2>
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg mb-8">
              At Full Stack Services LLC, we specialize in delivering comprehensive digital marketing and development solutions tailored to meet the unique needs of businesses. As a B2B company, our expertise in SEO, web development, and data analytics ensures that your business not only stands out but thrives in the digital landscape. We leverage advanced AI technologies to create impactful strategies that drive growth and enhance online visibility.
            </p>
          </div>
          <div className="flex justify-center">
            <Image src="/fullstack.png" alt="Full Stack Services LLC" width={500} height={300} className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      <section id="social-media-strategy" className="py-20 bg-white text-blue-900">
        <h2 className="text-4xl font-bold text-center mb-8">Social Media Strategy Blueprint</h2>
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Interactive Tools</h3>
            <p className="text-lg mb-3">Social Media Strategy Builder: Develop a customized social media plan with optimal content types, posting frequencies, and engagement strategies.</p>
            <p className="text-lg mb-3">Engagement Optimization Calculator: Improve your engagement rates by comparing your performance to industry benchmarks and receiving actionable insights.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Service Offering</h3>
            <p className="text-lg mb-3">Custom Social Media Blueprint: Collaborate with our experts to create a strategic blueprint tailored to boost your visibility and interaction on various social media platforms.</p>
          </div>
        </div>
      </section>

      <section id="seo" className="py-20 bg-blue-900 text-white">
        <h2 className="text-4xl font-bold text-center mb-8">Data-Driven SEO</h2>
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Interactive Tools</h3>
            <p className="text-lg mb-3">SEO Blueprint Generator: Generate a personalized SEO strategy with steps for technical optimizations, targeted content creation, and strategic link-building.</p>
            <p className="text-lg mb-3">Keyword Impact Forecaster: Discover high-potential keywords and evaluate their impact to optimize your content and SEO efforts.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Service Offering</h3>
            <p className="text-lg mb-3">Comprehensive Traffic Enhancement Blueprint: Work with our SEO specialists to develop a tailored plan that drives significant traffic to your website.</p>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 bg-white text-blue-900">
        <h2 className="text-4xl font-bold text-center mb-8">Why Choose Us?</h2>
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Who Benefits From Our Services?</h3>
            <p className="text-lg mb-3">Small to Medium-Sized Enterprises (SMEs): Establish or enhance your online presence with a structured digital marketing strategy.</p>
            <p className="text-lg mb-3">E-commerce Businesses: Increase traffic, improve conversion rates, and optimize overall online store performance.</p>
            <p className="text-lg mb-3">Startups: Quickly establish a strong online presence and build brand awareness in a competitive market.</p>
            <p className="text-lg mb-3">Professional Service Providers: Attract new clients with local SEO and targeted content for law firms, dental offices, consultancy services, and more.</p>
          </div>
          <div className="flex justify-center">
            <Image src="/Fullstack2.jpeg" alt="Target Business Types" width={500} height={300} className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      <section id="client-info" className="py-20 bg-blue-900 text-white">
        <h2 className="text-4xl font-bold text-center mb-8">Start Your Project with Us</h2>
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg mb-8">
            Ready to take your business to the next level? Provide us with your project details, and we will get started on delivering top-notch solutions tailored to your needs.
          </p>
          <Link href="/client-info" legacyBehavior>
            <a className="bg-white text-blue-900 font-bold py-3 px-6 rounded-full">Get Started</a>
          </Link>
        </div>
      </section>

      <Pricing />
    </Layout>
  );
};

export default Home;
