import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,css,md,mdx,html}',
    './index.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default config
