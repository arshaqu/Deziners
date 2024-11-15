import React from 'react';
import insta from '../Assets/Icons/insta.png'
import whatspp from '../Assets/Icons/whatsapp.png'
import twitter from '../Assets/Icons/Twitter.png'
import youtube from '../Assets/Icons/youtube.png'

import backgroundImage from '../Assets/imagebg.jpg'

function ContactUs() {
  return (
    <div>
    <div
      className="min-h-screen relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Contact Section Header with Shadow Effect */}
      <div className="pt-12 pb-20 text-center montserrat">
        <h1
          className="text-5xl font-bold text-white"
          style={{
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
          }}
        >
          CONTACT US
        </h1>
      </div>

      {/* Centered Content Container */}
      <div style={{}} className="container mx-auto px-4 items-center justify-items-center ">
      
      <iframe
  title="Deziner Ceiling Company Location Map"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7831.38188892793!2d76.04167400616583!3d11.061781780883226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba64bdfcb6cc7c3%3A0xe3dc22feb3ba422f!2sDEZINER%20CEILING%20CO.!5e0!3m2!1sen!2sin!4v1730975718307!5m2!1sen!2sin"
  className="w-full sm:w-[200px] md:w-[400px] lg:w-[600px] h-[100px] sm:h-[150px] rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105"
  style={{
    border: '5px solid white',
    borderRadius: '15px',
    width: '400px',
    height: '300px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.8)',
  }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

      </div>

  {/* Other Content Box */}

    <p className='text-center mt-10 text-white montserrat' >Follow us on : - </p>


  <div className='flex justify-center mt-3 gap-3'>
    <img style={{width:'62px',height:'60px'}} src={insta} alt='insta' />
    <img style={{width:'66px',height:'64px',marginTop:'-1px'}} src={whatspp} alt='insta' />
    <img style={{width:'62px',height:'59px'}} src={twitter} className='mt-1' alt='insta' />
    <img style={{width:'72px',height:'89px',marginTop:'-10px'}} src={youtube} className='mt-1' alt='insta' />
  </div>
  <p className='text-center mt-10 text-white montserrat' >Connect with us : - </p>


</div>

</div>
   
  );
}

export default ContactUs;
