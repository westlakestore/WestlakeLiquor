import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselImage {
  url: string;
  alt: string;
  caption: string;
}

const ImageCarousel = ({ isHero = false }: { isHero?: boolean }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images: CarouselImage[] = [
    {
      url: "/WestlakeLiquorBroomfieldWine.png",
      alt: "Wine selection at Westlake Liquor",
      caption: "Premium Wine Selection"
    },
    {
      url: "/WestlakeLiquorBroomfieldBeer.png",
      alt: "Craft beer collection",
      caption: "Local & International Craft Beers"
    },
    {
      url: "/WestlakeLiquorBroomfieldWhiskey.png",
      alt: "Whiskey and spirits display",
      caption: "Premium Spirits & Whiskeys"
    },
    {
      url: "/WestlakeLiquorBroomfieldVodka1.png",
      alt: "Liquor store interior",
      caption: "Wide Selection of Quality Products"
    },
    {
      url: "/WestlakeLiquorBroomfieldVodka.png",
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
    <section className={isHero ? "relative" : "py-16 bg-gray-900"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!isHero && (
          <h2 className="text-4xl font-bold text-center mb-12 text-amber-500">
            Experience Westlake Liquor
          </h2>
        )}
        
        <div className={`relative ${isHero ? 'w-full' : 'max-w-4xl mx-auto'}`}>
          {/* Main carousel container */}
          <div className={`relative overflow-hidden shadow-2xl ${
            isHero ? 'h-[70vh] md:h-[80vh]' : 'h-96 md:h-[500px] rounded-lg'
          }`}>
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
                <div className={`absolute left-6 right-6 ${isHero ? 'bottom-20' : 'bottom-6'}`}>
                  <h3 className="text-white text-xl md:text-2xl font-bold drop-shadow-lg">
                    {image.caption}
                  </h3>
                </div>
              </div>
            ))}
            
            {/* Hero content overlay */}
            {isHero && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent drop-shadow-2xl">
                    Westlake Liquor
                  </h1>
                  <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto drop-shadow-lg">
                    Welcome to Westlake Liquor in Broomfield, CO where we offer a wide selection of wines, spirits, craft beers, tobacco products, cold drinks, and snacks—all in one convenient location.
                  </p>
                  <button 
                    onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-amber-500 hover:bg-amber-600 text-black font-bold py-4 px-8 rounded-lg text-lg
                    transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    Explore Our Product Selection
                  </button>
                </div>
              </div>
            )}
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
          <div className={`flex justify-center space-x-2 ${isHero ? 'absolute bottom-4 left-1/2 transform -translate-x-1/2' : 'mt-6'}`}>
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