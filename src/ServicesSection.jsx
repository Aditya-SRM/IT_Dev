import React, { useState } from 'react';
import './ServicesSection.css'; 

const services = [
  {
    title: 'Artificial Intelligence',
    image: 'image3.jpg', 
  },
  {
    title: 'Cloud',
    image: 'image4.jpg', 
  },
  {
    title: 'Cognitive Business Operations',
    image: 'image1.jpeg', 
  },
  {
    title: 'Consulting',
    image: 'image5.jpg', 
  },
  {
    title: 'Service 5',
    image: 'image6.jpg', 
  },
  {
    title: 'Service 6',
    image: 'image7.jpg', 
  },
];

const ServicesSection = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedServices = showAll ? services : services.slice(0, 4);

  const handleButtonClick = () => {
    setShowAll(!showAll);
  };
  // flex flex-col items-center p-8  min-h-screen
  return (
    <div className="services-section  drop-shadow-lg ">
      <h2 className='text-xl text-white flex justify-start pl-1 '>SERVICES</h2>
      <h1 className='flex justify-start pl-1'>Transform your business with advanced technologies</h1>
      <div className='flex flex-col items-center p-5'>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {displayedServices.map((service, index) => (
          <div key={index} className="service-card relative bg-cover bg-center rounded-lg shadow-md overflow-hidden h-60 transition-transform transform hover:scale-105 "
           style={{ backgroundImage: `url(${service.image})` }}>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">{service.title}</div>
          </div>
          
        ))}
      </div>
      </div>
      <br/>
      <br/>
      <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 transition-colors duration-300" onClick={handleButtonClick}>
        {showAll ? 'Show less topics' : 'View all topics'}
      </button>
    </div>
  );
};

export default ServicesSection;




