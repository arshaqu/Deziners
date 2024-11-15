import React, { useEffect } from 'react'
import Image1 from '../Assets/bannerpvc.jpg'
import Adhams from '../Assets/adams1.png'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import wpclouver10X12 from '../Assets/Pvclouvers/10cm X 12inch0.jpg'
import wpclouver10X12_2 from '../Assets/Pvclouvers/10cm x 12inch1.jpg'
import wpclouver10X12_3 from '../Assets/Pvclouvers/10cm x 12inch2.jpg'
import wpclouver10X12_4 from '../Assets/Pvclouvers/10cm X 12inch3.jpg'
import wpclouver10X12_5 from '../Assets/Pvclouvers/10cm X 12inch4.jpg'
import wpclouver10X12_6 from '../Assets/Pvclouvers/10cm X 12inch5.jpg'
import wpclouver10X12_7 from '../Assets/Pvclouvers/10cm X 12inch6.jpg'
import wpclouver10X12_8 from '../Assets/Pvclouvers/10cm X 12inch7.jpg'
import wpclouver10X12_9 from '../Assets/Pvclouvers/10cm X 12inch8.jpg'
import wpclouver10X12_10 from '../Assets/Pvclouvers/10cm X 12inch9.jpg'
import wpclouver10X12_11 from '../Assets/Pvclouvers/10cm X 12inch10.jpg'
import wpclouver10X12_12 from '../Assets/Pvclouvers/10cm X 12inch11.jpg'
import wpclouver10X12_13 from '../Assets/Pvclouvers/10cm x 12inch12.jpg'
import wpclouver10X12_14 from '../Assets/Pvclouvers/10cm X 12inch13.jpg'
import wpclouver10X10_1 from '../Assets/Pvclouvers/10cm X 10ft1.jpg'
import wpclouver10X10_2 from '../Assets/Pvclouvers/10cm X 10ft2.jpg'
import uPVC1 from '../Assets/Pvclouvers/uPVC1.jpg'
import uPVC2 from '../Assets/Pvclouvers/uPvc2.jpg'

function PvcLouvers() {
    const categories = [
        '10 Ft X 12 inch',
        '10 Ft X 10 inch',
        'uPVC 10 Ft X 12 inch',
    ];

    const productSections = [
        {
            size: "10 Ft X 12 inch",
            products: [
                { id: "2010 WHITE", image: wpclouver10X12 },
                { id: "2052 (WHITE MARBLE)", image: wpclouver10X12_2 },
                { id: "2016", image: wpclouver10X12_3 },
                { id: "2023 (RED OAK)", image: wpclouver10X12_4 },
                { id: "2004 (OAK WOOD)", image: wpclouver10X12_5 },
                { id: "2020", image: wpclouver10X12_6 },
                { id: "2017", image: wpclouver10X12_7 },
                { id: "2G - 1516", image: wpclouver10X12_8 },
                { id: "2G - 1505", image: wpclouver10X12_9 },
                { id: "2G - 1520", image: wpclouver10X12_10 },
                { id: "L - 102", image: wpclouver10X12_11 },
                { id: "2024 (WALNUT)", image: wpclouver10X12_12 },
                { id: "3025 (DARKOAK14)", image: wpclouver10X12_13 },
                { id: "w 356 (GOLDLINE)", image: wpclouver10X12_14 },
            ]
        },
        {
            size: "10 Ft X 10 inch",
            products: [
                { id: "8G - 7012", image: wpclouver10X10_1 },
                { id: "305 (BEIGE)", image: wpclouver10X10_2 },
            ]
        },
        {
            size: "uPVC 10 Ft X 12 inch",
            products: [
                { id: "1251 uPVC", image: uPVC2 },
                { id: "1252 uPVC", image: uPVC1 },
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
                            PVC LOUVERS
                        </h1>
                    </div>
                </div>
            </div>

            <div style={{ marginTop: '-45px' }} className="min-h-screen bg-gray-800">
                <div className="max-w-4xl mx-auto px-8 md:px-12 py-6 montserrat">
                  <h1 style={{fontSize:'35px'}} className='text-center text-white '>CATEGORIES</h1>
                    {/* Grid container */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 max-w-sm lg:max-w-none mt-6 mx-auto">
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
    );
}

export default PvcLouvers;