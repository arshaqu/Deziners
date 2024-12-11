import React, { useState } from 'react';
import Image1 from '../Assets/Image1.jpg';
import image2 from '../Assets/imageabout.jpg'
import Navbar from './Components/Navbar';

function AboutUs() {
  const [activeTab, setActiveTab] = useState('History');

  const tabs = ['History', 'Mission', 'Vision'];
  
  const tabContent = {
    History: 'At Deziner Interiors, our vision is to transform spaces with innovative, stylish, and sustainable interior products, making every home and business reflect creativity and quality. We aim to inspire through exceptional designs and customer-focused service.',
    Mission: 'Creating exceptional living spaces through cutting-edge design and superior craftsmanship.',
    Vision: 'To be the leading provider of innovative interior solutions that inspire and transform spaces.'
  };

  return (
    <div className="w-full min-h-screen bg-neutral-50">
      <Navbar/>
      {/* Hero Section */}
      <div className="relative h-80 mb-16">
        {/* Background Image */}
        <img
          src={Image1}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white tracking-wider">
            ABOUT US
          </h1>
         
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side - Image */}
          <div className="rounded-3xl overflow-hidden">
            <img 
              src={image2}  // Replace '/Image2' with the correct path to your second image
              alt="Interior Design" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Side - Tabs */}
          <div className="bg-white font-thin rounded-3xl p-6 shadow-sm montserrat">
            <div className="flex gap-4 mb-6">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-full transition-colors  ${
                    activeTab === tab
                      ? 'bg-neutral-900 text-white'
                      : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="prose">
              <p className="text-neutral-600">
                {tabContent[activeTab]}
              </p>
            </div>
          </div>
        </div>

        {/* Who We Are Section */}
        <div className="mt-16 bg-pink-50 rounded-3xl p-8 ">
          <h2 className="text-3xl font-semibold mb-4 montserrat text-center">Who We Are...?</h2>
          <p className="text-neutral-600  leading-relaxed montserrat ">
          We are Deziner Ceiling Co., a product-selling company primarily focused on supplying high-quality materials to aluminum shops. Based in Inkel City, Malappuram, Kerala, we have been serving the market successfully since 2018. Our product range includes machine tools, laminate sheets, plywood, ceiling cornice, floor and wall coverings, all offered with a commitment to effective and timely delivery. As a pricing leader in the market, we identified a gap due to a ceiling balance restriction and seized the opportunity to meet the growing demand. By understanding the potential of the market and the needs of our customers, we quickly established a strong presence in the industry, positioning ourselves as a trusted supplier.          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
