/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        blob: "blob 7s infinite"
      },
      keyframes: {
        
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)"
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)"
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)"
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)"
          },
        },
      },
      colors: {
        'bastion-green': '#1E9E87',
        'bastion-pale-green': '#426662',
        'bastion-light-green': '#0CF39F',
        'bastion-dark-green': '#1F9A75',
        'bastion-teal': '#29B098',
        'bastion-dark-teal': '#364F4B',
        'bastion-black': '#0D0D0D',
        'bastion-dark-grey': '#161616',
        'bastion-grey': '#3E3E3E',
        'bastion-red': '#CC4949',
        'bastion-gradient-light-green': '#0CF39F',
        'bastion-token-green': '#30CB92',
        'bastion-token-dark-green': '#00bd78',
        gold: '#D5A73A',
        primary: '#202225',
        secondary: '#5865f2'
      },
      fontWeight: {
        'extra-bold': 800,
      },
      backgroundImage: {
        'bastion-bg-damascus': "url('/public/bastion_bg_damascus.png')"
      }
    },
  },
  plugins: [],
}
