import house from "src/img/houseRickAndMorty.webp"
/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      backgroundImage:{
        "background-house": `url(../houseRickAndMorty.webp)`,
        "background-galaxy": `url(../rickAndMortyGalaxy.jpg)`
      }
    },
  },
  plugins: [],
}

