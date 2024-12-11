import React, { useEffect, useState } from 'react'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Image1 from '../Assets/charcoal.jpg'
import Adhams from '../Assets/adams1.png'

import charcole12cm4_1 from '../Assets/charcole/12cm/charcole12cm4.1.jpg'
import charcole12cm4_2 from '../Assets/charcole/12cm/charcole12cm4.2.jpg'
import charcole12cm5_1 from '../Assets/charcole/12cm/charcole12cm5.1.jpg'
import charcole12cm5_2 from '../Assets/charcole/12cm/charcole12cm5.2.jpg'
import charcole12cm6_1 from '../Assets/charcole/12cm/charcole12cm6.1.jpg'
import charcole12cm7_1 from '../Assets/charcole/12cm/charcole12cm7.1.jpg'
import charcole12cm7_2 from '../Assets/charcole/12cm/charcole12cm7.1.jpg'
import charcole12cm8_1 from '../Assets/charcole/12cm/charcole12cm8.1.jpg'
import charcole12cm8_2 from '../Assets/charcole/12cm/charcole12cm8.2.jpg'
import charcole12cm9_1 from '../Assets/charcole/12cm/charcole12cm9.1.jpg'
import charcole12cm9_2 from '../Assets/charcole/12cm/charcole12cm9.2.jpg'
import charcole12cm9_3 from '../Assets/charcole/12cm/charcole12cm9.3.jpg'
import charcole12cm10_1 from '../Assets/charcole/12cm/charcole12cm10.1.jpg'
import charcole12cm10_2 from '../Assets/charcole/12cm/charcole12cm10.2.jpg'
import charcole12cm10_3 from '../Assets/charcole/12cm/charcole12cm10.3.jpg'
import charcole12cm11_1 from '../Assets/charcole/12cm/charcole12cm11.1.jpg'
import charcole12cm11_2 from '../Assets/charcole/12cm/charcole12cm11.2.jpg'
import charcole12cm11_3 from '../Assets/charcole/12cm/charcole12cm11.3.jpg'
import charcole12cm12_1 from '../Assets/charcole/12cm/charcole12cm12.1.jpg'
import charcole12cm12_2 from '../Assets/charcole/12cm/charcole12cm12.2.jpg'
import charcole12cm13_1 from '../Assets/charcole/12cm/charcole12cm13.1.jpg'
import charcole12cm13_2 from '../Assets/charcole/12cm/charcole12cm13.2.jpg'
import charcole12cm14_1 from '../Assets/charcole/12cm/charcole12cm14.1.jpg'
import charcole12cm14_2 from '../Assets/charcole/12cm/charcole12cm14.2.jpg'
import charcole12cm14_3 from '../Assets/charcole/12cm/charcole12cm14.3.jpg'
import charcole12cm15_1 from '../Assets/charcole/12cm/charcole12cm15.1.jpg'
import charcole12cm15_2 from '../Assets/charcole/12cm/charcole12cm15.2.jpg'
import charcole12cm15_3 from '../Assets/charcole/12cm/charcole12cm15.3.jpg'
import charcole12cm16_1 from '../Assets/charcole/12cm/charcole12cm16.1.jpg'
import charcole12cm16_2 from '../Assets/charcole/12cm/charcole12cm16.2.jpg'


import charcole16cm1 from '../Assets/charcole/12cm/charcole16cm1.png'
import charcole16cm1_1 from '../Assets/charcole/12cm/charcole16cm1.1.png'
import charcole16cm2_1 from '../Assets/charcole/12cm/charcole16cm2.1.png'
import charcole16cm2_2 from '../Assets/charcole/12cm/charcole16cm2.2.png'
import charcole16cm3_1 from '../Assets/charcole/12cm/charcole16cm3.1.png'
import charcole16cm3_2 from '../Assets/charcole/12cm/charcole16cm3.2.png'
import charcole16cm3_3 from '../Assets/charcole/12cm/charcole16cm3.3.png'
// import charcole16cm4_1 from '../Assets/charcole/12cm/charcole16cm4.1.jpg'
// import charcole16cm4_2 from '../Assets/charcole/12cm/charcole16cm4.2.jpg'
// import charcole16cm4_3 from '../Assets/charcole/12cm/charcole16cm4.3.jpg'


import charcole30cm1 from '../Assets/charcole/12cm/charcole30cm1.jpg'
import charcole30cm2 from '../Assets/charcole/12cm/charcole30cm2.jpg'
import charcole30cm3 from '../Assets/charcole/12cm/charcole30cm3.jpg'
import charcole30cm4 from '../Assets/charcole/12cm/charcole30cm4.jpg'
import charcole30cm5 from '../Assets/charcole/12cm/charcole30cm5.jpg'
import charcole30cm6 from '../Assets/charcole/12cm/charcole30cm6.jpg'
import charcole30cm7 from '../Assets/charcole/12cm/charcole30cm7.jpg'
import charcole30cm8 from '../Assets/charcole/12cm/charcole30cm8.jpg'
import charcole30cm9 from '../Assets/charcole/12cm/charcole30cm9.jpg'
import charcole30cm10 from '../Assets/charcole/12cm/charcole30cm10.jpg'
import charcole30cm11 from '../Assets/charcole/12cm/charcole30cm11.jpg'
import charcole30cm12 from '../Assets/charcole/12cm/charcole30cm12.jpg'
import charcole30cm13 from '../Assets/charcole/12cm/charcole30cm13.jpg'





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
    
    function Charcoal() {

      
        const [selectedImage, setSelectedImage] = useState(null);
    
        const categories = [
          "12cm X 23 mm X 2.5 m ",
          "16cm X 8 mm X 3.5 m ",
          "30cm X 5 mm X 2.9 m ",
      ];

      const productSections = [
        {
          size: "12cm X 23 mm X 2.5 m ",
          products: [
            { id: "AD B_5", image: charcole12cm4_2 , width: 130, height: 330 },
            { id: "AD B-9", image: charcole12cm4_1 , width: 130, height: 330 },

            { id: "AD 308-9", image: charcole12cm5_1 , width: 130, height: 330  },
            { id: "AD 308A-11", image: charcole12cm5_2 , width: 130, height: 330  },
            { id: "ADS34FJ", image: charcole12cm6_1 , width: 130, height: 330  },
            { id: "ADS34FJ", image: charcole12cm7_1 , width: 130, height: 330  },
            { id: "ADS34FJ", image: charcole12cm7_2 , width: 130, height: 330  },
            { id: "ADS34FJ", image: charcole12cm8_1 , width: 130, height: 330  },
            { id: "ADS34FJ", image: charcole12cm8_2 , width: 130, height: 330  },
            { id: "ADS34FJ", image: charcole12cm9_1 , width: 130, height: 330  },
            { id: "ADS34FJ", image: charcole12cm9_2 , width: 130, height: 330  },
            { id: "ADS34FJ", image: charcole12cm9_3 , width: 130, height: 330  },
            { id: "ADS34FJ", image: charcole12cm10_1 , width: 130, height: 330  },
            { id: "ADS34FJ", image: charcole12cm10_2 , width: 130, height: 330  },
            { id: "ADS34FJ", image: charcole12cm10_3 , width: 130, height: 330  },
            { id: "ADS34FJ", image: charcole12cm11_1 , width: 130, height: 330  },
            { id: "ADS34FJ", image: charcole12cm11_2 , width: 130, height: 330  },
            { id: "ADS34FJ", image: charcole12cm11_3 , width: 130, height: 330  },
            { id: "ADS34FJ", image: charcole12cm12_1 , width: 130, height: 330  },
            { id: "ADS34FJ", image: charcole12cm12_2 , width: 130, height: 330  },
            { id: "ADS34FJ", image: charcole12cm13_1 , width: 130, height: 330  },
            { id: "ADS34FJ", image: charcole12cm13_2 , width: 130, height: 330  },
            { id: "ADS34FJ", image: charcole12cm14_1 , width: 130, height: 330  },
            { id: "ADS34FJ", image: charcole12cm14_2 , width: 130, height: 330  },
            { id: "ADS34FJ", image: charcole12cm14_3 , width: 130, height: 330  },
            { id: "ADS34FJ", image: charcole12cm15_1 , width: 130, height: 330  },
            { id: "ADS34FJ", image: charcole12cm15_2 , width: 130, height: 330  },
            { id: "ADS34FJ", image: charcole12cm15_3 , width: 130, height: 330  },
            { id: "ADS34FJ", image: charcole12cm16_1 , width: 130, height: 330  },
            { id: "ADS34FJ", image: charcole12cm16_2 , width: 130, height: 330  },


            




          ]
        },
        {
          size: "16cm X 8 mm X 3.5 m ",
          products: [
            { id: "ADS34FJ1", image: charcole16cm1_1 ,width: 160, height: 330},
            
            { id: "ADS34FJ4", image: charcole16cm1 ,width: 160, height: 330},
            { id: "ADS34FJ4", image: charcole16cm2_1 ,width: 160, height: 330},
            { id: "ADS34FJ4", image: charcole16cm2_2 ,width: 160, height: 330},


            
            { id: "ADS34FJ5", image: charcole16cm3_1 ,width: 160, height: 330},
            { id: "ADS34FJ6", image: charcole16cm3_2 ,width: 160, height: 330},
            { id: "ADS34FJ7", image: charcole16cm3_3 ,width: 160, height: 330},
            

            
          ]
        },
        {
          size: "30cm X 5 mm X 2.9 m ",
          products: [
            { id: "AD PS 8021", image: charcole30cm1 },
            { id: "AD PS 8018", image: charcole30cm2 },
            { id: "AD PS 8019", image: charcole30cm3 },
            { id: "AD PS 8020", image: charcole30cm4 },
            { id: "AD PS 8023", image: charcole30cm5 },
            { id: "AD PS 8029", image: charcole30cm6 },
            { id: "AD PS 8022", image: charcole30cm7 },
            { id: "AD PS 8027", image: charcole30cm8 },
            { id: "AD PS 8028", image: charcole30cm9 },
            { id: "AD PS 8026", image: charcole30cm10 },
            { id: "AD PS 8025", image: charcole30cm11 },
            { id: "AD 30-2", image: charcole30cm12 },
            { id: "AD 30 SY-2", image: charcole30cm13 },


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
                    CHARCOAL LOUVERS
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
export default Charcoal