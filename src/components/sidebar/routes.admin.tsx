import {
  PiGameController,
  PiHouse,
  PiUsers,
  PiGridFour,
  PiCards,
  PiWallet,
  PiCurrencyDollar,
  PiUserCircle,
  PiArrowLeft,
} from 'react-icons/pi';

export const routesAdmin = [
  {
    icon: <PiHouse size={24} />,
    name: 'Administração',
    url: '#',
    childrens: [
      {
        icon: <PiHouse size={24} />,
        name: 'Dashboard',
        url: '/admin',
      },
      {
        icon: <PiUsers size={24} />,
        name: 'Contas',
        url: '/admin/users',
      },
      {
        icon: <PiGridFour size={24} />,
        name: 'Plataformas',
        url: '/admin/plataforms',
      },
      {
        icon: <PiGameController size={24} />,
        name: 'Jogos',
        url: '/admin/games',
      },
    ],
  },
  {
    icon: <PiCards size={24} />,
    name: 'Transações',
    url: '#',
    childrens: [
      {
        icon: <PiCards size={24} />,
        name: 'Transações',
        url: '/admin/transactions',
      },
      {
        icon: <PiWallet size={24} />,
        name: 'Depósitos',
        url: '/admin/deposits',
      },
      {
        icon: <PiCurrencyDollar size={24} />,
        name: 'Saques',
        url: '/admin/withdraws',
      },
      {
        icon: <PiUserCircle size={24} />,
        name: 'Indicações',
        url: '/admin/indications',
      },
    ],
  },

  {
    icon: <PiArrowLeft size={24} />,
    name: 'Voltar',
    url: '/',
  },
];
