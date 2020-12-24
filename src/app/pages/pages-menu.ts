import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Quality',
    icon: 'award-outline',
    link: '/pages/quality',
    hidden:false
  },
  {
    title: 'Finished Meter',
    icon: 'bar-chart-outline',
    link: '/pages/finishedMeter',
    hidden:false
  },
  {
    title: 'FEATURES',
    group: true,
  },  
  {
    title: 'Miscellaneous',
    icon: 'shuffle-2-outline',
    children: [
      {
        title: '404',
        link: '/pages/miscellaneous/404',
      },
    ],
  },
];
