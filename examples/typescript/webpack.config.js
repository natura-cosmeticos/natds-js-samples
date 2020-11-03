require("systemjs-webpack-interop/auto-public-path");
const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const path = require("path");

module.exports = (webpackConfigEnv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "natds-js-examples",
    projectName: "typescript",
    webpackConfigEnv,
  });

  const rxjsExternals = {
    externals: [/^rxjs\/?.*$/],
  };

  delete defaultConfig.output.jsonpFunction
  defaultConfig.plugins.splice(2, 1)

  return merge(defaultConfig, rxjsExternals, {
    devtool: 'source-map',
    output: {
      publicPath: '/',
    },
  });
};