import React from "react";
import img from "../../assets/website/Avatars Ozu-16.png";
import img2 from "../../assets/website/Avatars Separate new-02-02.png";

const Founders = () => {
  const founders = [
    {
      image: img,
      name: "Paramvir Singh Maniktala",
      description: "Chief Operating Officer",
    },
    {
      image: img2,
      name: "Umang Bhanushali",
      description: "Chief Executive Officer",
    },
  ];

  return (
    <div className="container mx-auto my-5">
      <div className="text-center mb-10 max-w-md mx-auto">
        <h2 className="text-3xl font-bold">Meet Our Founders</h2>
      </div>

      {/* Inline layout for founders */}
      <div className="flex flex-wrap justify-center gap-40">
        {founders.map((founder, index) => (
          <div
            className="bg-white shadow-lg rounded-lg text-center p-4 flex flex-col items-center relative"
            style={{ width: "300px", height: "350px", fontFamily: "'Arial', sans-serif" }}
            key={index}
          >
            <img
              src={founder.image}
              className="rounded-full object-cover mb-4"
              alt={founder.name}
              style={{
                width: index === 1 ? "280px" : "200px", // Larger size for the second image
                height: index === 1 ? "250px" : "200px",
              }}
            />
            <div
              style={{
                position: "relative",
                top: index === 1 ? "-60px" : "0px", // Adjust text position for the second founder
                zIndex: 1,
              }}
            >
              <h5 className="text-xl font-bold mb-2">{founder.name}</h5>
              <p className="text-gray-600 font-semibold">{founder.description}</p>
              <p className="text-sm text-gray-500">Co-Founder</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Founders;
