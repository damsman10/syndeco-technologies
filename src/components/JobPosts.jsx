import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import JobData from './JobsData';

const JobPosts = () => {
  const { id } = useParams();
  const job = JobData.find((item) => item.id === id);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    coverLetter: '',
    resume: null,
    agree: false,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  if (!job) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-center px-4">
        <div>
          <h2 className="text-2xl font-bold mb-2 text-[#003366]">Job not found</h2>
          <p className="text-gray-600 mb-4">
            We couldn’t find the job post you’re looking for.
          </p>
          <Link to="/careers" className="text-blue-600 underline">
            ← Back to Careers
          </Link>
        </div>
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value,
    }));
  };

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.email.trim()) errs.email = 'Email is required';
    if (!formData.resume) errs.resume = 'Please upload your resume';
    if (!formData.agree) errs.agree = 'You must agree to the terms';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
    // Send to backend here (API call or integration)
  };

  return (
    <div className="max-w-3xl mx-auto p-8 font-sans">
      <h1 className="text-4xl font-bold mb-3 text-[#003366]">{job.title}</h1>
      <p className="text-gray-600 mb-1">
        <strong>Location:</strong> {job.location}
      </p>
      <p className="text-gray-600 mb-6">
        <strong>Type:</strong> {job.type}
      </p>
      <p className="mb-10 text-gray-800 whitespace-pre-line">{job.description}</p>

      {submitted ? (
        <div className="bg-green-100 text-green-800 border border-green-300 px-4 py-4 rounded">
          <p className="font-semibold">✅ Your application has been submitted!</p>
          <p className="mt-2 text-sm">Thank you for applying — we’ll be in touch.</p>
          <Link to="/careers" className="mt-4 inline-block text-blue-700 underline">
            ← Back to Careers
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-medium mb-1">Full Name *</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded ${
                errors.fullName ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.fullName && (
              <p className="text-sm text-red-600 mt-1">{errors.fullName}</p>
            )}
          </div>

          <div>
            <label className="block font-medium mb-1">Email Address *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.email && (
              <p className="text-sm text-red-600 mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block font-medium mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded"
              placeholder="Optional"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Resume (PDF/DOC) *</label>
            <input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded ${
                errors.resume ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.resume && (
              <p className="text-sm text-red-600 mt-1">{errors.resume}</p>
            )}
          </div>

          <div>
            <label className="block font-medium mb-1">Cover Letter</label>
            <textarea
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded"
              placeholder="Optional"
            />
          </div>

          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              className="mt-1"
            />
            <label className="text-sm">
              I agree to the{' '}
              <Link to="/privacy" className="text-blue-600 underline">
                Privacy Policy
              </Link>
              .
            </label>
          </div>
          {errors.agree && <p className="text-sm text-red-600">{errors.agree}</p>}

          <button
            type="submit"
            className="bg-[#003366] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#002244] transition"
          >
            Submit Application
          </button>
        </form>
      )}
    </div>
  );
};

export default JobPosts;
