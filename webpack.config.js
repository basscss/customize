
module.exports = {

  entry: './entry.js',

  output: {
    filename: 'bundle.js',
    path: __dirname
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.jsx$/, loader: 'babel-loader' },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader!cssnext-loader' }
    ]
  },

  cssnext: {
    compress: true,
    features: {
      customProperties: {
        strict: false
      },
      rem: false,
      pseudoElements: false,
      colorRgba: false
    }
  },

  node: {
    fs: 'empty'
  }

}

