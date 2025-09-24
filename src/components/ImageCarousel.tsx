inimport React, { useState, useEffect } from 'react';
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
      url: "/WestlakeLiquorBroomfieldWine1.jpg",
      alt: "Wine selection at Westlake Liquor",
      caption: "Premium Wine Selection"
    },
    {
      url: "/WestlakeLiquorBroomfieldBeer.jpg",
      alt: "Craft beer collection",
      caption: "Local & International Craft Beers"
    },
    {
      url: "/WestlakeLiquorBroomfieldWhiskey1.jpg",
      alt: "Whiskey and spirits display",
      caption: "Premium Spirits & Whiskeys"
    },
    {
      url: "/WestlakeLiquorBroomfieldVodka1.jpg",
      alt: "Liquor store interior",
      caption: "Wide Selection of Quality Products"
    },
    {
      url: "/WestlakeLiquorBroomfieldGin.jpg",
      alt: "Vodka and gin selection",
      caption: "Premium Vodkas & Gins"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex =>
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

        {/* Hero text on top for mobile */}
        {isHero && (
          <div className="text-center mb-4 sm:mb-6 px-2 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent drop-shadow-lg">
              Westlake Liquor
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white max-w-3xl mx-auto drop-shadow-sm">
              Welcome to Westlake Liquor in Broomfield, CO where we offer a wide selection of wines, spirits, craft beers, tobacco products, cold drinks, and snacks—all in one convenient location.
            </p>

            {/* Hero button */}
            <button 
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-4 sm:mt-6 md:mt-8 bg-amber-500 hover:bg-amber-600 text-black font-bold py-2 px-4 sm:py-3 sm:px-6 md:py-4 md:px-8 rounded-lg text-sm sm:text-base md:text-lg transition-all duration-300 hover:scale-105 shadow-lg drop-shadow-md"
            >
              Explore Our Product Selection
            </button>
          </div>
        )}

        <div className={`relative ${isHero ? 'w-full' : 'max-w-4xl mx-auto'}`}>
          <div className={`relative overflow-hidden shadow-2xl ${isHero ? 'h-[50vh] sm:h-[60vh] md:h-[80vh]' : 'h-96 md:h-[500px] rounded-lg'}`}>
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />

                {/* Gradient overlay shorter for better image visibility */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 sm:h-1/4 md:h-1/4 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                {/* Slide captions for non-hero slides */}
                {!isHero && (
                  <div className="absolute left-6 right-6 bottom-6">
                    <h3 className="text-white text-lg md:text-2xl font-bold drop-shadow-lg bg-black/40 backdrop-blur-sm p-2 rounded-md">
                      {image.caption}
                    </h3>
                  </div>
                )}
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
          <div className={`flex justify-center space-x-2 ${isHero ? 'absolute bottom-4 left-1/2 transform -translate-x-1/2' : 'mt-6'}`}>
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-amber-500 scale-125' : 'bg-gray-400 hover:bg-gray-300'
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
