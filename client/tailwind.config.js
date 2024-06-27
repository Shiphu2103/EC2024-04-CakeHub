module.exports = {
  content: ['./src/**/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Roboto Mono', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'btn-gradient': 'linear-gradient(to right,  #ffe72f, #ffa31a)',
        'bgr-gradient': 'linear-gradient(to bottom,  #ffe72f, #ffa31a)',
      },
      colors: {
        'primary-50': '#fff6e8',
        'primary-100': '#ffe2b8',
        'primary-200': '#ffd596',
        'primary-300': '#ffc166',
        'primary-400': '#ffb548',
        'primary-500': '#ffa31a',
        'primary-600': '#e89418',
        'primary-700': '#b57412',
        'primary-800': '#8c5a0e',
        'primary-900': '#6b440b',
        'gray-50': '#fefefe',
        'gray-100': '#fbfcfc',
        'gray-200': '#f9fafb',
        'gray-300': '#f7f8f9',
        'gray-400': '#f5f6f8',
        'gray-500': '#f3f4f6',
        'gray-600': '#dddee0',
        'gray-700': '#adadaf',
        'gray-800': '#868687',
        'gray-900': '#666667',
        'yellow-50': '#fffdea',
        'yellow-100': '#fff8bf',
        'yellow-200': '#fff49f',
        'yellow-300': '#ffef74',
        'yellow-400': '#ffec59',
        'yellow-500': '#ffe72f',
        'yellow-600': '#e8d22b',
        'yellow-700': '#b5a421',
        'yellow-800': '#8c7f1a',
        'yellow-900': '#6b6114',
        'red-50': '#fdeceb',
        'red-100': '#f8c5c0',
        'red-200': '#f5a9a2',
        'red-300': '#f18178',
        'red-400': '#ee695d',
        'red-500': '#ea4335',
        'red-600': '#d53d30',
        'red-700': '#a63026',
        'red-800': '#81251d',
        'red-900': '#621c16',
      },
    },
  },
  plugins: [],
};