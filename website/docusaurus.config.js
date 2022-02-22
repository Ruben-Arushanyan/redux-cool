// site metadata
const siteMetadata = require('./config/site-metadata')

// plugins
const plugins = require('./config/plugins')

// presets
const presets = require('./config/presets')

// theme
const themeConfig = require('./config/theme')

module.exports = {
  ...siteMetadata,
  tagline: 'Build redux logic, without getting nervous.',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  organizationName: 'Redux-Cool',
  projectName: 'redux-cool',


  themeConfig,
  plugins,
  presets,
};
