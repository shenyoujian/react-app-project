const { override, fixBabelImports,addPostcssPlugins} = require('customize-cra');

module.exports = override(
    // antd按需加载
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  }),
    // rem适配. 将px改为rem
   addPostcssPlugins([require("postcss-px2rem")({ remUnit: 100})])
);

//4. 在index.js中引入适配rem的文件