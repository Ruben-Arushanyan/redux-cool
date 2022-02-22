
const navbar = {
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
}

module.exports = navbar;