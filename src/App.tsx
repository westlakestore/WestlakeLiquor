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
      imageUrl: "https://www.eatingwell.com/thmb/zzGBb0QfRQSjGHX6Scvo7VDscu8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/5-most-popular-wines-adf91bc28ae94efa9d8eaa852ea7122f.jpg",
      altText: "Bottles of red and white wine on display at Westlake Liquor in Broomfield, CO"
    },
    {
      title: "Whiskey",
      description: "From small-batch bourbon to aged scotch and spicy rye—we’ve got the good stuff!",
      imageUrl: "https://mybartender.com/wp-content/uploads/2023/09/best-selling-whiskey.png",
      altText: "Assorted whiskey bottles"
    },
    {
      title: "Craft Beer",
      description: "Local and international craft beers, IPAs, stouts, and seasonal brews.",
      imageUrl: "https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg",
      altText: "Selection of craft beers in bottles and cans"
    },
    {
      title: "Vodka",
      description: "Clean, crisp, and distilled to perfection—made from the finest ingredients for a smooth finish every time.",
      imageUrl: "https://assets.bonappetit.com/photos/663cdc3709730b874e26baad/4:3/w_4444,h_3333,c_limit/vodka-taste-test_LEDE_050824_0065_VOG_final.jpg",
      altText: "Vodka bottles on display at Westlake Liquor"
    },
    {
      title: "Rum",
      description: "From dark and aged to spiced and golden, our rum selection brings bold, complex flavors perfect for mixing, sipping, or kicking back and relaxing.",
      imageUrl: "https://www.foodrepublic.com/img/gallery/whats-the-main-ingredient-needed-to-make-rum/intro-1727804844.jpg",
      altText: "Variety of rum bottles on shelf at Westlake Liquor"
    },
    {
      title: "Gin",
      description: "From smooth and crisp to bold and flavorful, our gin selection has something for every kind of cocktail—or just a refreshing G&T.",
      imageUrl: "https://hips.hearstapps.com/hmg-prod/images/index-gin-6448207f792bd.jpg?crop=0.5xw:1xh;center,top&resize=1200:*",
      altText: "Selection of gin bottles available at Westlake Liquor"
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

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12 text-amber-500">Store Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gray-900 rounded-lg shadow-lg border border-gray-700">
                <Clock className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4 text-white">Store Hours</h3>
                <div className="space-y-2 text-gray-300">
                  <p>Daily: 9:00 AM - 11:00 PM</p>
                </div>
              </div>
              
              <div className="text-center p-6 bg-gray-900 rounded-lg shadow-lg border border-gray-700">
                <Phone className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4 text-white">Contact Us</h3>
                <a 
                  href="tel:+13034699795" 
                  className="inline-block bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 px-6 rounded-lg text-lg transition-all duration-300 hover:scale-105 shadow-lg mb-2"
                >
                  📞 Call (303) 469-9795
                </a>
              </div>
              
              <div className="text-center p-6 bg-gray-900 rounded-lg shadow-lg border border-gray-700">
                <MapPin className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4 text-white">Visit Us</h3>
                <a 
                  href="https://maps.google.com/maps?q=12920+Lowell+Blvd,+Broomfield,+CO+80020" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 px-6 rounded-lg text-lg transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  🗺️ Get Directions
                </a>
                <p className="text-gray-400 mt-2">12920 Lowell Blvd, Broomfield, CO 80020</p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-16 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-4 text-amber-500">Our Products</h2>
            <p className="text-center text-gray-400 mb-12 text-lg">
              Check out our handpicked selection of best-selling spirits and drinks—favorites you’re sure to love!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <ProductCard
                  key={index}
                  title={product.title}
                  description={product.description}
                  imageUrl={product.imageUrl}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section id="location" className="py-16 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12 text-amber-500">Find Us</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">Conveniently Located</h3>
                <p className="text-gray-300 text-lg">
                  Visit our store in Broomfield, easily accessible by car or public transportation. 
                  We offer convenient parking and are located near major shopping and dining areas.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-6 h-6 text-amber-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white font-semibold">Address</p>
                      <p className="text-gray-300">12920 Lowell Blvd Broomfield, CO 80020</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="w-6 h-6 text-amber-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white font-semibold">Phone</p>
                      <p className="text-gray-300">(303) 469-9795</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900 p-4 rounded-lg shadow-lg border border-gray-700">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3059.484985176904!2d-105.03635908753765!3d39.93054017140317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b8a7f74b206dd%3A0x706f5d671ab0d5e6!2s12920%20Lowell%20Blvd%2C%20Broomfield%2C%20CO%2080020!5e0!3m2!1sen!2sus!4v1755891514982!5m2!1sen!2sus"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  title="Westlake Liquor Location"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black py-8 mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
            &copy; {new Date().getFullYear()} Westlake Liquor. All rights reserved. Please Drink Responsibly.
          </div>
        </footer>
      </div>
    </>
  );
};

export default App;
