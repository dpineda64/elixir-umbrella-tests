const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

function join(dest) {
  return path.resolve(__dirname, dest);
}

function web(dest) {
  return join('lib/ytsr_status/web/static/' + dest);
}

const config = {
  entry: web('js/app.ts'),
  output: {
    path: join('priv/static/js'),
    filename: 'app.js',
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.scss', '.json'],
    modules: [[path.resolve(__dirname, 'node_modules')]],
  },
  module: {
    noParse: /vendor\/pheonix/,
    rules: [
      {
        test: /\ts(x)?$/,
        exclude: [/node_modules/],
        use: [
          { loader: 'babel-loader' },
          { loader: 'awesome-typescript-loader' },
        ],
      },
      {
        test: /\.(css|scss)$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].css',
      allChunks: true,
      disable: false
    }),
  ]
};
