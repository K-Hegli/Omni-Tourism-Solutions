module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#0d0d1a',
        panelBg: '#1a1a2e',
        offWhite: '#e0e0e0',
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(90deg, #ff2a5f, #ff5c33)',
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
        body: ['Atkinson Hyperlegible', 'sans-serif'],
      },
      animation: {
        'spin': 'spin 3s linear infinite',
      },
    },
  },
  plugins: [],
}