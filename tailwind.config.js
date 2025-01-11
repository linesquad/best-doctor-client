/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        //Blues
        darkBlue: "#004682",
        lightBlue: "#07D",
        lightSkyBlue: "#D8EFFF",
        brightBlue: "#478AEC",
        oceanBlue: "#267CC5",
        pastelBlue: "#CCDCF3",
        crystalBlue: "#EFF6FF",
        softBlue: "#CBDEEF",
        extraLightBlue: "rgb(1,113,210)",
        //Greys
        lightTransparent: "rgba(0, 0, 0, 0.04)",
        semiTransparent: "rgba(0, 0, 0, 0.50)",
        lightGrey: "#CBDEEF",
        veryDark: "#101012",
        //Brown
        lightBrown: "rgba(46, 24, 20, 0.62)",
      },
      backgroundImage: {
        "gradient-text": "linear-gradient(180deg, #07D 0%, #004077 100%)",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      fontWeight: {
        // poppins
        poppinsRegular: 400,
        poppinsMedium: 500,
        poppinsSemiBold: 600,
        poppinsBold: 700,
        poppinsExtraBold: 800,
        // roboto
        robotoRegular: 400,
        robotoMedium: 500,
        robotoBold: 700,
        // nunito
        nunitoRegular: 400,
        nunitoSemiBold: 600,
        nunitoBold: 700,
        nunitoExtraBold: 800,
        // heebo
        heeboRegular: 400,
        heeboMedium: 500,
        heeboBold: 700,
      },
      screens: {
        mediumSm: "420px",
        extraSm: "250px",
        foldSm: "280px",
      },
      boxShadow: {
        "custom-light": "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },
      borderColor: {
        "blog-border": "rgba(0, 0, 0, 0.12)",
      },
    },
    plugins: [],
  },
};
