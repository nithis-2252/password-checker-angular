const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
module.exports = {
  output: {
    uniqueName: "angular11-password-checker",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      // Remote containers are served independently and consumed by shell routes.
      remotes: {},
      shared: {
        "@angular/core": { singleton: true, strictVersion: false, requiredVersion: "11.2.14" },
        "@angular/common": { singleton: true, strictVersion: false, requiredVersion: "11.2.14" },
        "@angular/common/http": { singleton: true, strictVersion: false, requiredVersion: "11.2.14" },
        "@angular/forms": { singleton: true, strictVersion: false, requiredVersion: "11.2.14" },
        "@angular/router": { singleton: true, strictVersion: false, requiredVersion: "11.2.14" },
        rxjs: { singleton: true, strictVersion: false, requiredVersion: "6.6.7" }
      }
    })
  ],
};
