/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

    theme: {
      extend: {
        colors: {
          primary: "#f19509",
          primaryDark: "#e86f00",
          "light-orange": "#f1dabf",
          "light-gray": "#1a1f25",
          "dark-gray": "#272c35",
        },
        container: {
            center: "true" , 
            padding:  {
                DEFAULT : "1rem" , 
                sm : "2rem" , 
            }, 
        }
      },
    },
    plugins: [],
  };
  