const path = require('path')

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Redux Cool',
  tagline: 'Build redux logic, without getting nervous.',
  url: 'https://redux-cool.js.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Redux-Cool',
  projectName: 'redux-cool',
  themeConfig: {
    navbar: {
      title: 'Redux Cool',
      logo: {
        alt: 'Redux Cool Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/introduction',
          position: 'left',
          label: 'Getting Started',
          activeBasePath: 'docs/introduction'
        },
        {
          to: 'docs/concepts',
          position: 'left',
          label: 'Concepts',
          activeBasePath: 'docs/concepts'
        },
        {
          to: 'docs/guide',
          position: 'left',
          label: 'Usage Guide',
          activeBasePath: 'docs/guide'
        },
        {
          to: 'docs/api',
          position: 'left',
          label: 'API',
          activeBasePath: 'docs/api'
        },
        {
          href: 'https://github.com/Redux-Cool/redux-cool',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/introduction',
            },
            {
              label: 'Concepts',
              to: '/docs/concepts',
            },
            {
              label: 'Usage Guide',
              to: '/docs/guide',
            },
            {
              label: 'API',
              to: '/docs/api',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/RubenArushanyan',
            },
            {
              label: 'Dev.to',
              href: 'https://dev.to/redux-cool',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Redux-Cool/redux-cool',
            },
            {
              label: 'npm',
              href: 'https://www.npmjs.com/package/redux-cool',
            },
          ],
        },
      ],
      copyright: `Copyright © 2020-${new Date().getFullYear()} Ruben Arushanyan`,
    },
  },
  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        debug: false,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        swCustom: path.resolve(__dirname, 'src/sw.js'),
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
    ],
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/Redux-Cool/redux-cool/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
