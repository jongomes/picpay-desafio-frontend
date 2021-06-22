// production config
const { merge } = require('webpack-merge');
const { resolve } = require('path');

const commonConfig = require('./common');

module.exports = merge(commonConfig, {
  mode: 'production',
  entry: '@/pages/index.tsx',
  output: {
    filename: 'js/bundle.[contenthash].min.js',
    path: resolve(__dirname, '../../dist'),
    publicPath: '/',
  },
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      AMBIENTE: JSON.stringify('prod'),
      API_URL: JSON.stringify(''),
      OIDC_KEY: JSON.stringify(''),
    }),
  ],
});
