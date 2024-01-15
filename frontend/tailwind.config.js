/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

    }, fontFamily: {
        'modern' : ['Poppins', 'Play', 'Saira', 'system-ui', 'sans-serif']
    },
    ripple: theme => ({
        colors: theme('colors'),
        modifierTransition: 'background 0.4s',
        activeTransition: 'background 0.3s',
    }),backgroundImage: {
        'hero-pattern': "url('https://cdn.pixabay.com/photo/2015/01/28/22/20/bookkeeping-615384_1280.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
  },
  plugins: [
    require('tailwindcss-ripple')()
  ],
}