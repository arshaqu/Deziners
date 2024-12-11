import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Adhams from './Pages/Adhams';
import WallCovering from './Pages/WallCovering';
import Charcoal from './Pages/Charcoal';
import PvcLouvers from './Pages/PvcLouvers.jsx'
import WpvcLouvers from './Pages/WpvcLouvers.jsx';
import ContactUs from './Pages/ContactUs.jsx';
import AboutUs from './Pages/AboutUs.jsx';
import SoffitLouvers from './Pages/SoffitLouvers.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/adhams" element={<Adhams />} />
        <Route path="/wallcovering" element={<WallCovering />} />
        <Route path="/pvc_louvers" element={<PvcLouvers />} />
        <Route path="/charcoal" element={<Charcoal />} />
        <Route path="/wpvc_louvers" element={<WpvcLouvers />} />
        <Route path="/soffit_louvers" element={<SoffitLouvers/>} />

        <Route path="/contactus" element={<ContactUs/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
        


   
      </Routes>
    </Router>
  );
}

export default App;
