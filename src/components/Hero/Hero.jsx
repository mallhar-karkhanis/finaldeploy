import React from "react";
import bgImg from "../../assets/website/vector3.jpg";
import img1 from "../../assets/website/edited_image_ozu_logo_fixed.png";
import img2 from"../../assets/website/qr.jpeg";
import img3 from"../../assets/website/nightdelivery.jpeg";

const ImageList = [
  { id: 1, img: img1 },
  { id: 2, img: img2 },
  { id: 3, img: img3 },
];

const bgImage = {
  backgroundImage: `url(${bgImg})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "100%",
};

const Hero = () => {
  const [imageId, setImageId] = React.useState(img1);

  return (
    <>
      <div
        style={bgImage}
        className="min-h-[550px] sm:min-h-[600px] bg-gray-100 dark:bg-gray-950 dark:text-white duration-200 flex justify-center items-center"
      >
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                Your Health, Our Priority
              </h1>
              <p  className="text-base sm:text-lg lg:text-xl ">
              Get your health items delivered right to your doorstep, anytime – 24/7 in Navi Mumbai!
              </p>
              <div>

                <a href="https://api.whatsapp.com/send?phone=917814772720&text=Hello%2C%20i%20need%20medicine%20">
                <button className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full hover:scale-105 duration-200">
                  Order on Whatsapp
                </button>
                </a>
               
              </div>
            </div>
            {/* Image Section */}
            <div className="order-1 sm:order-2 min-h-[500px] sm:min-h-[450px] flex justify-center items-center relative">
              {/* Main video section */}
              <div className="flex justify-center items-center h-[300px] sm:h-[450px] overflow-hidden">
                <img
                  src={imageId}
                  className="w-[300px] sm:w-[450px] rounded-lg "
                 
                />
              </div>
              {/* image list section */}
              <div
  className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute bottom-[0px]  lg:-right-10 bg-white/30 rounded-full"
>

                {
                    ImageList.map((item)=>(
                        <img 
                        key={item.id}
                        src={item.img}
                        className="max-w-[80px] h-[80px] object-contain inline-block hover:scale-105 duration-200"
                        onClick={() => {
                          setImageId(
                            item.id === 1
                              ? img1
                              : item.id === 2
                              ? img2
                              : img3 // This handles item.id === 3
                          );
                        }}

                        
                        />
                    ))

                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
