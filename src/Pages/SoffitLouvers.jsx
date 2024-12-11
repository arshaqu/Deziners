import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar';
import Adhams from '../Assets/adams1.png';
import Footer from './Components/Footer';


import Image1 from '../Assets/Image15.jpg'

import soffit1 from '../Assets/Soffit/soffit1.png'
import soffit2 from '../Assets/Soffit/soffit2.png'
import soffit3 from '../Assets/Soffit/soffit3.png'
import soffit4 from '../Assets/Soffit/soffit4.png'




      const ImageZoomModal = ({ image, alt, productName, isOpen, onClose }) => {
        if (!isOpen) return null;
    
        return (
            <div
                className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
                onClick={onClose}
            >
                <div className="relative w-full max-w-2xl bg-gray-100 rounded-lg shadow-lg p-6">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-black bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-300 transition-opacity"
                    >
                        ×
                    </button>
                    <img
                        src={image}
                        alt={alt}
                        className="w-full h-auto max-h-[75vh] object-contain rounded-md border-4 border-gray-400 mb-4"
                        onClick={(e) => e.stopPropagation()}
                    />
                    <div className="text-center text-lg font-semibold text-gray-700">
                        {productName}
                    </div>
                </div>
            </div>
        );
    };

function SoffitLouvers() {
    const [selectedImage, setSelectedImage] = useState(null);
    
//     const categories = [
//       "12cm X 23 mm X 2.5 m ",
//       "16cm X 8 mm X 3.5 m ",
//       "30cm X 5 mm X 2.9 m ",
//   ];

  const productSections = [
    // {
    //   size: "12cm X 23 mm X 2.5 m ",
    //   products: [
    //     { id: "AD B_5", image: charcole12cm4_1 , width: 130, height: 330 },
    
    //   ]
    // },
    // {
    //   size: "16cm X 8 mm X 3.5 m ",
    //   products: [
    //     { id: "ADS34FJ1", image: charcole16cm1 ,width: 160, height: 330},

        

        
    //   ]
    // },
    {
      size: "30cm X 12 mm X 3.05 m ",
      products: [
        {id: "SO 1007",  image: soffit1 , width: 180, height: 330 },
        { id: "SO 1006", image: soffit2 , width: 180, height: 330 },
        {id: "15002",  image: soffit3 , width: 180, height: 330 },
        { id: "15007", image: soffit4, width: 180, height: 330  },




      ]
    }
  ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleImageClick = (image, productId) => {
        setSelectedImage({
            image: image,
            alt: `Product ${productId}`,
            name: productId,
        });
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    
    const scrollToSection = (categoryIndex) => {
      const sectionId = `section-${categoryIndex}`;
      const element = document.getElementById(sectionId);
      if (element) {
        const navbarHeight = 100; // Adjust based on your navbar's height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
    
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    };
    
    return (
      <div className="min-h-screen bg-gray-800">
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
              className="h-24 mb-1 lg:h-20 md:h-12 sm:h-12 xs:h-[50px]"
            />
            <div
              style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.9)' }}
              className="bg-red-600 shadow-custom-lg h-24 sm:h-12 xs:h-10 flex items-center"
            >
              <h1 className="text-white md:h-18 text-4xl md:text-3xl sm:text-xl xs:text-xl montserrat ml-2">
                SOFFIT LOUVERS
              </h1>
            </div>
          </div>
        </div>
    
        {/* <div className="max-w-4xl mx-auto px-8 md:px-12 py-6 montserrat">
          <h1 style={{ fontSize: '35px' }} className="text-center text-white">
            CATEGORIES
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 max-w-sm lg:max-w-none mt-6 mx-auto">
            {categories.map((category, index) => (
              <div
                key={category}
                className="transform hover:scale-[1.02] transition-transform duration-200 cursor-pointer"
                onClick={() => scrollToSection(index)}
              >
                <div className="relative bg-white shadow-lg hover:shadow-xl transition-shadow duration-200 rounded-lg">
                  <div className="h-14 flex items-center justify-center px-6 relative z-10">
                    <span style={{fontSize:'15px'}}  className="text-gray-700 text-lg tracking-wider font-light">
                      {category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}
    
        {/* Product Sections */}
        <div  className="max-w-7xl mx-auto px-4 py-8 bg-gray-800">
          {productSections.map((section, index) => (
            <div id={`section-${index}`} key={index} className="mb-12">
              {/* Size Header */}
              <div
                style={{ backgroundColor: 'red' }}
                className="bg-gray-800 shadow-md mb-6 max-w-sm mx-auto lg:max-w-none montserrat"
              >
                <div className="py-2 px-4 text-center text-white">
                  {section.size}
                </div>
              </div>
    
              {/* Product Grid */}
              <div  className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-sm lg:max-w-none mx-auto montserrat">
                {section.products.map((product, productIndex) => (
                  <div
                    key={productIndex}
                    className="bg-white p-3  shadow-lg flex flex-col items-center"
                  >
                    <img
                      src={product.image}
                      alt={`Product ${product.id}`}
                      className="object-cover cursor-pointer"
                      style={{ width: `${product.width}px`, height: `${product.height}px` }}
                      onClick={() =>
                        handleImageClick(product.image, product.id)
                      }
                    />
                    <div className="text-center font-medium text-sm mt-2">
                      {product.id}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
    
        {/* Image Zoom Modal */}
        <ImageZoomModal
          image={selectedImage?.image}
          alt={selectedImage?.alt}
          productName={selectedImage?.name}
          isOpen={!!selectedImage}
          onClose={closeModal}
        />
    
        <Footer />
      </div>
    );
}

export default SoffitLouvers
