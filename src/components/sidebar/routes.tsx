import { PiGameController, PiTicket, PiFire } from 'react-icons/pi';

import { MdOutlineCasino } from 'react-icons/md';

import { HiOutlineMicrophone, HiOutlineUserGroup } from 'react-icons/hi';

import { IRoutes } from '@src/interfaces';

export const routes: IRoutes[] = [
  {
    icon: <PiTicket size={24} />,
    name: 'Casino',
    url: '/',
    childrens: [
      {
        icon: <PiFire size={24} />,
        name: 'Populares',
        url: '/',
      },
      {
        icon: <MdOutlineCasino size={24} />,
        name: 'Todos os jogos',
        url: '/casino/games/all',
      },
      {
        icon: <PiGameController size={24} />,
        name: 'Fortune Dragon',
        url: '/casino/pg-soft/fortune-dragon',
      },
      {
        icon: <PiGameController size={24} />,
        name: 'Fortune Tiger',
        url: '/casino/pg-soft/fortune-tiger',
      },
      {
        icon: <PiGameController size={24} />,
        name: 'Fortune Rabbit',
        url: '/casino/pg-soft/fortune-rabbit',
      },
      {
        icon: <PiGameController size={24} />,
        name: 'Fortune Ox',
        url: '/casino/pg-soft/fortune-ox',
      },
      {
        icon: <PiGameController size={24} />,
        name: 'Fortune Mouse',
        url: '/casino/pg-soft/fortune-mouse',
      },
      {
        icon: <PiGameController size={24} />,
        name: 'Jungle Delight',
        url: '/casino/pg-soft/jungle-delight',
      },
    ],
  },
  // {
  // icon: <MdOutlineLeaderboard size={24} />,
  // name: 'Ranking',
  // url: '/ranking',
  //},
  {
    icon: <HiOutlineUserGroup size={24} />,
    name: 'Afiliado',
    url: '/affiliate?tab=indication',
  },
  {
    icon: <HiOutlineMicrophone size={24} />,
    name: 'Suporte',
    url: 'https://tawk.to/chat/66064237a0c6737bd126202c/1hq475aju',
  },
];
