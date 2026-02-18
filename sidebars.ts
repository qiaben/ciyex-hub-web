import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  guideSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/overview',
        'getting-started/pricing',
      ],
    },
    {
      type: 'category',
      label: 'User Guide',
      collapsed: false,
      items: [
        'user-guide/browsing-apps',
        'user-guide/installing-apps',
        'user-guide/managing-apps',
        'user-guide/app-configuration',
        'user-guide/usage-tracking',
      ],
    },
    {
      type: 'category',
      label: 'Developer Guide',
      collapsed: true,
      items: [
        'developer-guide/overview',
        'developer-guide/api-reference',
        'developer-guide/submit-app',
        'developer-guide/webhooks',
        'developer-guide/smart-on-fhir',
        'developer-guide/extension-points',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      collapsed: true,
      items: [
        'reference/faq',
        'reference/security',
        'reference/compliance',
      ],
    },
  ],
};

export default sidebars;
