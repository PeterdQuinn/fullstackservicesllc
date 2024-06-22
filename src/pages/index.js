import React from 'react';
import Layout from '../components/Layout';
import Pricing from '../components/Pricing';
import Link from 'next/link';
import Image from 'next/image';

const Home = () => {
  return (
    <Layout>
      <section className="text-center py-20 bg-white text-blue-900 px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          COMPREHENSIVE DIGITAL SOLUTIONS FOR BUSINESSES
        </h1>
        <p className="text-lg md:text-xl mb-8">
          B2B Digital Marketing: Leveraging AI for High-End Results and Future-Forward Strategies
        </p>
        <Link href="/Services" className="bg-blue-900 text-white font-bold py-3 px-6 rounded-full">
          Our Services
        </Link>
      </section>

      <section id="overview" className="py-20 bg-blue-900 text-white px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">AI Leveraged Full Stack Services LLC</h2>
        <div className="container mx-auto md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg mb-8">
              At Full Stack Services LLC, we specialize in delivering comprehensive digital marketing and development solutions tailored to meet the unique needs of businesses. Our expertise in AI SEO, web development, and data analytics ensures that your business not only stands out but thrives in the digital landscape.
            </p>
          </div>
          <div className="flex justify-center">
            <Image src="/fullstack.png" alt="Full Stack Services LLC" width={500} height={300} className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      <section id="wireframe-services" className="py-20 bg-white text-blue-900 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Wireframing and Prototyping</h2>
        <div className="container mx-auto md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4">Transform Your Ideas into Reality</h3>
            <p className="text-lg mb-3">Bring your concepts to life with our  enhanced wireframing and prototyping services. We help visualize your project, ensuring the design meets your business needs and user expectations.</p>
            <p className="text-lg mb-3">Our approach combines AI insights with expert design principles to create wireframes that are not only visually appealing but also optimized for functionality.</p>
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4">Service Offering</h3>
            <p className="text-lg mb-3">From initial concept to final design, our team works closely with you to develop prototypes that streamline the path from idea to development. Whether you’re looking to build a new app or redesign an existing platform, we provide the tools and expertise to achieve your goals.</p>
          </div>
        </div>
      </section>

      <section id="seo" className="py-20 bg-blue-900 text-white px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">AI Leveraged Services</h2>
        <div className="container mx-auto md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4">Interactive Tools</h3>
            <p className="text-lg mb-3">SEO Blueprint Generator: Generate a personalized SEO strategy with steps for technical optimizations, targeted content creation, and strategic link-building, all enhanced with AI.</p>
            <p className="text-lg mb-3">Keyword Impact Forecaster: Discover high-potential keywords and evaluate their impact to optimize your content and SEO efforts, backed by AI-driven data analysis.</p>
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4">Service Offering</h3>
            <p className="text-lg mb-3">AI Leveraged Comprehensive Traffic Enhancement Blueprint: Work with our SEO specialists to develop a tailored plan that drives significant traffic to your website through advanced data analytics.</p>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 bg-white text-blue-900 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Why Choose Us?</h2>
        <div className="container mx-auto md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4">Who Benefits From Our  Services?</h3>
            <p className="text-lg mb-3">Small to Medium-Sized Enterprises (SMEs): Establish or enhance your online presence with a structured digital marketing strategy.</p>
            <p className="text-lg mb-3">E-commerce Businesses: Increase traffic, improve conversion rates, and optimize overall online store performance.</p>
            <p className="text-lg mb-3">Startups: Quickly establish a strong online presence and build brand awareness in a competitive market.</p>
            <p className="text-lg mb-3">Professional Service Providers: Attract new clients with local SEO and targeted content for law firms, dental offices, consultancy services, and more.</p>
            <p className="text-lg mb-3">Marijuana Businesses: Create targeted websites and enhance your brands digital presence in the cannabis industry with AI-driven strategies.</p>
          </div>
          <div className="flex justify-center">
            <Image src="/Fullstack2.jpeg" alt="Target Business Types" width={500} height={300} className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      <section id="client-info" className="py-20 bg-blue-900 text-white px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Start Your Project</h2>
        <div className="container mx-auto text-center">
          <p className="text-lg mb-8">
            Ready to take your business to the next level with AI-powered tools? Provide us with your project details, and we will get started on delivering top-notch solutions tailored to your needs.
          </p>
          <Link href="/client-info" className="bg-white text-blue-900 font-bold py-3 px-6 rounded-full">
            Get Started
          </Link>
        </div>
      </section>

      <Pricing />
    </Layout>
  );
};

export default Home;
