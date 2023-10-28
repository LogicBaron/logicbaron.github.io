// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Magna Lapis',
  tagline: 'Math, Information and Machine Learning',
  favicon: 'img/eyestone.ico',

  // Set the production url of your site here
  url: 'https://magnalapis.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'magnalapis', // Usually your GitHub org/user name.
  projectName: 'magnalapis.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      // 'classic',
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://https://github.com/magnalapis/magnalapis.github.io',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://https://github.com/magnalapis/magnalapis.github.io',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'MagnaLapis',
        logo: {
          alt: 'EyeStone Logo',
          src: 'img/eyestone.svg',
        },
        style: 'dark',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'CommunitySidebar',
            position: 'left',
            label: 'Hello, lapis'
          },
          {
            type: 'dropdown',
            label: 'Concept',
            position: 'left',
            items: [
              {
                type: 'docSidebar',
                sidebarId: 'MLConceptSidebar',
                label: 'Machine Learning'
              },
              {
                type: 'docSidebar',
                sidebarId: 'ProgrammingSidebar',
                label: 'Programming'
              },
              {
                type: 'docSidebar',
                sidebarId: 'MathSidebar',
                label: 'Math'
              },
            ]
          },
          {
            type: 'dropdown',
            label: 'Data',
            position: 'left',
            items: [
              {
                type: 'docSidebar',
                sidebarId: 'DataImageSidebar',
                label: 'Image'
              },
              {
                type: 'docSidebar',
                sidebarId: 'DataTextSidebar',
                label: 'Text'
              }
            ]
          },
          {
            type: 'dropdown',
            label: 'Models',
            position: 'left',
            items: [
              {
                type: 'docSidebar',
                sidebarId: 'MLModelSidebar',
                label: 'ML models'
              },
              {
                type: 'docSidebar',
                sidebarId: 'AIModelSidebar',
                label: 'AI models'
              },
              {
                type: 'docSidebar',
                sidebarId: 'LargeModelSidebar',
                label: 'Large models'
              },
            ]
          },
          {
            type: 'dropdown',
            label: 'Practice',
            position: 'left',
            items: [
              {
                type: 'docSidebar',
                sidebarId: 'TorchSidebar',
                label: 'Torch',
              },
              {
                type: 'docSidebar',
                sidebarId: 'EfficienttrainSidebar',
                label: 'Efficient Train'
              },
              {
                type: 'docSidebar',
                sidebarId: 'MLOPsSidebar',
                label: 'MLOPs'
              },
            ]
          },
          {to: '/blog', label: 'Blog', position: 'right'},
          {
            href: 'https://github.com/magnalapis',
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
                label: 'Hello, Lapis',
                to: '/docs/community/hello',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/or7l_floll/',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/jhpark9701/'
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://https://github.com/magnalapis',
              },
              {
                label: 'leetcode',
                href: 'https://leetcode.com/superstone/'
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
