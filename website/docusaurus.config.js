const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'React Datasheet Grid',
  tagline: 'An Excel-like React component to create beautiful spreadsheets',
  url: 'https://react-datasheet-grid.netlify.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'nick-keller', // Usually your GitHub org/user name.
  projectName: 'react-datasheet-grid', // Usually your repo name.
  themeConfig: {
    algolia: {
      appId: 'OVO3D4IJS9',
      apiKey: '0f37b9b0bd96aa1069cba400c005410b',
      indexName: 'react-datasheet-grid',
      contextualSearch: false,
      searchPagePath: 'search',
    },
    announcementBar: {
      content:
        '⭐️ <b>If you like React-Datasheet-Grid, give it a star on <a target="_blank" href="https://github.com/nick-keller/react-datasheet-grid">GitHub</a> and follow us on <a target="_blank" href="https://twitter.com/NicolasKa3">Twitter</a>!</b>',
      backgroundColor: '#8bd6c4',
    },
    navbar: {
      title: 'React Datasheet Grid',
      items: [
        {
          href: '/docs/features',
          position: 'left',
          label: 'Features',
        },
        {
          type: 'doc',
          docId: 'getting-started',
          position: 'left',
          label: 'Doc',
        },
        {
          href: 'https://www.npmjs.com/package/react-datasheet-grid',
          label: 'NPM',
          position: 'right',
        },
        {
          href: 'https://github.com/nick-keller/react-datasheet-grid',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    prism: {
      theme: darkCodeTheme,
      darkTheme: darkCodeTheme,
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Features',
              to: '/docs/features',
            },
            {
              label: 'Getting started',
              to: '/docs/getting-started',
            },
            {
              label: 'Examples',
              to: '/docs/examples/default-values',
            },
            {
              label: 'Reference',
              to: '/docs/api-reference/props',
            },
          ],
        },
        {
          title: 'Socials',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/nick-keller/react-datasheet-grid',
            },
            {
              label: 'NPM',
              href: 'https://www.npmjs.com/package/react-datasheet-grid',
            },
            {
              label: 'Tggl: Feature flags for teams',
              to: 'https://tggl.io',
              rel: '',
            },
            {
              label: 'RabbitGUI: RabbitMQ IDE',
              to: 'https://rabbitgui.com/',
              rel: '',
            },
          ],
        },
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/nick-keller/react-datasheet-grid/edit/master/website/',
        },
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('react-datasheet-grid/dist/style.css'),
          ],
        },
        gtag: {
          trackingID: 'G-PZ8BTMNFN9',
        },
      },
    ],
  ],
}
