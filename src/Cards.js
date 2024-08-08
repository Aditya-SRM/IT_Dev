import React from 'react';

const cardData = [
  {
    title: 'Card TItle 1',
    description: 'Keterangan pendek tentang card 1 di sini. Biasanya panjangnya dua sampai tiga baris, biar terlihat rapi.',
    image: 'https://picsum.photos/360/240?random=1',
  },
  {
    title: 'Card TItle 2',
    description: 'Keterangan pendek tentang card 2 di sini. Biasanya panjangnya dua sampai tiga baris, biar terlihat rapi.',
    image: 'https://picsum.photos/360/240?random=2',
  },
  {
    title: 'Card TItle 3',
    description: 'Keterangan pendek tentang card 3 di sini. Biasanya panjangnya dua sampai tiga baris, biar terlihat rapi.',
    image: 'https://picsum.photos/360/240?random=3',
  },
  {
    title: 'Card TItle 4',
    description: 'Keterangan pendek tentang card 3 di sini. Biasanya panjangnya dua sampai tiga baris, biar terlihat rapi.',
    image: 'https://picsum.photos/360/240?random=3',
  },
  {
    title: 'Card TItle 5',
    description: 'Keterangan pendek tentang card 2 di sini. Biasanya panjangnya dua sampai tiga baris, biar terlihat rapi.',
    image: 'https://picsum.photos/360/240?random=2',
  },
  {
    title: 'Card TItle 6',
    description: 'Keterangan pendek tentang card 2 di sini. Biasanya panjangnya dua sampai tiga baris, biar terlihat rapi.',
    image: 'https://picsum.photos/360/240?random=2',
  },
  
  
];

const Cards = () => {
  return (
    <div className='services-section drop-shadow-lg'>
      <br/>
      <h2 className="text-5xl text-white flex justify-start pl-4 mb-4">Spotlight on IT Support</h2>
      <div className="flex flex-wrap justify-center">
        {cardData.map((card, index) => (
          <div key={index} className="p-6 m-8 w-96 bg-white shadow-md rounded-xl">
            <picture className="rounded-lg overflow-hidden block">
              <img
                className=" hover:scale-125 ease-in duration-150"
                src={card.image}
                alt="Sample"
              />
            </picture>
            <h1 className="mt-4 mb-2 text-2xl font-bold text-black">{card.title}</h1>
            <p className="text-sm text-gray-600">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
