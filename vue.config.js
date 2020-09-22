const path = require('path');
let publicPath = process.env.NODE_ENV === 'production' ? 'lcg-admin/' : '/';

module.exports = {
  publicPath,
  productionSourceMap: false,
  filenameHashing:false,
  outputDir: path.resolve(__dirname, "../../public/lcg-admin"),
  indexPath: path.resolve(__dirname, "../views/lcg_admin/index.blade.php"),
  chainWebpack: (config) => {
  	config.module.rule('vue').uses.delete('cache-loader');
  	config.module.rule('js').uses.delete('cache-loader');
  	config.plugins.delete('preload');
    config.plugins.delete('prefetch');
  },
};
