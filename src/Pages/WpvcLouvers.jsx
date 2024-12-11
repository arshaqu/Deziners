import React, { useEffect, useState } from 'react';
import Image1 from '../Assets/Image14.jpg';
import Adhams from '../Assets/adams1.png';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

// images
// 3G
import image3G1 from '../Assets/Wpcfluied/img3G1.jpg';
import image3G2 from '../Assets/Wpcfluied/img3G2.jpg';
import image3G3 from '../Assets/Wpcfluied/img3G3.jpg';
import image3G4 from '../Assets/Wpcfluied/img3G4.jpg';

// 4G
import image4G1 from '../Assets/Wpcfluied/img4G1.jpg';
import image4G2 from '../Assets/Wpcfluied/img4G2.jpg';
import image4G3 from '../Assets/Wpcfluied/img4G3.jpg';
import image4G4 from '../Assets/Wpcfluied/img4G4.jpg';
import image4G5 from '../Assets/Wpcfluied/img4G5.jpg';
import image4G6 from '../Assets/Wpcfluied/img4G6.jpg';
import image4G7 from '../Assets/Wpcfluied/img4G7.jpg';
import image4G8 from '../Assets/Wpcfluied/img4G8.jpg';
import image4G9 from '../Assets/Wpcfluied/img4G9.jpg';
import image4G10 from '../Assets/Wpcfluied/img4G10.jpg';
import image4G11 from '../Assets/Wpcfluied/img4G11.jpg';
import image4G12 from '../Assets/Wpcfluied/img4G12.jpg';

// 5G
import image5G1 from '../Assets/Wpcfluied/img5G1.jpg';

// 6G
import image6G1 from '../Assets/Wpcfluied/img6G1.jpg';
import image6G2 from '../Assets/Wpcfluied/img6G2.jpg';
import image6G3 from '../Assets/Wpcfluied/img6G3.jpg';

// 8G
import image8G1 from '../Assets/Wpcfluied/img8G1.jpg';
import image8G2 from '../Assets/Wpcfluied/img8G2.jpg';
import image8G3 from '../Assets/Wpcfluied/img8G3.jpg';
import image8G4 from '../Assets/Wpcfluied/img8G4.jpg';

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

function WpvcLouvers() {
    const [selectedImage, setSelectedImage] = useState(null);

    const categories = [
        { name: '3G Series', id: 'section-3g' },
        { name: '4G Series', id: 'section-4g' },
        { name: '5G Series', id: 'section-5g' },
        { name: '6G Series', id: 'section-6g' },
        { name: '8G Series', id: 'section-8g' },
    ];

    const productSections = [
        {
            size: '3G (195 mm X 13 mm X 2900 mm)',
            id: 'section-3g',
            products: [
                { id: 'FOREST TEAK 3G', image: image3G1 , width: 180, height: 330},
                { id: 'GOLDEN OAK 3G', image: image3G2 , width: 180, height: 330},
                { id: 'MAHOGANY 3G', image: image3G3 , width: 180, height: 330},
                { id: 'WALNUT - 13 3G', image: image3G4 , width: 180, height: 330},
            ],
        },
        {
            size: '4G (160 mm X 12 mm X 2900 mm)',
            id: 'section-4g',
            products: [
                { id: 'GOLDEN THREAD 4G', image: image4G1 , width: 200, height: 390},
                { id: 'WHITE MARBLE 4G', image: image4G2 , width: 200, height: 390},
                { id: 'WHITE OAK 4G', image: image4G3 , width: 200, height: 390},
                { id: 'GRAPHITE GREY 4G', image: image4G4 , width: 200, height: 390},
                { id: 'SILVER GREY 4G', image: image4G5 , width: 200, height: 390},
                { id: 'BURMA TEAK 4G', image: image4G6 , width: 200, height: 390},
                { id: 'WALNUT 4G', image: image4G7 , width: 200, height: 390},
                { id: 'HAZELNUT 4G', image: image4G8 , width: 200, height: 390},
                { id: 'SUNNYWOOD 4G', image: image4G9 , width: 200, height: 390},
                { id: 'JEMWOOD 4G', image: image4G10 , width: 200, height: 390},
                { id: 'JEM 378 4G', image: image4G11 , width: 200, height: 390},
                { id: 'WALNUT 4G', image: image4G12 , width: 200, height: 390},
                // ... keep all other 4G products
            ],
        },
        {
            size: '5G (160 mm X 8mm X 2980 mm)',
            id: 'section-5g',
            products: [{ id: 'WALNUT 5G', image: image5G1, width: 220, height: 410 }],
        },
        {
            size: '6G (160 mm X 18 mm X 2900 mm)',
            id: 'section-6g',
            products: [
                { id: 'WHITE MARBLE 6G', image: image6G1 , width: 200, height: 420},
                { id: 'JEMWOOD 6G', image: image6G2 , width: 200, height: 420},
                { id: 'DARK GRAY 6G', image: image6G3 , width: 200, height: 420},
            ],
        },
        {
            size: '8G (160 mm X 17 mm X 2900 mm)',
            id: 'section-8g',
            products: [
                { id: 'GRAPHITE GREY 8G', image: image8G1 , width: 230, height: 450},
                { id: 'JEM 2017 8G', image: image8G2 , width: 230, height: 450},
                { id: 'GLITTER BLACK 8G', image: image8G3 , width: 230, height: 450},
                { id: 'WHITE MARBLE 8G', image: image8G4 , width: 230, height: 450},
            ],
        },
    ];

    const scrollToSection = (sectionId) => {
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
                        className="h-24 mb-1 lg:h-20 md:h-12 sm:h-12 xs:h-[50px]"
                    />
                    <div
                        style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.9)' }}
                        className="bg-red-600 shadow-custom-lg h-24 sm:h-12 xs:h-10 flex items-center"
                    >
                        <h1 className="text-white md:h-18 text-4xl md:text-3xl sm:text-xl xs:text-xl montserrat ml-2">
                            WPVC LOUVERS
                        </h1>
                    </div>
                </div>
            </div>

            <div style={{ marginTop: '-45px' }} className="min-h-screen bg-gray-800">
                {/* Categories Section */}
                <div className="max-w-4xl mx-auto px-8 md:px-12 py-6 montserrat">
                    <h1 style={{fontSize:'35px'}} className='text-center text-white'>CATEGORIES</h1>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 max-w-sm lg:max-w-none mt-6 mx-auto">
                        {categories.map((category) => (
                            <div
                                key={category.id}
                                className="transform hover:scale-[1.02] transition-transform duration-200 cursor-pointer"
                                onClick={() => scrollToSection(category.id)}
                            >
                                <div className="relative bg-white shadow-lg hover:shadow-xl transition-shadow duration-200 rounded-lg">
                                    <div className="h-14 flex items-center justify-center px-6 relative z-10">
                                        <span className="text-gray-700 text-lg tracking-wider font-light">
                                            {category.name}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Product Sections */}
                <div className="max-w-7xl mx-auto px-4 py-8 bg-gray-800">
                    {productSections.map((section) => (
                        <div key={section.id} id={section.id} className="mb-12">
                            <div
                                style={{ backgroundColor: 'red' }}
                                className="shadow-md mb-6 max-w-sm mx-auto lg:max-w-none montserrat"
                            >
                                <div className="py-2 px-4 text-center text-white">
                                    {section.size}
                                </div>
                            </div>

                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-sm lg:max-w-none mx-auto montserrat">
                                {section.products.map((product, productIndex) => (
                                    <div
                                        key={productIndex}
                                        className="bg-white p-3 shadow-lg"
                                    >
                                       <div className="flex justify-center items-center">
                                <img
                                    src={product.image}
                                    alt={`Product ${product.id}`}
                                    className=" object-cover cursor-pointer"
                                    onClick={() => handleImageClick(product.image, product.id)}
                                    style={{ width: `${product.width}px`, height: `${product.height}px` }}
                                />
                                </div>
                                        <div className="text-center font-medium text-sm mt-2">
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

            <Footer />
        </div>
    );
}

export default WpvcLouvers;
