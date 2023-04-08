import house from "src/img/houseRickAndMorty.webp"
/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      backgroundImage:{
        "background-house": `url(../houseRickAndMorty.webp)`,
        "background-galaxy": `url(../rickAndMortyGalaxy.jpg)`,
        "citadelofRicks": `url(../CitadelofRicks.webp)`,
        "banner": `url(../bannerRickAndMorty.jpg)`
      },
      boxShadow:{
        "neon": "0 0 4px #a3e635, 0 0 4px #a3e635, 0 0 10px #a3e635, 0 0 15px #a3e635"
      }
    },
  },
  plugins: [],
}

