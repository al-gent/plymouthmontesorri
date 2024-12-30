import React from 'react';

const Locations = () => {
  const locations = [
    {
      name: 'Downtown',
      description: 'Located in the heart of the city, this location offers easy access for urban families.',
    },
    {
      name: 'Suburban Area',
      description: 'Nestled in a quiet neighborhood, this site is perfect for families looking for a peaceful learning environment.',
    },
    {
      name: 'Near the Park',
      description: 'A beautiful location close to nature, ideal for integrating outdoor activities into the curriculum.',
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      {/* Header Section */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-800">Potential School Locations</h1>
        <p className="text-lg text-gray-700 mt-4">
          Explore our proposed locations for the Montessori school. Let us know where you'd like to see us!
        </p>
      </header>

      {/* Locations List */}
      <section className="max-w-4xl mx-auto space-y-6">
        {locations.map((location, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <h2 className="text-2xl font-semibold text-blue-600">{location.name}</h2>
            <p className="text-gray-600 mt-2">{location.description}</p>
          </div>
        ))}
      </section>

      {/* Interactive Map Placeholder */}
      <section className="mt-10 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Interactive Map</h2>
        <div className="bg-gray-200 w-full h-64 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">[Map Placeholder]</p>
        </div>
      </section>
    </div>
  );
};

export default Locations;
