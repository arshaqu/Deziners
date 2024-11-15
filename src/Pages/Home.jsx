import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Image1 from '../Assets/Image1.jpg'
import Deziner from '../Assets/DezinerTr.png'
import Adhams from '../Assets/ad.png'
import Simple from '../Assets/dff.png'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'




function Home() {

    const navigate = useNavigate() 
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const imageContainerRef = useRef(null);

    const handleMouseMove = (e) => {
        if (imageContainerRef.current) {
            const { left, top, width, height } = imageContainerRef.current.getBoundingClientRect();
            const x = ((e.clientX - left) / width) * 100;
            const y = ((e.clientY - top) / height) * 100;
            setMousePosition({ x, y });
        }
    };

    useEffect(() => {
      window.scrollTo(0, 0);
  }, []); 

    const handleOnAdhams = async () => {
      try {
        navigate('/adhams')
      } catch (error) {
        console.log(error);
      }
    } 


    return (
        <div className="min-h-screen ">
            <Navbar/>
          {/* Hero Section */}
          <div className="relative w-full h-screen">
            {/* Main Image Container */}
            <div  ref={imageContainerRef} onMouseMove={handleMouseMove} className="relative w-full h-full overflow-hidden">
              <img 
                src={Image1} 
                alt="Modern interior design" 
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
            style={{  transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,transform: `scale(1.1)`, }}
              />
              
              <div  className="absolute inset-0 bg-black/10 flex items-center justify-center">
            <div style={{borderRadius:'30px',boxShadow:'1px 3px 5px 0.2px rgba(0, 0, 0, 3.0)',cursor:'pointer'}} className="p-6 bg-black/25 rounded-xl">
              <img 
                src={Deziner} 
                alt="Deziner Logo" 
                className="max-w-[200px] md:max-w-[300px] w-full h-auto"
              />
            </div>
          </div>
        </div>
    
            {/* WhatsApp Button */}
            <a 
              href="https://wa.me/7559844090" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="fixed bottom-6 right-6 z-50 bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors"
            >
              <svg 
                className="w-8 h-8 text-white" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
          </div>
          <div className="py-12 bg-gray-50">
  <h2 className="text-center text-2xl font-thin mb-8 Montserrat">OUR BRANDS</h2>
  <div className="container w-full px-4 flex justify-center">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
      
      {/* Brand Card 1 */}
      <div style={{cursor:'pointer'}} onClick={handleOnAdhams} className="bg-white w-full rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow flex justify-center items-center lg:ml-48"> {/* Applied lg:ml-5 for margin on larger screens */}
        <img 
          src={Adhams}
          alt="Adhams" 
          className="h-24 w-full object-contain"
        />
      </div>
      
      {/* Brand Card 2 */}
      <div style={{cursor:'pointer'}} className="bg-white w-full rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow flex justify-center items-center lg:ml-48"> {/* Applied lg:ml-5 for margin on larger screens */}
        <img 
          src={Simple}
          alt="Simple DRY" 
          className="h-24 w-full object-contain"
        />
      </div>
      
    </div>
  </div>
</div>
  <Footer/>


        </div>
      );
}

export default Home