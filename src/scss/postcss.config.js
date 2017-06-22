module.exports = {
  plugins: {
    // 'postcss-import': {},
    // 'postcss-cssnext': {},
    'autoprefixer': {
      browsers: ['last 2 versions', '> 5%']
    },
    'cssnano': {
      safe: true
    }
  }
}
