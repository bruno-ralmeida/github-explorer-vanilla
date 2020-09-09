const path = require('path');

module.exports = {
  mode: 'development',
  entry: './project/assets/js/main',
  output: {
    path: path.resolve(__dirname, 'project/public'),
    filename: 'main.js'
  }
}