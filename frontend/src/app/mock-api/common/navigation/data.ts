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
  {
    id: 'postman',
    title: 'Postman',
    type: 'basic',
    icon: 'heroicons_outline:command-line',
    link: '/postman',
  },
  {
    id: 'history',
    title: 'History',
    type: 'basic',
    icon: 'heroicons_outline:clock',
    link: '/history',
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
  {
    id: 'postman',
    title: 'Postman',
    type: 'basic',
    icon: 'heroicons_outline:command-line',
    link: '/postman',
  },
  {
    id: 'history',
    title: 'History',
    type: 'basic',
    icon: 'heroicons_outline:clock',
    link: '/history',
  },
];
