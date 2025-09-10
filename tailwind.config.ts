/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#081E3F",     // SoFi-like deep navy for text/nav/footer
          blue: "#00A6FF",     // SoFi primary blue (CTA/buttons/links)
          sky:  "#E8F4FF",     // soft blue backgrounds/chips
          border: "#E5E7EB",   // soft gray borders
          text: "#0A0D14",     // near-black body text
          muted: "#6B7280",    // subdued text
          accent: "#FFD60A",   // optional accent (sparingly)
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)",
      },
      borderRadius: {
        xl2: "1.2rem",
      },
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  plugins: [],
};
