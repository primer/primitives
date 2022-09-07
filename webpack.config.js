const nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = {
  entry: './build.ts',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [{
          loader:'ts-loader',
          options: {
            configFile: "new.tsconfig.json"
          }
        }],
        exclude: /node_modules/,
      },
    ],
  },
  target: 'node', // use require() & use NodeJs CommonJS style
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
  externalsPresets: {
      node: true // in order to ignore built-in modules like path, fs, etc. 
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'build.js',
    library: {
      name: "buildTokens",
      type: 'commonjs',
    },
    path: path.resolve(__dirname, 'dist'),
  },
};