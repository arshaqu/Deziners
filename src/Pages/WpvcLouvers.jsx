import React, { useEffect } from 'react'
import Image1 from '../Assets/Image14.jpg'
import Adhams from '../Assets/adams1.png'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'

// images
// 3G
import image3G1 from '../Assets/Wpcfluied/img3G1.jpg'
import image3G2 from '../Assets/Wpcfluied/img3G2.jpg'
import image3G3 from '../Assets/Wpcfluied/img3G3.jpg'
import image3G4 from '../Assets/Wpcfluied/img3G4.jpg'

// 4G 
import image4G1 from '../Assets/Wpcfluied/img4G1.jpg'
import image4G2 from '../Assets/Wpcfluied/img4G2.jpg'
import image4G3 from '../Assets/Wpcfluied/img4G3.jpg'
import image4G4 from '../Assets/Wpcfluied/img4G4.jpg'
import image4G5 from '../Assets/Wpcfluied/img4G5.jpg'
import image4G6 from '../Assets/Wpcfluied/img4G6.jpg'
import image4G7 from '../Assets/Wpcfluied/img4G7.jpg'
import image4G8 from '../Assets/Wpcfluied/img4G8.jpg'
import image4G9 from '../Assets/Wpcfluied/img4G9.jpg'
import image4G10 from '../Assets/Wpcfluied/img4G10.jpg'
import image4G11 from '../Assets/Wpcfluied/img4G11.jpg'
import image4G12 from '../Assets/Wpcfluied/img4G12.jpg'

// 5G 
import image5G1 from '../Assets/Wpcfluied/img5G1.jpg'

// 6G 
import image6G1 from '../Assets/Wpcfluied/img6G1.jpg'
import image6G2 from '../Assets/Wpcfluied/img6G2.jpg'
import image6G3 from '../Assets/Wpcfluied/img6G3.jpg'


// 8G 
import image8G1 from '../Assets/Wpcfluied/img8G1.jpg'
import image8G2 from '../Assets/Wpcfluied/img8G2.jpg'
import image8G3 from '../Assets/Wpcfluied/img8G3.jpg'
import image8G4 from '../Assets/Wpcfluied/img8G4.jpg'




function WpvcLouvers() {
    const categories = [
        "3G (195 mm X 13 mm X 2900 mm)",
        '4G (160 mm X 12 mm X 2900 mm)',
        '5G (160 mm X 8mm X 2980 mm)',
        '6G (160 mm X 18 mm X 2900 mm)',
        '8G (160 mm X 17 mm X 2900 mm)',

    ];

    const productSections = [
        {
            size: "3G (195 mm X 13 mm X 2900 mm)",
            products: [
                { id: "FOREST TEAK 3G", image: image3G1 },
                { id: "GOLDEN OAK 3G", image: image3G2 },
                { id: "MAHOGANY 3G", image: image3G3 },
                { id: "WALNUT - 13 3G", image: image3G4 },

            ]
        },
        {
            size: "4G (160 mm X 12 mm X 2900 mm)",
            products: [
                { id: "GOLDEN THREAD 4G", image: image4G1 },
                { id: "WHITE MARBLE 4G", image: image4G2 },
                { id: "WHITE OAK 4G", image: image4G3 },
                { id: "GRAPHITE GREY 4G", image: image4G4 },
                { id: "SILVER GREY 4G", image: image4G5 },
                { id: "BURMA TEAK 4G", image: image4G6 },
                { id: "WALNUT 4G", image: image4G7 }, 
                { id: "HAZELNUT 4G", image: image4G8 },
                { id: "SUNNYWOOD 4G", image: image4G9 },
                { id: "JEMWOOD 4G", image: image4G10 },
                { id: "JEM 378 4G", image: image4G11 },
                { id: "WALNUT 4G", image: image4G12 },

            ]
        },
        {
            size: "5G (160 mm X 8mm X 2980 mm)",
            products: [
                { id: "WALNUT 5G", image: image5G1 },
            ]
        },
        {
            size: "6G (160 mm X 18 mm X 2900 mm)",
            products: [
                { id: "WHITE MARBLE 6G", image: image6G1 },
                { id: "JEMWOOD 6G", image: image6G2 },
                { id: "DARK GRAY 6G", image: image6G3 },

            ]
        }
        , {
            size: "8G (160 mm X 17 mm X 2900 mm)",
            products: [
                { id: "GRAPHITE GREY 8G", image: image8G1 },
                { id: "JEM 2017 8G", image: image8G2 },
                { id: "GLITTER BLACK 8G", image: image8G3 },
                { id: "WHITE MARBLE 8G", image: image8G4 },
            ]
        }
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const scrollToSection = (categoryId) => {
        const element = document.getElementById(categoryId);
        if (element) {
            const offset = 100; // Adjust this value to control the scroll position
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
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

            <div style={{ marginTop: '-45px' }} className="min-h-screen ">
                <div className="max-w-4xl mx-auto px-8 md:px-12 py-6">
                    {/* Grid container */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 max-w-sm lg:max-w-none mt-6 mx-auto">
                        {categories.map((category) => (
                            <div
                                key={category}
                                className="transform hover:scale-[1.02] transition-transform duration-200"
                                onClick={() => scrollToSection(category.replace(/ /g, '-'))}
                            >
                                {/* Main container with shadow effect */}
                                <div
                                    style={{ boxShadow: '20px', cursor: 'pointer', borderRadius: '8px' }}
                                    className="relative bg-white shadow-lg hover:shadow-xl transition-shadow duration-200"
                                >
                                    {/* White background with raised effect */}
                                    <div className="h-14 flex items-center justify-center px-6 relative z-10">
                                        <span className="text-gray-700 text-lg tracking-wider font-light">
                                            {category}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* All Product Sections */}
                <div className="max-w-7xl mx-auto px-4 py-8 bg-gray-800">
                    {productSections.map((section, index) => (
                        <div 
                            key={index} 
                            className="mb-12"
                            id={section.size.replace(/ /g, '-')}
                        >
                            {/* Size Header */}
                            <div 
                                style={{ backgroundColor: 'red' }} 
                                className="bg-white shadow-md mb-6 max-w-sm mx-auto lg:max-w-none montserrat"
                            >
                                <div className="py-2 px-4 text-center text-white">
                                    {section.size}
                                </div>
                            </div>

                            {/* Product Grid */}
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-sm lg:max-w-none mx-auto montserrat">
                                {section.products.map((product, productIndex) => (
                                    <div
                                        key={productIndex}
                                        className="bg-white p-3 shadow-lg"
                                    >
                                        <img
                                            src={product.image}
                                            alt={`Product ${product.id}`}
                                            className="w-full h-auto object-cover mb-2"
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
            <Footer />
        </div>
    )
}

export default WpvcLouvers