module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': "#0D53FC",
        'lgry': "#f8f8f8",
        'gry': "#ddd",
        'dgry': "#aaa",
        'red': "#ff0000",
        'white': "#fff",
      }
    },

  },
  plugins: [
    require('tailwind-scrollbar'),

  ],
  variants: {
    scrollbar: ['rounded']
  }
};