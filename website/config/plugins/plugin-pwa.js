/**
 * Copyright (c) 2020-present Ruben Arushanyan (https://github.com/ruben-arushanyan)
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * 
 */

const path = require('path')

const plugin_pwa = [
    '@docusaurus/plugin-pwa',
    {
      debug: false,
      offlineModeActivationStrategies: [
        'appInstalled',
        'standalone',
        'queryString',
      ],
      swCustom: path.resolve(__dirname, '../../src/sw.js'),
      pwaHead: [
        {
          tagName: 'link',
          rel: 'icon',
          href: '/img/logo.png',
        },
        {
          tagName: 'link',
          rel: 'manifest',
          href: `/manifest.json`,
        },
        {
          tagName: 'meta',
          name: 'theme-color',
          content: 'rgb(37, 194, 160)',
        },
        {
          tagName: 'meta',
          name: 'apple-mobile-web-app-capable',
          content: 'yes',
        },
        {
          tagName: 'meta',
          name: 'apple-mobile-web-app-status-bar-style',
          content: '#000',
        },
        {
          tagName: 'link',
          rel: 'apple-touch-icon',
          href: '/img/logo.png',
        },
        {
          tagName: 'link',
          rel: 'mask-icon',
          href: '/img/logo.svg',
          color: 'rgb(62, 204, 94)',
        },
        {
          tagName: 'meta',
          name: 'msapplication-TileImage',
          content: '/img/logo.png',
        },
        {
          tagName: 'meta',
          name: 'msapplication-TileColor',
          content: '#000',
        },
      ],
    },
]


module.exports = plugin_pwa