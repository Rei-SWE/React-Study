const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  webpack: {
    plugins: [
      new ESLintPlugin()
    ]
  }
};
