import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Testimonials from './components/Testimonial/Testimonials';
import MedicalTourism from './components/MedicalTourism/MedicalTourism';
import Footer from './components/Footer.jsx/Footer';

const App = () => {
  return (
    <>
    <div className='bg-white dark:'>
    <Navbar />
    <Hero />
    <Services/>
    <Testimonials />
    <MedicalTourism />
    <Footer />

    </div>
   


      
    </>
  );
};

export default App;
