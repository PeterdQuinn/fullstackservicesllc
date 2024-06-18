// pages/client-info.js
import React, { useState } from 'react';
import { useRouter } from 'next/router';

const ClientInfo = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    details: '',
    budget: '',
    timeline: '',
  });
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    data.append('file', file);
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('projectType', formData.projectType);
    data.append('details', formData.details);
    data.append('budget', formData.budget);
    data.append('timeline', formData.timeline);

    const res = await fetch('/api/client-info', {
      method: 'POST',
      body: data,
    });

    if (res.ok) {
      router.push('/thank-you');
    } else {
      alert('Failed to submit information.');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-xl w-full">
        <h1 className="text-2xl font-bold mb-6 text-blue-900">Client Project Information</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900"
            />
          </div>
          <div>
            <label className="block text-gray-700">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900"
            />
          </div>
          <div>
            <label className="block text-gray-700">Project Type:</label>
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900"
            >
              <option value="">Select a project type</option>
              <option value="Website Development">Website Development</option>
              <option value="SEO Optimization">SEO Optimization</option>
              <option value="Data Analytics">Data Analytics</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Project Details:</label>
            <textarea
              name="details"
              value={formData.details}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900"
            />
          </div>
          <div>
            <label className="block text-gray-700">Budget:</label>
            <input
              type="text"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900"
            />
          </div>
          <div>
            <label className="block text-gray-700">Timeline:</label>
            <input
              type="text"
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900"
            />
          </div>
          <div>
            <label className="block text-gray-700">Upload Supporting Files:</label>
            <input
              type="file"
              name="file"
              onChange={handleFileChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900"
            />
          </div>
          <button type="submit" className="w-full bg-blue-900 text-white py-3 px-6 rounded-lg font-semibold">
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ClientInfo;
