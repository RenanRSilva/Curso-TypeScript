const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/A0019-exercicio/A0019-exercicio.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
        options: {
          configFile: 'tsconfig.frontend.json'
        }
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/assets/js'),
  },
  devtool: 'source-map'
};