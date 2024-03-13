import { PiGameController, PiTicket, PiFire } from 'react-icons/pi';

import { MdOutlineCasino, MdOutlineLeaderboard } from 'react-icons/md';

import { PiHandCoinsFill } from 'react-icons/pi';

import { HiOutlineMicrophone, HiOutlineUserGroup } from 'react-icons/hi';

export const routes = [
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
        url: '/games',
      },
      {
        icon: <PiGameController size={24} />,
        name: 'Fortune Dragon',
        url: '/game/fortune-dragon',
      },
      {
        icon: <PiGameController size={24} />,
        name: 'Fortune Tiger',
        url: '/game/fortune-tiger',
      },
      {
        icon: <PiGameController size={24} />,
        name: 'Fortune Rabbit',
        url: '/game/fortune-rabbit',
      },
      {
        icon: <PiGameController size={24} />,
        name: 'Fortune Ox',
        url: '/game/fortune-ox',
      },
      {
        icon: <PiGameController size={24} />,
        name: 'Fortune Mouse',
        url: '/game/fortune-mouse',
      },
      {
        icon: <PiGameController size={24} />,
        name: 'Jungle Delight',
        url: '/game/jungle-delight',
      },
    ],
  },
  {
    icon: <PiHandCoinsFill size={24} />,
    name: 'Depósito',
    url: '/deposit',
  },
  {
    icon: <MdOutlineLeaderboard size={24} />,
    name: 'Ranking',
    url: '/ranking',
  },
  {
    icon: <HiOutlineUserGroup size={24} />,
    name: 'Afiliado',
    url: '/affiliate',
  },
  {
    icon: <HiOutlineMicrophone size={24} />,
    name: 'Suporte',
    url: '/affiliate',
  },
];
