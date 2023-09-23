const path = require('path');

module.exports = {
  entry: './src/index.js',  // Specify the entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'),  // Specify the output directory
    filename: 'bundle.js',  // Specify the output bundle file name
  },
    devServer: {
      static: './public', // Specify the base directory for serving static files
      port: 8080, // Specify the port for the development server
      hot: true, // Enable hot module replacement
      historyApiFallback: true, // Enable HTML5 History API fallback for React Router
    },  

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Match both .js and .jsx file extensions
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i, // Match .scss or .sass file extensions
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ],
  },
};
