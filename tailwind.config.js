module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
       "black": "#000000",
       "drak_grey": "#383838",
       "grey": "#707070",
       "light_grey": "#F3F4F6",
       "white": "#ffffff",
       "gray": "#a0a0a0",
       "red-100": "#8a0202"
       
      },

      "fontSize": {
       "sm": "0.75rem",
       "base": "0.875rem",
       "lg": "1rem",
       "xl": "1.375rem",
       "2xl": "1.875rem",
       "3xl": "2.0625rem",
       "4xl": "2.1875rem",
       "5xl": "2.375rem"
      },
      "fontFamily": {
       "work-sans": "Work Sans",
       "viga": "Viga",
       "homenaje": "Homenaje",
        "nunito": "Nunito"
      },
      "borderRadius": {
       "none": "0",
       "xs": "0.25rem",
       "sm": "0.3125rem",
       "default": "0.375rem",
       "lg": "0.6875rem",
       "xl": "1.5625rem",
       "2xl": "2.1875rem",
       "3xl": "5.0888671875rem",
       "full": "9999px"
      },
     },
  },
  plugins: [],
}
