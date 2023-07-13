/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "heroBg-1g-1": "url('/src/assets/sliders/slider-one-lg.jpg')",
        "heroBg-sm-1": "url('/src/assets/sliders/slider-one-sm.jpg')",
        "heroBg-1g-2": "url('/src/assets/sliders/slider-two-lg.jpg')",
        "heroBg-sm-2": "url('/src/assets/sliders/slider-two-sm.jpg')",
        "heroBg-1g-3": "url('/src/assets/sliders/slider-three-lg.jpg')",
        "heroBg-sm-3": "url('/src/assets/sliders/slider-three-sm.jpg')",
        "eye-clinic": "url('/src/assets/summary/eye-clinic.jpg')",
        services: "url('/src/assets/summary/services.jpg')",
        "visit-us": "url('/src/assets/summary/visit-us.jpg')",
        milestone: "url('/src/assets/milestone/milestone.jpg')",
        "pages-heroBg": "url('/src/assets/pages-heroBg.jpg')",
      },
    },
  },
  plugins: [],
};
