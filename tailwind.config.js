import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {


      colors:{



        'custom-pink': '#f6cbd1',
        'custom-purple':'#d1c1d7'
      }
    },
  },
  plugins: [daisyui],
  daisyui: {
    styled: true,
    themes: ["pastel"],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    Theme: "light",
  },
};
