 import React from 'react';
import rev1 from "../../components/Testimonial/rev2.jpeg";
import rev2 from "../../components/Testimonial/rev3.jpeg";
import rev3 from "../../components/Testimonial/rev4.jpeg";
import rev4 from "../../components/Testimonial/rev5.png";
import rev5 from "../../components/Testimonial/rev6.png";

const Testimonials = () => {
  const testimonialsData = [
    {
      imageSrc: rev2,
    },
    {
      imageSrc: rev4,
    },
    {
      imageSrc: rev5,
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Testimonials</h2>  

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index} 

              className={`bg-white  rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-110`}
            >
              <div className="flex items-center ">
                <img
                  src={testimonial.imageSrc}
                  alt="Image Description"
                  className="h-full w-full object-cover rounded"
                />
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section> 

  );
};

export default Testimonials;
