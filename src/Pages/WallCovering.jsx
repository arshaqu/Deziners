import { Link } from 'react-router-dom'; // Import Link
import React, { useEffect } from 'react'
import Image1 from '../Assets/image8.jpg'
import Adhams from '../Assets/adams1.png'
import charcole from '../Assets/charcole2.jpeg'
import wpclouver from '../Assets/pvcLouvers.jpg'
import softlouvers from '../Assets/Celling Design Car Porch.jpeg'
import pvcflued from '../Assets/pvcfluedlouvers.jpg'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar';


function WallCovering() {
    const products = [
        {
          id: 1,
          name: 'CHARCOAL LOUVERS',
          image: charcole,
          link: '/charcoal',
          featured: true
        },
        {
          id: 2,
          name: 'PVC LOUVERS',
          image: wpclouver,
          link: '/pvc_louvers',
        },
        {
          id: 3,
          name: 'WPVC FLUTED LOUVERS',
          image: pvcflued,
          link: '/wpvc_louvers',
        },
        {
          id: 4,
          name: 'SOFFIT LOUVERS',
          image: softlouvers,
          link: '/soffit_louvers',
        }
    ];

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);


    return (
      <div className="min-h-screen bg-neutral-100">
      <Navbar />
      {/* Hero Section */}
      <div className="relative mb-12">
        <img
          src={Image1}
          alt="Luxury interior wall covering"
          className="w-full h-[80vh] object-cover"
        />
        <div className="absolute bottom-6 left-8">
          <img
            src={Adhams}
            alt="Adhams logo"
            className="h-24 mb-1 lg:h-20 md:h-12 sm:h-12 xs:h-[50px]" // Fixed xs breakpoint syntax
          />
          <div
            style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.9)' }}
            className="bg-red-600 shadow-custom-lg h-24 sm:h-12 xs:h-10 flex items-center"
          >
            <h1 className="text-white md:h-18 text-4xl md:text-3xl sm:text-xl xs:text-xl montserrat ml-2">
              WALL COVERING
            </h1>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {products.map((product) => (
            <Link to={product.link} key={product.id}> {/* Wrap product in Link */}
              <div
                className="group cursor-pointer overflow-hidden relative"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-72 object-cover md:transition-transform md:group-hover:scale-105" // Hover only on md and up
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center md:opacity-0 md:group-hover:opacity-100 opacity-100 md:transition-opacity md:duration-300">
                  {/* Text always visible on mobile, hover effect on desktop */}
                  <h3 className="text-white text-xl font-thin">
                    {product.name}
                  </h3>
                </div>
              </div>
            </Link> // Closing Link
          ))}
        </div>
      </div>

      <Footer />
    </div>
    );
}

export default WallCovering;
