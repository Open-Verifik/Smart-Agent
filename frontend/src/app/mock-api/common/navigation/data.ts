/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id: 'chat',
        title: 'nav.chat',
        type: 'basic',
        icon: 'heroicons_outline:chat-bubble-left-right',
        link: '/chat',
    },
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
        id: 'chat',
        title: 'nav.chat',
        type: 'basic',
        icon: 'heroicons_outline:chat-bubble-left-right',
        link: '/chat',
    },
];
