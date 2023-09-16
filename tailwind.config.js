/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // teal color
        'zellige-50':'#bcdfd1',
        'zellige-100':'#b7dccd',
        'zellige-200':'#93cbb4',
        'zellige-300':'#81c2a8',
        'zellige-400':'#6eb99b',
        'zellige-500':'#6dad93',
        'zellige-600':'#6ba18a',
        'zellige-700':'#688f7e',
        'zellige-800':'#678979',
        'zellige-900':'#5b786a',
        'zellige-950':'#34453d',
        // tan color
        'medina-50': '#fdfbf8',
        'medina-100': '#fbf7f0',
        'medina-200':'#f6eee0',
        'medina-300':'#f2e8d5',
        'medina-400':'#e6ddcb',
        'medina-500':'#d9d1c0',
        'medina-600':'#cdc6b6',
        'medina-700':'#c0baab',
        'medina-800':'#8d8b80',
        'medina-900':'#5b5d56',
        'medina-950':'#424641',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
