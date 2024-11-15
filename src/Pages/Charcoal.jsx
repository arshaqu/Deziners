import React, { useEffect } from 'react'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Image1 from '../Assets/charcoal.jpg'
import Adhams from '../Assets/adams1.png'
import charcoal1 from '../Assets/charcole/charcoal2.jpg'
import charcoal3 from '../Assets/charcole/charcoal3.jpg'
import charcoal4 from '../Assets/charcole/charcoal4.jpg'
import charcoal5 from '../Assets/charcole/charcoal5.jpg'
import charcoal6 from '../Assets/charcole/charcoal6.jpg'
import charcoal7 from '../Assets/charcole/charcoal7.jpg'
import charcoal8 from '../Assets/charcole/charcoal8.jpg'
import charcoal9 from '../Assets/charcole/charcoal9.jpg'
import charcoal10 from '../Assets/charcole/charcoal10.jpg'
import charcoal11 from '../Assets/charcole/charcoal11.jpg'
import charcoal12 from '../Assets/charcole/charcoal12.jpg'
import charcoal13 from '../Assets/charcole/charcoal13.jpg'
import charcoal14 from '../Assets/charcole/charcoal14.jpg'
import charcole12cm4 from '../Assets/charcole/12cm/charcole12cm4.jpg'
import charcole12cm5 from '../Assets/charcole/12cm/charcole12cm5.jpg'
import charcole12cm6 from '../Assets/charcole/12cm/charcole12cm6.jpg'
import charcole12cm7 from '../Assets/charcole/12cm/charcole12cm7.jpg'
import charcole12cm8 from '../Assets/charcole/12cm/charcole12cm8.jpg'
import charcole12cm9 from '../Assets/charcole/12cm/charcole12cm9.jpg'
import charcole12cm10 from '../Assets/charcole/12cm/charcole12cm10.jpg'
import charcole12cm11 from '../Assets/charcole/12cm/charcole12cm11.jpg'
import charcole12cm12 from '../Assets/charcole/12cm/charcole12cm12.jpg'
import charcole12cm13 from '../Assets/charcole/12cm/charcole12cm13.jpg'
import charcole16cm1 from '../Assets/charcole/12cm/charcole16cm1.jpg'
import charcole16cm2 from '../Assets/charcole/12cm/charcole16cm2.jpg'
import charcole16cm3 from '../Assets/charcole/12cm/charcole16cm3.jpg'





function Charcoal() {

    const categories = [
        'WOOD GRAINS',
        'MARBLE TEXTURE',
        'SOLID COLOURS',
        'ACCESSORIES'
      ];

      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    


      const productSections = [
        {
          size: "12cm X 23 mm X 2.5 m (4 × 3)",
          products: [
            { id: "ADS34FJ", image: charcoal1 },
            { id: "ADS34FJ", image: charcole12cm4 },
            { id: "ADS34FJ", image: charcole12cm5 },
            { id: "ADS34FJ", image: charcole12cm6 },
            { id: "ADS34FJ", image: charcole12cm7 },
            { id: "ADS34FJ", image: charcole12cm8 },
            { id: "ADS34FJ", image: charcole12cm9 },
            { id: "ADS34FJ", image: charcole12cm10 },
            { id: "ADS34FJ", image: charcole12cm11 },
            { id: "ADS34FJ", image: charcole12cm12 },
            { id: "ADS34FJ", image: charcole12cm13 },
          ]
        },
        {
          size: "16cm X 8 mm X 3.5 m (4 × 3)",
          products: [
            { id: "ADS34FJ", image: charcole16cm1 },
            { id: "ADS34FJ", image: charcole16cm2 },
            { id: "ADS34FJ", image: charcole16cm3 },
            { id: "ADS34FJ", image: charcole16cm1 },
          ]
        },
        {
          size: "30cm X 5 mm X 2.9 m (4 × 3)",
          products: [
            { id: "ADS34FJ", image: charcoal1 },
            { id: "ADS34FJ", image: charcoal3 },
            { id: "ADS34FJ", image: charcoal4 },
            { id: "ADS34FJ", image: charcoal5 },
            { id: "ADS34FJ", image: charcoal6 },
            { id: "ADS34FJ", image: charcoal7 },
            { id: "ADS34FJ", image: charcoal8 },
            { id: "ADS34FJ", image: charcoal9 },
            { id: "ADS34FJ", image: charcoal10 },
            { id: "ADS34FJ", image: charcoal11 },
            { id: "ADS34FJ", image: charcoal12 },
            { id: "ADS34FJ", image: charcoal13 },
            { id: "ADS34FJ", image: charcoal14 },


          ]
        }
      ];


    return (
        <div className="min-h-screen bg-neutral-100">
            <Navbar/>
        
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









      
        <div style={{marginTop:'-45px'}} className="min-h-screen bg-gray-800">
      <div className="max-w-4xl mx-auto px-8 md:px-12 py-6">
        {/* Grid container */}
        <div  className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 max-w-sm lg:max-w-none mt-6 mx-auto">
          {categories.map((category) => (
            <div 
              key={category}
              className="transform hover:scale-[1.02] transition-transform duration-200 "
            >
              {/* Main container with shadow effect */}
              <div style={{boxShadow:'20px',cursor:'pointer',borderRadius:'8px'}} className="relative bg-white shadow-lg ">
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




      <div className="max-w-7xl mx-auto px-4 py-8 bg-gray-800">
      {productSections.map((section, index) => (
        <div key={index} className="mb-12">
          {/* Size Header */}
          <div  style={{backgroundColor:'red'}} className=" shadow-md mb-6 max-w-sm mx-auto lg:max-w-none montserrat">
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
                  className="w-full h-auto object-cover mb-2 "
                />
                <div className="text-center text-gray-600 text-sm ">
                  {product.id}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>


    </div>
    
   









                <Footer/>
          
        </div>
  )

}
export default Charcoal