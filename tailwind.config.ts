import type { Config } from "tailwindcss";



const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
],
theme: {
    extend: {
        colors: {
            background: "var(--background)",
            foreground: "var(--foreground)",
        },
        keyframes: {
          glitch: {
            '0%': { transform: 'translate(0)', opacity: '1' },
            '20%': { transform: 'translate(-2px, -2px)', opacity: '0.8' },
            '40%': { transform: 'translate(2px, 2px)', opacity: '0.8' },
            '60%': { transform: 'translate(-1px, 1px)', opacity: '0.9' },
            '80%': { transform: 'translate(1px, -1px)', opacity: '1' },
            '100%': { transform: 'translate(0)', opacity: '1' },
          },
            rotateBackForth: {
            '0%, 100%': { transform: 'rotate(-20deg)' },
            '50%': { transform: 'rotate(20deg)' },
          },
            wave : {
            '0%': { transform: 'translateY(0)' },
            '100%': { transform: 'translateY(-15px)' },
            }
        },
        animation: {
          glitch: 'glitch 1s infinite ease-in-out alternate-reverse',
          rotate: 'rotateBackForth 1s infinite ease-in-out',
          wavy: 'wave 0.5s infinite alternate',
        },
    },
  },
  plugins: [],
};

export default config;
