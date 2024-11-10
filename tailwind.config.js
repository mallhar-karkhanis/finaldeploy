/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode:"class",
  theme: {
    extend: {
      colors:{
        primary:"#0055FE",
        secondary:"#3974FF",

      },
      container:{
        center:true,
        padding:{
          DEFAULT:"1rem",
          sm:"3rem"
  
  
        }
  
      }
    },
   
  },
  plugins: [],
}

