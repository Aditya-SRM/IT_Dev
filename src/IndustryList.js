import React from 'react';
import 'tailwindcss/tailwind.css';

const industries = [
  { name: 'Banking', icon: '💵' },
  { name: 'Capital Markets', icon: '📈' },
  { name: 'Communications, Media, and Information Services', icon: '📡' },
  { name: 'Consumer Goods and Distribution', icon: '🛒' },
  { name: 'Education', icon: '🎓' },
  { name: 'Energy, Resources, and Utilities', icon: '🔌' },
  { name: 'Healthcare', icon: '🩺' },
  { name: 'High Tech', icon: '💻' },
  { name: 'Insurance', icon: '🛡️' },
  { name: 'Life Sciences', icon: '🔬' },
  { name: 'Manufacturing', icon: '🏭' },
  { name: 'Public Services', icon: '🏛️' },
  { name: 'Retail', icon: '🛍️' },
  { name: 'Travel and Logistics', icon: '✈️' },
];

const IndustryList = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 drop-shadow-lg">
      <h1 className="text-4xl font-bold text-black mb-12">
        Select your industry. Discover our impact.
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {industries.map((industry, index) => (
          <div
            key={index}
            className="flex items-center p-6 bg-white shadow-md rounded-lg transition-transform transform hover:scale-105 w-full gap-6"
          >
            <span className="text-4xl">{industry.icon}</span>
            <span className="relative text-lg text-black font-semibold group flex-grow">
              {industry.name}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
            </span>
            <span className="text-xl text-blue-500">&#8594;</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustryList;
