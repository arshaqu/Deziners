import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import Image2 from '../Assets/Image6.jpg';
import Image3 from '../Assets/Image5.jpg';
import Adham from '../Assets/Adhamss.png';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import wallcovering from '../Assets/Wallcovering.jpg';
import ExteriorCladding from '../Assets/InteriorClading.jpg';
import Falseceiling from '../Assets/Falseceiling.jpg';
import exteriorlaminates from '../Assets/exteriorLaminates.jpg';
import WhiteMoldings from '../Assets/WhiteMoldings.jpg';
import Laminates from '../Assets/Laminates.jpg';

function Adhams() {
  const navigate = useNavigate(); // Initialize navigate function

  const categories = [
    { title: 'WALL COVERING', image: wallcovering, path: '/wallcovering' },
    { title: 'EXTERIOR GLADDING', image: ExteriorCladding, path: '/exteriorcladding' },
    { title: 'FALSE CEILING', image: Falseceiling, path: '/falseceiling' },
    { title: 'EXTERIOR LAMINATES', image: exteriorlaminates, path: '/exteriorlaminates' },
    { title: 'WHITE MOLDINGS', image: WhiteMoldings, path: '/whitemoldings' },
    { title: 'LAMINATES', image: Laminates, path: '/laminates' },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
    <div className="relative z-20"> {/* Ensures Navbar is on top */}
      <Navbar />
    </div>
  
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative w-full h-screen">
        <div className="absolute inset-0 z-0"> {/* Sets a lower z-index for the overlay */}
          <img
            src={Image3}
            alt="Modern Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-gray-800 montserrat">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
            Transform Your Space
          </h1>
          <p className="text-xl md:text-2xl text-center max-w-2xl mx-4 montserrat text-white">
            Premium Interior Design Solutions for Your Home and Office
          </p>
        </div>
      </div>
    </div>
  

      {/* Adhams section */}
      <section className="relative w-full">
        <div className="bg-white w-full py-8 px-6 shadow-sm">
          <div className="flex justify-start items-center">
            <img
              src={Adham}
              alt="Adhams Logo"
              className="h-12 md:h-48 object-contain w-full mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="relative w-full h-screen">
        <div className="absolute inset-0">
          <img
            src={Image2}
            alt="Modern Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 montserrat text-gray-400" >
            Our Catagories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="group cursor-pointer overflow-hidden" onClick={() => navigate(category.path)}>
                <div className="relative">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h3 className="text-white text-xl font-semibold montserrat">
                      {category.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Design Your Vision, Inside and Out?
          </h2>
          <p className="text-xl mb-8">
          Discover the Difference Today!
          </p>
          <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Get in Touch
          </button>
        </div>
      </section>
      <Footer />
    </div>
    
  );
}

export default Adhams;
