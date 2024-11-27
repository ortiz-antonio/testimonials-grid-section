module.exports = {
  plugins: [
    require('postcss-import-ext-glob'),
    require('postcss-import'),
    require('tailwindcss'),
    ...(process.env.NODE_ENV === 'prod'
        ? [require("cssnano")({ preset: "default" })]
        : [])
  ]
};
