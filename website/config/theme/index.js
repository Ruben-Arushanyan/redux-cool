
const navbar = require('./navbar')

const theme = {
    image: 'img/logos/logo-1536x768.png',
    googleAnalytics: {
      trackingID: 'UA-195566886-1',
      anonymizeIP: true,
    },
    gtag: {
      trackingID: 'G-3XQYZ43FD5',
    },
    navbar,
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
}


module.exports = theme