/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
            "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {},
    theme:{
      container:{
        center:true
      }
    }
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: 'base', // only generate global styles
      strategy: 'class', // only generate classes
    }),
    //tw-elements/dist/plugin.cjs
    require("tw-elements/dist/plugin.cjs"),
  ],
  darkMode: "class"
}

