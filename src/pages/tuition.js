import React from 'react';

const Tuition = () => {
  const tuitionDetails = [
    {
      program: 'Toddler Program (18 months - 3 years)',
      description: 'Full-day program designed for our youngest learners.',
      tuition: '$10,000 per year',
    },
    {
      program: 'Primary Program (3 - 6 years)',
      description: 'Half-day and full-day options available for children in the primary stage.',
      tuition: '$12,000 per year (full-day)',
    },
    {
      program: 'Elementary Program (6 - 12 years)',
      description: 'Comprehensive curriculum to meet the needs of our elementary students.',
      tuition: '$15,000 per year',
    },
  ];

  const faqs = [
    {
      question: 'Do you offer financial aid?',
      answer: 'Yes, financial aid is available to families who qualify. Please contact us for more details.',
    },
    {
      question: 'Are there sibling discounts?',
      answer: 'Yes, a sibling discount of 10% is available for the second child enrolled.',
    },
    {
      question: 'What is included in the tuition?',
      answer: 'Tuition includes all classroom materials, meals (if provided), and field trips.',
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      {/* Header Section */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-800">Tuition and Fees</h1>
        <p className="text-lg text-gray-700 mt-4">
          Investing in your child’s education is one of the most important decisions you can make. Explore our tuition plans and options below.
        </p>
      </header>

      {/* Tuition Details */}
      <section className="max-w-4xl mx-auto space-y-6">
        {tuitionDetails.map((program, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <h2 className="text-2xl font-semibold text-blue-600">{program.program}</h2>
            <p className="text-gray-600 mt-2">{program.description}</p>
            <p className="text-gray-800 font-bold mt-4">{program.tuition}</p>
          </div>
        ))}
      </section>

      {/* FAQ Section */}
      <section className="mt-10 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md"
            >
              <h3 className="text-lg font-semibold text-blue-700">{faq.question}</h3>
              <p className="text-gray-600 mt-2">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Tuition;
