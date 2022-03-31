const { override } = require("customize-cra");
const addLessLoader = require("customize-cra-less-loader");

const lessLoaderConfig = {
  cssLoaderOptions: {
    sourceMap: true,
    modules: {
      localIdentName: "[hash:base64:8]",
    },
  },
  lessLoaderOptions: {
    lessOptions: {
      strictMath: true,
    },
  },
};

module.exports = override(addLessLoader(lessLoaderConfig));
