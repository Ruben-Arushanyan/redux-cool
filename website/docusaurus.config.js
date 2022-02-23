// site metadata
const siteMetadata = require('./config/site-metadata')

// deployment
const deployment = require('./config/deployment')

// plugins
const plugins = require('./config/plugins')

// presets
const presets = require('./config/presets')

// theme
const theme = require('./config/theme')

module.exports = {
  ...siteMetadata,
  ...deployment,

  themeConfig: theme,
  plugins,
  presets,
};
