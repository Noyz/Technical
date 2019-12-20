const { override, fixBabelImports } = require('customize-cra');
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'React',
    libraryDirectory: 'react',
    style: 'css',
  }),
);