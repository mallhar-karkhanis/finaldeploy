import React from "react";
import Img from "../../assets/website/image.png";
import Img2 from "../../assets/website/bgwhite.png";
import Img3 from "../../assets/website/imagecopy.png";

const ServicesData = [
  {
    id: 1,
    img: Img,
    name: "24/7 Delivery",
    description:
      "Medtips offers round the clock delivery of medicines right at your doorstep.",
  },
  {
    id: 2,
    img: Img2,
    name: "30 Mins Delivery",
    description:
      "Medtips helps to get medicines delivered at your doorstep within 30 Minutes",
  },
  {
    id: 3,
    img: Img3,
    name: "Medical Tourism",
    description: "Medtips offeres a range of services for Medical Tourism",
  },
];

const Services = () => {
  return (
    <>
      <div className="py-10">
        <div className="container">
          {/* Header section*/}

          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <h1 className="text-3xl font-bold">Services</h1>
            <p className="text-xs sm:text-sm lg:text-base text-black-400">
              {""}
              MedTips offers fast, 30-minute medicine delivery, available 24/7
              across Navi Mumbai, bringing essential medications right to your
              doorstep. For medical tourists, we handle everything—from
              appointments to accommodations—so you can focus on your health.
              With MedTips, enjoy seamless healthcare support, whether local or
              traveling for treatment.
            </p>
          </div>
          {/* Card section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map(({ id, img, name, description }) => {
              return (
                <div
                  key={id}
                  className="max-w-[300px] group rounded-2xl bg-white dark:bg-gray-800 dark:hover:bg-primary  duration-300 p-4 shadow-xl"
                  style={{ transition: "background-color 0.3s ease" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#89E5F0")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "white")
                  }
                >
                  <div className="h-[100px]">
                   <a href="https://api.whatsapp.com/send?phone=917814772720&text=Hello%2C%20i%20need%20medicine%20"> <img
                      src={img}
                      alt=""
                      s
                      className={`${
                        id === 3 ? " h-[150px]" : "max-w-[200px]"
                      } mx-auto block transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300`}
                    /></a>
                  </div>
                  <div className="p-4 text-center">
                    <h1 className="text-xl font-bold">{name}</h1>
                    <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                      {description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default Services;
