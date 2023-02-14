let path = require('path');

module.exports = {
    entry: './src/js/script.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist/js')
    },
    mode: 'development',
    watch: true
}
