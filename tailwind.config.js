/** @type {import('tailwindcss').Config} */
'./src/components/NavBar'

export default {
  content: [
    "./index.html",
    "./pages/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",
    './src/homeComponents/*.{html,js,jsx,tsx}',
    './src/AllRoutesNavigation/*.{html,js,jsx,tsx}',
    './src/navigationComponents/*.{html,js,jsx,tsx}',
    './src/contactMeComponents/*.{html,js,jsx,tsx}',
    './src/projectComponents/*.{html,js,jsx,tsx}',
    './src/educationComponents/*.{html,js,jsx,tsx}'
    
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#002057',
        customOrange:'#ff7b00',
        customDark: "#001601"
      },

      boxShadow: {
        custom: '6px 6px 0px rgba(0, 0, 22, 1)', // Offset x, Offset y, Blur radius, Spread
        intense: '5px 10px 15px rgba(0, 0, 0, 0.4)', // Example of a larger shadow
      },
      dropShadow: {
        '3d': '2px 4px 6px rgba(0, 0, 0, 0.4)', // Custom shadow effect
      },

    },
  },
  
  plugins: [],
}

