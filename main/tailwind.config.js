/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "sm-min": { max: "640px" }, 
        "sm-max": {max:"767px"},
        "lg-max": { min:"768px", max: "1023px" },
        "xl-max": { max: "1536px" },
        "2xl-min": { min: "1537px" },
      },
      fontFamily: {
        league: ["League Spartan", "sans-serif"],
      },
      backgroundColor: {
        google: "#4286F5",
        facebook: "#3C5A9A",
        main: "#1D5B79",
        prime: "#468B97",
        gFrom: "#FFCF81",
        gTo: "#FDFFAB",
        oddOne: "#F7EEDD",
        evenOne: "#ACE2E1",
      },
      colors: {
        main: "#1D5B79",
        editBtn: "#4793AF",
        stsBtn: "#DD5746",
        docBtn: "#A34343",
      },
    },
  },
  plugins: [],
};
