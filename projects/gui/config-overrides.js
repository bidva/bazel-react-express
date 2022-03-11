/* config-overrides.js */
const path = require('path');
const {
  override,
  fixBabelImports,
  addWebpackPlugin,
} = require('customize-cra');
const AntDesignThemePlugin = require('antd-theme-webpack-plugin');
const rewireCompressionPlugin = require('react-app-rewire-compression-plugin');
const rewireLodashPlugin = require('react-app-rewire-lodash-plugin');

const options = {
  stylesDir: path.join(__dirname, './src/styles'),
  antDir: path.join(__dirname, './node_modules/antd'),
  varFile: path.join(__dirname, './src/styles/vars.less'),
  themeVariables: [
    '@alert-info-bg-color',
    '@alert-warning-bg-color',
    '@black',
    '@border-color-split',
    '@btn-default-border',
    '@btn-primary-color',
    '@percipio-primary-gray',
    '@percipio-primary-teal',
    '@percipio-primary-white',
    '@percipio-secondary-gray',
    '@component-background',
    '@divider-color',
    '@dropdown-selected-color',
    '@heading-color',
    '@input-border-color',
    '@item-active-bg',
    '@item-hover-bg',
    '@layout-body-background',
    '@layout-header-background',
    '@layout-sider-background',
    '@layout-trigger-background',
    '@menu-bg',
    '@menu-dark-bg',
    '@menu-dark-item-active-bg',
    '@menu-item-active-bg',
    '@menu-dark-inline-submenu-bg',
    '@page-header-back-color',
    '@progress-remaining-color',
    '@primary-color',
    '@select-border-color',
    '@select-item-selected-bg',
    '@select-selection-item-bg',
    '@table-body-sort-bg',
    '@table-header-bg',
    '@table-header-color',
    '@table-header-filter-active-bg',
    '@table-header-sort-active-bg',
    '@table-header-sort-bg',
    '@table-row-hover-bg',
    '@table-selected-row-bg',
    '@text-color-secondary-dark',
    '@text-color-secondary',
    '@text-color',
    '@white',
    '@alert-error-bg-color',
    '@table-expanded-row-bg',
    '@collapse-header-bg',
  ],
  indexFileName: 'index.html',
};

module.exports = override(
  (config, env) =>
    rewireCompressionPlugin(config, env, {
      test: /\.js(\?.*)?$/i,
      cache: true,
    }),
  fixBabelImports('antd', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  (config, env) =>
    rewireLodashPlugin(config, env, {
      collections: true,
      paths: true,
    }),
  addWebpackPlugin(new AntDesignThemePlugin(options))
);
