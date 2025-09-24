import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselImage {
  url: string;
  alt: string;
  caption: string;
}

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images: CarouselImage[] = [
    {
      url: "https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg",
      alt: "Wine selection at Westlake Liquor",
      caption: "Premium Wine Selection"
    },
    {
      url: "https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg",
      alt: "Craft beer collection",
      caption: "Local & International Craft Beers"
    },
    {
      url: "https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg",
      alt: "Whiskey and spirits display",
      caption: "Premium Spirits & Whiskeys"
    },
    {
      url: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg",
      alt: "Liquor store interior",
      caption: "Wide Selection of Quality Products"
    },
    {
      url: "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg",
      alt: "Vodka and gin selection",
      caption: "Premium Vodkas & Gins"
    }
  ];

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-amber-500">
          Experience Westlake Liquor
        </h2>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Main carousel container */}
          <div className="relative h-96 md:h-[500px] overflow-hidden rounded-lg shadow-2xl">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Caption */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white text-xl md:text-2xl font-bold drop-shadow-lg">
                    {image.caption}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dot indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-amber-500 scale-125'
                    : 'bg-gray-400 hover:bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;