// pages/thank-you.js
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const ThankYou = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 5000); // Redirect after 5 seconds

    return () => clearTimeout(timer); // Cleanup the timer
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-xl w-full text-center">
        <h1 className="text-2xl font-bold mb-6 text-blue-900">Thank You!</h1>
        <p className="text-lg mb-6">
          Your information has been submitted successfully. You will be redirected to the home page shortly.
        </p>
        <Link href="/" legacyBehavior>
          <a className="bg-blue-900 text-white py-3 px-6 rounded-lg font-semibold">Return to Home</a>
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
