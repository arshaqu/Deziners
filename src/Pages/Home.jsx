import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Image2 from '../Assets/Image1.jpg';
import Image3 from '../Assets/Image2.jpg';
import Deziner from '../Assets/DezinerTr.png';
import Adhams from '../Assets/ad.png';
import Simple from '../Assets/dff.png';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Image101 from'../Assets/Image101.jpg';

function Home() {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentImage, setCurrentImage] = useState(Image2); // Start with Image2
  const imageContainerRef = useRef(null);

  // Handle mouse movement for dynamic scaling
  const handleMouseMove = (e) => {
    if (imageContainerRef.current) {
      const { left, top, width, height } = imageContainerRef.current.getBoundingClientRect();
      const x = ((e.clientX - left) / width) * 100;
      const y = ((e.clientY - top) / height) * 100;
      setMousePosition({ x, y });
    }
  };

  // Cycle between Image2 and Image3 every 5 seconds
  useEffect(() => {
    const images = [Image2,Image101];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % images.length;
      setCurrentImage(images[index]);
    }, 5000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const handleOnAdhams = async () => {
    try {
      navigate('/adhams');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <div className="relative w-full h-screen">
        {/* Main Image Container */}
        <div
          ref={imageContainerRef}
          onMouseMove={handleMouseMove}
          className="relative w-full h-full overflow-hidden"
        >
          <img
            src={currentImage}
            alt="Background"
            className="w-full  h-full object-cover slow-zoom-out transition-transform duration-500 ease-in-out transform hover:scale-110"
            style={{
              transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
              transform: 'scale(1.1)',
            }}
          />

          <div className="absolute inset-0  flex items-center justify-center">
            <div
              style={{
                backdropFilter: 'blur(2px)', // Blurred effect
                WebkitBackdropFilter: 'blur(10px)',
                cursor: 'pointer',
              }}
              className="p-6  rounded-xl"
            >
              <img
                src={Deziner}
                alt="Deziner Logo"
                className="max-w-[220px] md:max-w-[340px] w-full h-auto"
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

      <div className="py-12 bg-red-50 mt-3">
        <h2 className="text-center text-2xl mb-8 Montserrat font-thin ">
          OUR PRODUCTS 
        </h2>
        <div className="container px-4 flex justify-center">
          <div className=" md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl lg:ml-[10px]">
            {/* Brand Card 1 */}
            <div
              style={{ cursor: 'pointer' }}
              onClick={handleOnAdhams}
              className="bg-white w-full rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow flex justify-center items-center lg:ml-48  transform transition-transform duration-300 hover:scale-110"
            >
              <img
                src={Adhams}
                alt="Adhams"
                className="h-28 w-full object-contain"
              />
            </div>

            {/* Brand Card 2 */}
            <div
              style={{ cursor: 'pointer' }}
              className="bg-white w-full rounded-lg shadow-md p-8 hover:shadow-lg mt-3 transition-shadow flex justify-center items-center  transform transition-transform duration-300 hover:scale-110 lg:ml-48"
            >
              <img
                src={Simple}
                alt="Simple DRY"
                className="h-28 w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
            <section className="py-16 mt-3 px-4 md:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Design Your Vision, Inside and Out?
          </h2>
          <p className="text-xl mb-8">
          Discover the Difference Today!
          </p>
          <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Get in Touch
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
