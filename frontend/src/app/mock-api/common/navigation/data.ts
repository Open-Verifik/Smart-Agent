/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id: 'smart-check',
        title: 'nav.smart_check',
        type: 'collapsable',
        icon: 'heroicons_outline:sparkles',
        children: [
            {
                id: 'chat',
                title: 'nav.chat',
                subtitle: 'nav.ai_validation',
                type: 'basic',
                icon: 'heroicons_outline:chat-bubble-left-right',
                link: '/chat',
            },
            {
                id: 'postman',
                title: 'nav.postman',
                subtitle: 'nav.api_testing',
                type: 'basic',
                icon: 'heroicons_outline:command-line',
                link: '/postman',
            },
            {
                id: 'smart-batch',
                title: 'nav.smart_batch',
                subtitle: 'nav.batch_automation',
                type: 'basic',
                icon: 'heroicons_outline:queue-list',
                link: '/smart-batch',
            },
            {
                id: 'history',
                title: 'nav.history',
                subtitle: 'nav.history_subtitle',
                type: 'basic',
                icon: 'heroicons_outline:clock',
                link: '/history',
            },
            {
                type: 'divider',
            },
            {
                id: 'subscription-plans',
                title: 'nav.subscription_plans',
                subtitle: 'nav.manage_subscription',
                type: 'basic',
                icon: 'heroicons_outline:credit-card',
                link: '/subscription-plans',
            },
            {
                id: 'add-credits',
                title: 'nav.add_credits',
                subtitle: 'nav.purchase_credits',
                type: 'basic',
                icon: 'heroicons_outline:plus-circle',
                link: '/add-credits',
            },
        ],
    },
    {
        id: 'smart-monitor',
        title: 'nav.smart_monitor',
        type: 'collapsable',
        icon: 'heroicons_outline:signal',
        children: [
            {
                id: 'status-check',
                title: 'nav.status_check',
                subtitle: 'nav.system_health',
                type: 'basic',
                icon: 'heroicons_outline:check-circle',
                link: '/smart-monitor/status-check',
            },
            {
                id: 'incidents',
                title: 'nav.incidents',
                subtitle: 'nav.active_incidents',
                type: 'basic',
                icon: 'heroicons_outline:exclamation-triangle',
                link: '/smart-monitor/incidents',
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
        title: 'nav.smart_check',
        type: 'collapsable',
        icon: 'heroicons_outline:sparkles',
        children: [
            {
                id: 'chat',
                title: 'nav.chat',
                subtitle: 'nav.ai_validation',
                type: 'basic',
                icon: 'heroicons_outline:chat-bubble-left-right',
                link: '/chat',
            },
            {
                id: 'postman',
                title: 'nav.postman',
                subtitle: 'nav.api_testing',
                type: 'basic',
                icon: 'heroicons_outline:command-line',
                link: '/postman',
            },
            {
                id: 'smart-batch',
                title: 'nav.smart_batch',
                subtitle: 'nav.batch_automation',
                type: 'basic',
                icon: 'heroicons_outline:queue-list',
                link: '/smart-batch',
            },
            {
                id: 'history',
                title: 'nav.history',
                subtitle: 'nav.history_subtitle',
                type: 'basic',
                icon: 'heroicons_outline:clock',
                link: '/history',
            },
            {
                type: 'divider',
            },
            {
                id: 'subscription-plans',
                title: 'nav.subscription_plans',
                subtitle: 'nav.manage_subscription',
                type: 'basic',
                icon: 'heroicons_outline:credit-card',
                link: '/subscription-plans',
            },
            {
                id: 'add-credits',
                title: 'nav.add_credits',
                subtitle: 'nav.purchase_credits',
                type: 'basic',
                icon: 'heroicons_outline:plus-circle',
                link: '/add-credits',
            },
        ],
    },
    {
        id: 'smart-monitor',
        title: 'nav.smart_monitor',
        type: 'collapsable',
        icon: 'heroicons_outline:signal',
        children: [
            {
                id: 'status-check',
                title: 'nav.status_check',
                subtitle: 'nav.system_health',
                type: 'basic',
                icon: 'heroicons_outline:check-circle',
                link: '/smart-monitor/status-check',
            },
            {
                id: 'incidents',
                title: 'nav.incidents',
                subtitle: 'nav.active_incidents',
                type: 'basic',
                icon: 'heroicons_outline:exclamation-triangle',
                link: '/smart-monitor/incidents',
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
