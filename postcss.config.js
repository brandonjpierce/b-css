module.exports = {
  'use': [
    'postcss-import',
    'postcss-custom-properties',
    'postcss-custom-media',
    'postcss-each',
    'css-mqpacker',
    'autoprefixer',
    'cssnano'
  ],
  'input': 'src/b-css.css',
  'dir': 'dist',
  'local-plugins': true,
};
