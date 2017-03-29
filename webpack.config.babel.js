import webpack from 'webpack';
import path from 'path';

export default {
  entry: [
    './src/client',
  ],

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // publicPath: `http://localhost:${wdsPort}/dist`,
  },

  module: {
    rules: [
        {
          test: /\.(js)$/,
          use: 'babel-loader',
          exclude: /node_modules/,
        },
    ],
  },

  devtool: 'source-map',

  resolve: {
    extensions: ['.js'],
  },

  watch: true,

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
}
