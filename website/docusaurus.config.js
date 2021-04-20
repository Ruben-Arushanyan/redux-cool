/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Redux Cool',
  tagline: 'Build redux logic, without getting nervous.',
  url: 'https://redux-cool.js.org',
  baseUrl: '/redux-cool/',
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
        src: 'img/logo.jpg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Getting Started',
        },
        // {
        //   type: 'doc',
        //   docId: 'tutorial-basics/create-a-page',
        //   position: 'left',
        //   label: 'Tutorials',
        // },
        // {to: '/blog', label: 'Blog', position: 'left'},
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
              to: '/docs',
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
            },
            // {
            //   label: 'Stack Overflow',
            //   href: 'https://stackoverflow.com/questions/tagged/redux-cool',
            // },
            // {
            //   label: 'Discord',
            //   href: 'https://discordapp.com/invite/redux-cool',
            // },
          ],
        },
        {
          title: 'More',
          items: [
            // {
            //   label: 'Blog',
            //   to: '/blog',
            // },
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
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/Redux-Cool/redux-cool/edit/gh-pages/website/',
        },
        // blog: {
        //   showReadingTime: true,
        //   editUrl:
        //     'https://github.com/Redux-Cool/redux-cool/edit/gh-pages/website/blog/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
