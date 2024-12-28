import React from "react";
import img from "../../assets/website/MT.jpg";



const MedicalTourism = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img src={img} alt="Medical Tourism" className="w-full h-full object-cover rounded-lg" />
        </div>
        <div className="md:w-1/2 p-8">
          <h2 className="text-3xl font-bold mb-4">Medical Tourism by Medtipss</h2>
          <p className="text-gray-600">Medtipss is the most preferred Medical Tourism Provider in India which is known for excellent care and effort in understanding the needs of international patient guests. We are known for the exceptional value we provide to our clients. We offer cost-effective, safe, comfortable, and quality treatments, with the help of our network of the best hospitals in India, professionals and experienced surgeons. We cover all the aspects of medical tourism and guide you at every step.</p>
         <a href="https://forms.gle/oDW73AfLc7XRwj7w6">
         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4">Book Services</button>
         </a> 
        </div>
      </div>
    </section>
  );
};

export default MedicalTourism;
