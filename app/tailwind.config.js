/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {},
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#fbbf24",
          secondary: "#d97706",
          accent: "#000000",
          neutral: "#1c1917",
          "base-100": "#f3f4f6",
          info: "#3b82f6",
          success: "#00d056",
          warning: "#ff3d00",
          error: "#ff4054",
        },
      },
    ],
  },
};
