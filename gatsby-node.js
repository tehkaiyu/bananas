exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === "build-html") {
    config.loader("null", {
      test: /mo-js/,
      loader: "null-loader",
    });
  }
};
