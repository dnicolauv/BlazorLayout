module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
      extend: {
          opacity: ['disabled'],
          cursor: ['disabled'],
          textColor: ['disabled'],
          backgroundColor: ['disabled']
      },
  },
    plugins: [
        require('@tailwindcss/forms')
    ],
}
