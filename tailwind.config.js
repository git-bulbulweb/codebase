/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
     screens:{

      "max-exs":{max: "150px"},
       "max-ixs": {max: "200px"},
       "max-uxs": {max: "270px"},
      "max-nxs": {max: "400px"},
       "max-nsm": {max: "450px"},
       "max-nmd": {max: "590px"},
       "max-nl": {max: "950px"},
      "max-nxl": {max: "990px"},
      "max-md":{max: "768px"},
      "max-sm": {max: "640px"},
      "max-lg": {max: "1024px"},
      "md": "768px",
      "max-2xl": {max: "1536px"},
      "max-xl" : {max: "1280px"},
      "nsm": {max: "450px"},
      "nxs": "400px"

     },
     fontFamily: {
      'cursive' : ['Freckle Face', 'cursive']
     },
     backgroundImage: {
      'hero-pattern': "linear-gradient(rgb(40, 42, 53, 0.90),rgb(40, 42, 53, 0.90)), url('https://www.w3schools.com/signup/img_typing.jpg')",
      'community-pattern':"linear-gradient(rgb(40, 42, 53, 0.90),rgb(40, 42, 53, 4.9)),url('https://www.w3schools.com/signup/community-image.png')",
      },
    },
  },
 
  plugins: []
});

