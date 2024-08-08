import React, { useState, useEffect } from 'react';
import './ImageCarousel.css'; 

const ImageCarousel = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const images = ['image3.jpg', 'image4.jpg', 'image5.jpg', 'image6.jpg'];

    useEffect(() => {
        if (isPaused) return;
        
        const intervalId = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 5000);

        return () => clearInterval(intervalId);
    }, [images.length, isPaused]);

    const nextImage = () => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
    };

    return (
        <div className="services-section mt-10 flex flex-col items-center justify-center h-full py-20">
            <h1 className="text-4xl font-bold mb-4 text-center fade-in py-8">
                Welcome to the IT support team
            </h1>
            
            <div 
                className="relative w-full max-w-[70%] max-h-[10%]"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <img 
                    src={images[currentImage]} 
                    alt="IT Support" 
                    className="w-full h-full object-cover rounded-lg shadow-lg transition-opacity duration-1000" 
                />
                
                <div className="absolute bottom-0 right-0 flex space-x-2 p-2">
                    <button onClick={prevImage} className="p-2 bg-gray-300 rounded-full hover:bg-gray-400">
                        &lt;
                    </button>
                    <button onClick={nextImage} className="p-2 bg-gray-300 rounded-full hover:bg-gray-400">
                        &gt;
                    </button>
                </div>

                <div className="absolute bottom-0 left-0 flex space-x-2 p-2">
                    {images.map((_, index) => (
                        <span
                            key={index}
                            className={`p-1 rounded-full ${index === currentImage ? 'bg-gray-800' : 'bg-gray-400'}`}
                        ></span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImageCarousel;
