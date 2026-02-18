import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Ciyex Hub',
  tagline: 'The App Marketplace for Healthcare — Extend Your EHR with Powerful Integrations',
  favicon: 'img/Ciyex-favicon-new.png',

  future: {
    v4: true,
  },

  url: 'https://qiaben.github.io',
  baseUrl: '/ciyex-hub-web/',

  organizationName: 'qiaben',
  projectName: 'ciyex-hub-web',

  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/qiaben/ciyex-hub-web/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/qiaben/ciyex-hub-web/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/Ciyex-logo.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    announcementBar: {
      id: 'hub_launch',
      content: '🚀 Ciyex Hub is now live! Browse and install apps to extend your EHR. <a target="_blank" rel="noopener noreferrer" href="/apps">Explore Apps</a>',
      backgroundColor: '#6b5ce7',
      textColor: '#ffffff',
      isCloseable: true,
    },
    navbar: {
      title: 'Ciyex Hub',
      logo: {
        alt: 'Ciyex Hub Logo',
        src: 'img/Ciyex-logo-no-text.png',
        srcDark: 'img/Ciyex-logo-no-text.png',
      },
      items: [
        { to: '/apps', label: 'Apps', position: 'left' },
        {
          type: 'docSidebar',
          sidebarId: 'guideSidebar',
          position: 'left',
          label: 'User Guide',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          type: 'dropdown',
          label: 'Developers',
          position: 'left',
          items: [
            { label: 'Getting Started', to: '/docs/developer-guide/overview' },
            { label: 'API Reference', to: '/docs/developer-guide/api-reference' },
            { label: 'Submit an App', to: '/docs/developer-guide/submit-app' },
          ],
        },
        {
          href: 'https://github.com/qiaben/ciyex-hub-web',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://ciyex.org',
          label: 'Ciyex EHR',
          position: 'right',
        },
        {
          to: 'https://app-dev.ciyex.org',
          label: 'Open Hub',
          position: 'right',
          className: 'button button--primary navbar-signup-btn',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Marketplace',
          items: [
            { label: 'Browse Apps', to: '/apps' },
            { label: 'Categories', to: '/apps#categories' },
            { label: 'Featured Apps', to: '/apps#featured' },
            { label: 'Pricing', to: '/docs/getting-started/pricing' },
          ],
        },
        {
          title: 'User Guide',
          items: [
            { label: 'Getting Started', to: '/docs/getting-started/overview' },
            { label: 'Installing Apps', to: '/docs/user-guide/installing-apps' },
            { label: 'Managing Apps', to: '/docs/user-guide/managing-apps' },
            { label: 'FAQ', to: '/docs/reference/faq' },
          ],
        },
        {
          title: 'Developers',
          items: [
            { label: 'Developer Guide', to: '/docs/developer-guide/overview' },
            { label: 'API Reference', to: '/docs/developer-guide/api-reference' },
            { label: 'Submit an App', to: '/docs/developer-guide/submit-app' },
            { label: 'Webhook Events', to: '/docs/developer-guide/webhooks' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'Ciyex EHR', href: 'https://ciyex.org' },
            { label: 'GitHub', href: 'https://github.com/qiaben/ciyex-hub-web' },
            { label: 'Discord', href: 'https://discord.gg/ciyex' },
            { label: 'Twitter', href: 'https://twitter.com/ciyexehr' },
          ],
        },
      ],
      copyright: `Copyright \u00A9 ${new Date().getFullYear()} Ciyex Organization. Ciyex Hub — The Healthcare App Marketplace.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
