// Use Resolve
import { resolve } from 'path';

// Use Html Webpack Plugin
import HtmlWebpackPlugin from 'html-webpack-plugin';

// Set Uri
const uri = path => resolve(process.cwd(), path);

// Configure
export default {
  // Mode
  mode: 'development',

  // Entries
  entry: {
    'jquery.extension': uri(`src/jquery.extension.js`),
  },

  // Outputs
  output: {
    filename: '[name].js',
    path: uri(`dist`),
  },

  // Plugins
  plugins: [
    // Html
    new HtmlWebpackPlugin({
      template: uri(`/src/index.html`),
    }),
  ],
};
