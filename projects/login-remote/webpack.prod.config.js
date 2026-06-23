const baseConfig = require('./webpack.config');
module.exports = {
  ...baseConfig,
  output: {
    ...baseConfig.output,
    publicPath: 'https://password-checker-login-remote.vercel.app/'
  }
};
