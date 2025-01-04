import React, { useEffect } from "react";


const DarkMode = () => {
  useEffect(() => {
    // Ensure the theme is set to light mode on load
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }, []);

  return (
    <>
      <div className="relative">
        
      </div>
    </>
  );
};

export default DarkMode;
