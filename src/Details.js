import React from 'react';
import './Main.css';

function Details() {
  const platforms = [
    { title: 'IT_Support OMNISTORE™', description: 'The Foundation for Future Commerce. Unified. Ubiquitous. Intelligent.' },
    { title: 'IT_Support ADD™', description: 'Modern and open technology platforms for clinical research and drug development' },
    { title: 'IT_Support BaNCS™', description: 'Growth and Transformation in Insurance Enabled by Intelligent, Digital Solutions' },
    { title: 'IT_Support BFSI Platforms', description: 'Power the Banking, Financial Services, Insurance Customer Journey.' },
    { title: 'IT_Support Chroma™', description: 'Harness talent, collaborative work culture, invisible HR.' },
    { title: 'IT_Support Customer Intelligence™', description: 'Deliver personalized experiences to build loyalty and drive growth.' },
    { title: 'IT_Support ERP on Cloud', description: 'Rich experience, future ready, agile and flexible, always connected.' },
    { title: 'IT_Support HOBS™', description: 'Innovate, create, and industry-leading digital experiences.' },
    { title: 'IT_Support HOBS™', description: 'Innovate, create, and industry-leading digital experiences.' },
  ];

  return (
    <div className="bg-white text-black p-5 md:p-8">
      <h1 className="text-3xl font-bold mb-6">Products and Platforms</h1>
      <h2 className="text-xl mb-8">Cutting edge solutions to power up your business.</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {platforms.map((platform, index) => (
          <div
            className="border-b pb-6 transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
            key={index}
          >
            <h3 className="text-xl font-semibold mb-3">{platform.title}</h3>
            <p className="text-base mb-3">{platform.description}</p>
            <span className="text-2xl text-blue-600 hover:text-blue-800 transition-colors duration-300">&#8594;</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Details;
