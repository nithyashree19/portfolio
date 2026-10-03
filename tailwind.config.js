export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] },
      colors: { accent: 'rgb(var(--accent) / <alpha-value>)' },
    },
  },
  plugins: [],
}
