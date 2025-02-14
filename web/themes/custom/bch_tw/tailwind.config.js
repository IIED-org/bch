// tailwind.config.js
module.exports = {
    content: [
      './templates/**/*.html.twig',
      './**/*.php',
      './js/**/*.js',
    ],
    theme: {
      extend: {},
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
    ],
  };