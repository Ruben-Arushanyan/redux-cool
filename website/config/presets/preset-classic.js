const path = require('path')

const sidebarPath = path.resolve(__dirname, '../sidebars')
const customCssPath = path.resolve(__dirname, '../../src/css/custom.css')


const preset_classic = [
    '@docusaurus/preset-classic',
    {
      docs: {
        sidebarPath,
        editUrl:
          'https://github.com/Redux-Cool/redux-cool/edit/master/website/',
      },
      theme: {
        customCss: customCssPath,
      },
    },
]

module.exports = preset_classic