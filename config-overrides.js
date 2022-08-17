const { override, fixBabelImports, overrideDevServer } = require("customize-cra");
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
      strictMath: false,
      javascriptEnabled: true,
      importLoaders: true,
      // modifyVars: {
      //   "@primary-color": "#1DA57A",
      //   "@link-color": "@primary-color",
      // },
    },
  },
};

// module.exports = override(addLessLoader(lessLoaderConfig));
module.exports = {
  webpack: override(
      fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
      }),
      addLessLoader(lessLoaderConfig)
  ),
  devServer: overrideDevServer(),
}