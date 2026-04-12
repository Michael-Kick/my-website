/** @type {import('tailwindcss').Config} */
import fluid,{extract, screens, fontSize} from "fluid-tailwind";
module.exports = {
  darkMode: 'class',
  content: {
    files: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    extract,
  },
  theme: {
    extend: {
      fontSize: {
        base: '15.5px',
        lg: '18px',
        xl: '21px',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        jetbrains: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        primary: 'var(--color-primary)',
        primaryHover: 'var(--color-primary-hover)',
        onPrimary: 'var(--color-on-primary)',
        secondary: 'var(--color-secondary)',
        danger: 'var(--color-danger)',
        background: 'var(--color-background)',
        text: 'var(--color-text-base)',
        border: 'var(--color-border)',
        contrast: 'var(--color-contrast)',
        contrastDark: 'var(--color-contrastDark)',
      }
    },
    screens,
    fontSize,
  },
  plugins: [fluid],
}
