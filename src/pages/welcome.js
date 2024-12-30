import React, { useState } from 'react';

const Welcome = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comments: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const response = await fetch('/api/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
  
    if (response.ok) {
      alert('Form submitted successfully!');
    } else {
      alert('Failed to submit form');
    }
  };
  

  return (
    <div className="p-6">
    <header className="text-center mb-8">
    <h1 className="text-4xl font-bold text-blue-800">Welcome to Plymouth Montessori!</h1>
    <p className="text-gray-700 mt-4 text-lg">
      We're excited to bring a child-centered approach to education to our community.
    </p>
  </header>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-4 shadow-md rounded">
        <div className="mb-4">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Join Our Community</h2>
                <p className="text-gray-600 mb-6">
                Fill out the form below to express your interest in our Montessori school.
                </p>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="comments" className="block text-sm font-medium text-gray-700">
            Questions or Comments
          </label>
          <textarea
            id="comments"
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            placeholder="Let us know your thoughts or any questions you have!"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"

          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Welcome;
