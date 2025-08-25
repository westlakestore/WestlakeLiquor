import React, { useState, useEffect } from 'react';
import { Phone, Clock, MapPin } from 'lucide-react';
import WestlakeLiquorLogo from './components/Logo';

const AgeVerificationModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-lg p-8 max-w-md w-full border border-amber-500 shadow-2xl">
        <div className="text-center">
          {/* Increased logo size */}
          <WestlakeLiquorLogo className="w-24 h-24 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-4">Age Verification Required</h2>
          <p className="text-gray-300 mb-6">
            You must be 21 years or older to view this website. Please confirm your age to continue.
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={onClose}
              className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-6 py-3 rounded-lg transition-colors duration-300"
            >
              I am 21 or older
            </button>
            <button
              onClick={() => window.location.href = 'https://google.com'}
              className="bg-gray-700 hover:bg-gray-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300"
            >
              Under 21
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductCard = ({ title, description, imageUrl }: { title: string; description: string; imageUrl: string }) => (
  <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-700">
    <div className="h-64 overflow-hidden">
      <img 
        src={imageUrl} 
        alt={title}
        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  </div>
);

const App = () => {
  const [showAgeVerification, setShowAgeVerification] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleAgeVerification = () => {
    setShowAgeVerification(false);
    localStorage.setItem('ageVerified', 'true');
  };

  useEffect(() => {
    const ageVerified = localStorage.getItem('ageVerified');
    if (ageVerified === 'true') {
      setShowAgeVerification(false);
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  const products = [
    {
      title: "Great selection of Wine",
      description: "Explore our wide variety of red, white, and sparkling wines from top vineyards around the world—perfect for any mood, meal, or celebration.",
      imageUrl: "https://www.eatingwell.com/thmb/zzGBb0QfRQSjGHX6Scvo7VDscu8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/5-most-popular-wines-adf91bc28ae94efa9d8eaa852ea7122f.jpg"
    },
    {
      title: "Whiskey",
      description: "From small-batch bourbon to aged scotch and spicy rye—we’ve got the good stuff!",
      imageUrl: "https://mybartender.com/wp-content/uploads/2023/09/best-selling-whiskey.png"
    },
    {
      title: "Craft Beer",
      description: "Local and international craft beers, IPAs, stouts, and seasonal brews.",
      imageUrl: "https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg"
    },
    {
      title: "Vodka",
      description: "Clean, crisp, and distilled to perfection—made from the finest ingredients for a smooth finish every time.",
      imageUrl: "https://assets.bonappetit.com/photos/663cdc3709730b874e26baad/4:3/w_4444,h_3333,c_limit/vodka-taste-test_LEDE_050824_0065_VOG_final.jpg"
    },
    {
      title: "Rum",
      description: "From dark and aged to spiced and golden, our rum selection brings bold, complex flavors perfect for mixing, sipping, or kicking back and relaxing.",
      imageUrl: "https://www.foodrepublic.com/img/gallery/whats-the-main-ingredient-needed-to-make-rum/intro-1727804844.jpg"
    },
    {
      title: "Gin",
      description: "From smooth and crisp to bold and flavorful, our gin selection has something for every kind of cocktail—or just a refreshing G&T.",
      imageUrl: "https://hips.hearstapps.com/hmg-prod/images/index-gin-6448207f792bd.jpg?crop=0.5xw:1xh;center,top&resize=1200:*"
    }
  ];

  return (
    <>
      <AgeVerificationModal isOpen={showAgeVerification} onClose={handleAgeVerification} />

      <div className="min-h-screen bg-gray-900 text-white">
        {/* Header */}
        <header className="bg-black shadow-lg sticky top-0 z-40">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              
              {/* Logo and text */}
              <div className="flex items-center space-x-4">
                <WestlakeLiquorLogo className="h-12 w-auto max-w-xs" />
                <p className="text-white text-xs sm:text-sm italic">
                  Your go-to spot for wines, spirits, and craft drinks.
                </p>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8">
                <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-amber-500 transition-colors duration-300">Home</button>
                <button onClick={() => scrollToSection('products')} className="text-gray-300 hover:text-amber-500 transition-colors duration-300">Products</button>
                <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-amber-500 transition-colors duration-300">Contact</button>
                <button onClick={() => scrollToSection('location')} className="text-gray-300 hover:text-amber-500 transition-colors duration-300">Location</button>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-white hover:text-amber-500 focus:outline-none text-2xl"
                >
                  ☰
                </button>
              </div>
            </div>

            {/* Mobile Dropdown with smooth slide down/up */}
            <div className={`md:hidden overflow-hidden transition-all duration-500 ${isMenuOpen ? 'max-h-60 mt-2' : 'max-h-0'}`}>
              <div className="bg-gray-800 rounded-lg shadow-lg">
                <button onClick={() => scrollToSection('home')} className="block w-full text-left px-4 py-2 text-gray-300 hover:bg-amber-500 hover:text-black">Home</button>
                <button onClick={() => scrollToSection('products')} className="block w-full text-left px-4 py-2 text-gray-300 hover:bg-amber-500 hover:text-black">Products</button>
                <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-2 text-gray-300 hover:bg-amber-500 hover:text-black">Contact</button>
                <button onClick={() => scrollToSection('location')} className="block w-full text-left px-4 py-2 text-gray-300 hover:bg-amber-500 hover:text-black">Location</button>
              </div>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <section
          id="home"
          className="relative py-20 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(17,24,39,0.8)), url('https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Westlake Liquor
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Your destination for a wide selection of wines, spirits, and craft beverages. We also carry tobacco products, cold drinks, and all the snacks you love! Everything you need, all in one place!
            </p>
            <button 
              onClick={() => scrollToSection('products')}
              className="bg-amber-500 hover:bg-amber-600 text-black font-bold py-4 px-8 rounded-lg text-lg
              transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Explore Our Product Selection
            </button>
          </div>
        </section>

        {/* ... Remaining sections (Contact, Products, Location, Footer) remain unchanged ... */}
      </div>
    </>
  );
};

export default App;
