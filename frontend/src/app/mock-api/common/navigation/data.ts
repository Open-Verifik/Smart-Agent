/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
  {
    id: 'smart-check',
    title: 'SmartCheck',
    type: 'collapsable',
    icon: 'heroicons_outline:sparkles',
    children: [
      {
        id: 'chat',
        title: 'nav.chat',
        subtitle: 'AI-powered identity validation',
        type: 'basic',
        icon: 'heroicons_outline:chat-bubble-left-right',
        link: '/chat',
      },
      {
        id: 'postman',
        title: 'Postman',
        subtitle: 'API testing and development',
        type: 'basic',
        icon: 'heroicons_outline:command-line',
        link: '/postman',
      },
      {
        id: 'smart-batch',
        title: 'SmartBatch',
        subtitle: 'Batch processing automation',
        type: 'basic',
        icon: 'heroicons_outline:queue-list',
        link: '/smart-batch',
      },
      {
        id: 'history',
        title: 'nav.history',
        subtitle: 'View past requests and logs',
        type: 'basic',
        icon: 'heroicons_outline:clock',
        link: '/history',
      },
      {
        type: 'divider',
      },
      {
        id: 'subscription-plans',
        title: 'Subscription Plans',
        subtitle: 'Manage your subscription',
        type: 'basic',
        icon: 'heroicons_outline:credit-card',
        link: '/subscription-plans',
      },
      {
        id: 'add-credits',
        title: 'Add Credits',
        subtitle: 'Purchase additional credits',
        type: 'basic',
        icon: 'heroicons_outline:plus-circle',
        link: '/add-credits',
      },
      {
        type: 'divider',
      },
      {
        id: 'status-check',
        title: 'Status Check',
        subtitle: 'System health and availability',
        type: 'basic',
        icon: 'heroicons_outline:check-circle',
        link: '/status-check',
      },
    ],
  },
  // {
  //   id: 'zelf-id',
  //   title: 'Zelf ID',
  //   type: 'basic',
  //   icon: 'heroicons_outline:identification',
  //   link: '/zelf-id',
  // },
];

export const compactNavigation: FuseNavigationItem[] = [
  {
    id: 'chat',
    title: 'nav.chat',
    tooltip: 'nav.chat',
    type: 'aside',
    icon: 'heroicons_outline:chat-bubble-left-right',
    children: [],
  },
];

export const futuristicNavigation: FuseNavigationItem[] = [
  {
    id: 'chat',
    title: 'nav.chat',
    type: 'group',
    children: [],
  },
];

export const horizontalNavigation: FuseNavigationItem[] = [
  {
    id: 'smart-check',
    title: 'SmartCheck',
    type: 'collapsable',
    icon: 'heroicons_outline:sparkles',
    children: [
      {
        id: 'chat',
        title: 'nav.chat',
        subtitle: 'AI-powered identity validation',
        type: 'basic',
        icon: 'heroicons_outline:chat-bubble-left-right',
        link: '/chat',
      },
      {
        id: 'postman',
        title: 'Postman',
        subtitle: 'API testing and development',
        type: 'basic',
        icon: 'heroicons_outline:command-line',
        link: '/postman',
      },
      {
        id: 'smart-batch',
        title: 'SmartBatch',
        subtitle: 'Batch processing automation',
        type: 'basic',
        icon: 'heroicons_outline:queue-list',
        link: '/smart-batch',
      },
      {
        id: 'history',
        title: 'nav.history',
        subtitle: 'View past requests and logs',
        type: 'basic',
        icon: 'heroicons_outline:clock',
        link: '/history',
      },
      {
        type: 'divider',
      },
      {
        id: 'subscription-plans',
        title: 'Subscription Plans',
        subtitle: 'Manage your subscription',
        type: 'basic',
        icon: 'heroicons_outline:credit-card',
        link: '/subscription-plans',
      },
      {
        id: 'add-credits',
        title: 'Add Credits',
        subtitle: 'Purchase additional credits',
        type: 'basic',
        icon: 'heroicons_outline:plus-circle',
        link: '/add-credits',
      },
      {
        type: 'divider',
      },
      {
        id: 'status-check',
        title: 'Status Check',
        subtitle: 'System health and availability',
        type: 'basic',
        icon: 'heroicons_outline:check-circle',
        link: '/status-check',
      },
    ],
  },
  // {
  //   id: 'zelf-id',
  //   title: 'Zelf ID',
  //   type: 'basic',
  //   icon: 'heroicons_outline:identification',
  //   link: '/zelf-id',
  // },
];
