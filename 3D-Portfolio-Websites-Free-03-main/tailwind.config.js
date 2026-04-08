/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        // Deep Navy Background
        primary: "#050816",   
        // Muted Royal Blue for cards/secondary elements
        secondary: "#1b274a", 
        // VIBRANT GLOWY CYAN/BLUE
        accent: "#00f2ff", 
      },
      backgroundImage: {
        explosion: 'url("/bg-explosion.png")',
        circles: 'url("/bg-circles.png")',
        circleStar: 'url("/circle-star.svg")',
        site: 'url("/site-bg.svg")',
      },
      animation: {
        "spin-slow": "spin 6s linear infinite",
      },
      fontFamily: {
        poppins: [`var(--font-poppins)`, "sans-serif"],
        sora: [`var(--font-sora)`, "sans-serif"],
      },
      // This adds a custom drop shadow utility for that extra neon glow
      dropShadow: {
        'glow': '0 0 10px rgba(0, 242, 255, 0.8)',
        'avatar-glow': '0 0 20px rgba(0, 242, 255, 0.3)',
      }
    },
  },
  plugins: [require("tailwind-scrollbar")],
};