import React, { useEffect, useState } from 'react'
import Image1 from '../Assets/bannerpvc.jpg'
import Adhams from '../Assets/adams1.png'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import wpclouver10X12 from '../Assets/Pvclouvers/10ftX12inch1.jpg'
import wpclouver10X12_2 from '../Assets/Pvclouvers/10ftX12inch2.jpg'
import wpclouver10X12_3 from '../Assets/Pvclouvers/10ftX12inch3.jpg'
import wpclouver10X12_4 from '../Assets/Pvclouvers/10ftX12inch4.jpg'
import wpclouver10X12_5 from '../Assets/Pvclouvers/10ftX12inch5.jpg'
import wpclouver10X12_6 from '../Assets/Pvclouvers/10ftX12inch6.jpg'
import wpclouver10X12_7 from '../Assets/Pvclouvers/10ftX12inch7.jpg'
import wpclouver10X12_8 from '../Assets/Pvclouvers/10ftX12inch8.jpg'
import wpclouver10X12_9 from '../Assets/Pvclouvers/10ftX12inch9.png'
import wpclouver10X12_10 from '../Assets/Pvclouvers/10ftX12inch10.jpg'
import wpclouver10X12_11 from '../Assets/Pvclouvers/10ftX12inch11.jpg'
import wpclouver10X12_12 from '../Assets/Pvclouvers/10ftX12inch12.jpg'
import wpclouver10X12_13 from '../Assets/Pvclouvers/10ftX12inch13.jpg'
import wpclouver10X12_14 from '../Assets/Pvclouvers/10ftX12inch14.jpg'
import wpclouver10X12_15 from '../Assets/Pvclouvers/10ftX12inch15.jpg'
import wpclouver10X12_16 from '../Assets/Pvclouvers/10ftX12inch16.png'
import wpclouver10X12_17 from '../Assets/Pvclouvers/10ftX12inch17.png'

import wpclouver10X10_1 from '../Assets/Pvclouvers/10x10ft1.png'
import wpclouver10X10_2 from '../Assets/Pvclouvers/10x10ft2.png'


import uPVC1 from '../Assets/Pvclouvers/uPVC1.png'
import uPVC2 from '../Assets/Pvclouvers/uPVC2.png'

// Image Zoom Modal Component
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


function PvcLouvers() {
    const [selectedImage, setSelectedImage] = useState(null);
    
    const categories = [
        '10 Ft X 12 inch',
        '10 Ft X 10 inch',
        'uPVC 10 Ft X 12 inch',
    ];

    const productSections = [
        {
            size:  '10 Ft X 12 inch',
            id: "section-10-12",
            products: [
                { id: "2G - 1516", image: wpclouver10X12 , width: 130, height: 330},
                { id: "2G - 1515", image: wpclouver10X12_2 , width: 130, height: 330},
                { id: "2G - 1520", image: wpclouver10X12_3 , width: 130, height: 330},
                { id: "L-102", image: wpclouver10X12_4 , width: 130, height: 330},
                { id: "2024 (WALNUT)", image: wpclouver10X12_5 , width: 130, height: 330},
                { id: "3025 (DARKOAK14)", image: wpclouver10X12_6 , width: 130, height: 330},
                { id: "W 356 (GOLDLINE)", image: wpclouver10X12_7 , width: 130, height: 330},
                { id: "IN - 539", image: wpclouver10X12_8 , width: 130, height: 330},
                { id: "2007 (MAHOGANY)", image: wpclouver10X12_9 , width: 130, height: 330},
                { id: "2052 (WHITE MARBLE)", image: wpclouver10X12_10 , width: 130, height: 330},
                { id: "2016", image: wpclouver10X12_11 , width: 130, height: 330},
                { id: "2023 (RED OAK)", image: wpclouver10X12_12 , width: 130, height: 330},
                { id: "2004 (OAKWOOD)", image: wpclouver10X12_13 , width: 130, height: 330},
                { id: "2006 (FOREST TEAK)", image: wpclouver10X12_14 , width: 130, height: 330},
                { id: "2010 (WHITE)", image: wpclouver10X12_15 , width: 130, height: 330},
                { id: "2020", image: wpclouver10X12_16 , width: 130, height: 330},
                { id: "2017", image: wpclouver10X12_17 , width: 130, height: 330},
            ]
        },
        {
            size: "10 Ft X 10 inch",
            id: "section-10-10",
            products: [
                { id: "8G - 7012", image: wpclouver10X10_1, width: 160, height: 360 },
                { id: "305 (BEIGE)", image: wpclouver10X10_2, width: 160, height: 360 },
            ]
        },
        {
            size: "uPVC 10 Ft X 12 inch",
            id: "section-upvc",
            products: [
                { id: "1251 uPVC", image: uPVC2 , width: 200, height: 410},
                { id: "1252 uPVC", image: uPVC1 , width: 200, height: 410},
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
        const sectionId = productSections[categoryIndex].id;
        const element = document.getElementById(sectionId);
        if (element) {
            const navbarHeight = 100; // Adjust this value based on your navbar height
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="min-h-screen bg-neutral-100">
            <Navbar/>
            
            {/* Banner Section */}
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
                            PVC LOUVERS
                        </h1>
                    </div>
                </div>
            </div>

            <div style={{ marginTop: '-45px' }} className="min-h-screen bg-gray-800">
                {/* Categories Section */}
                {/* <div className="max-w-4xl mx-auto px-8 md:px-12 py-6 montserrat">
                    <h1 style={{fontSize:'35px'}} className='text-center text-white'>CATEGORIES</h1>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 max-w-sm lg:max-w-none mt-6 mx-auto">
                        {categories.map((category, index) => (
                            <div
                                key={category}
                                className="transform hover:scale-[1.02] transition-transform duration-200 cursor-pointer"
                                onClick={() => scrollToSection(index)}
                            >
                                <div className="relative bg-white shadow-lg hover:shadow-xl transition-shadow duration-200 rounded-lg">
                                    <div className="h-14 flex items-center justify-center px-6 relative z-10">
                                        <span className="text-gray-700 text-lg tracking-wider font-light">
                                            {category}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div> */}

                {/* Product Sections */}
                <div className="max-w-7xl mx-auto px-4 py-8 bg-gray-800">
                    {productSections.map((section, index) => (
                        <div key={index} id={section.id} className="mb-12">
                            <div style={{backgroundColor:'red'}} className="shadow-md mb-6 max-w-sm mx-auto lg:max-w-none montserrat">
                                <div className="py-2 px-4 text-center text-white">
                                    {section.size}
                                </div>
                            </div>

                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-sm lg:max-w-none mx-auto montserrat">
                                {section.products.map((product, productIndex) => (
                                    <div 
                                        key={productIndex} 
                                        className="bg-white p-3 shadow-lg flex flex-col items-center"
                                    >
                                        <img
                                            src={product.image}
                                            alt={`Product ${product.id}`}
                                            className=" object-cover mb-2 mx-auto cursor-pointer"
                                            style={{ width: `${product.width}px`, height: `${product.height}px` }}
                                            onClick={() => handleImageClick(product.image, product.id)}
                                        />
                                        <div className="text-center text-gray-600 text-sm">
                                            {product.id}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <ImageZoomModal
                image={selectedImage?.image}
                alt={selectedImage?.alt}
                productName={selectedImage?.name}
                isOpen={!!selectedImage}
                onClose={closeModal}
            />

            <Footer/>
        </div>
    );
}

export default PvcLouvers;