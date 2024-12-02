type AsideMenu = {
  name: string;
  menueDetail:
  ReadonlyArray<{
    link: string,
    name: string,
    icon: string,
    tooltip: string
  }>
  ;
};

const asideMenues: ReadonlyArray<AsideMenu> = [
  {
    name: "transactions",
    menueDetail: [
      {
        link: 'a2a',
        name: 'A2A Transaction',
        icon: './assets/media/icons/duotune/general/gen025.svg',
        tooltip: 'AtoATransactions'
      },
      {
        link: 'Send Remitence',
        name:"Send Remitence",
        icon: './assets/media/icons/duotune/general/gen025.svg',
        tooltip: 'Send Remitence'
      },
      {
        link: 'Send Remitence',
        name:'Receive Remitence',
        icon: './assets/media/icons/duotune/general/gen025.svg',
        tooltip: 'Send Remitence'
      },
      
    ]
  },

  {
    name: "registration",
    menueDetail: [
      {
        link: 'individual-list',
        name: 'Individual',
        // icon: './assets/icons/duotune/communication/com006.svg',
        icon: './assets/media/icons/duotune/general/gen049.svg',
        tooltip: 'Individual Registrations'
      },
      {
        link: 'corporate',
        name:"Corporate",
        icon: './assets/media/icons/duotune/finance/fin001.svg',
        tooltip: 'Corporate Registrations'
      },
      {
        link: 'wc',
        name:'walking customer',
        icon: './assets/media/icons/duotune/general/gen025.svg',
        tooltip: 'Walking Customers'
      },
      {
        link: 'staff-list',
        name:'Staff or Organization',
        icon: './assets/media/icons/duotune/communication/com006.svg',
        tooltip: 'Walking Customers'
      },
      {
        link: 'shareholder',
        name:'Shareholder',
        icon: './assets/media/icons/duotune/general/gen025.svg',
        tooltip: 'Walking Customers'
      },
      {
        link: 'branch',
        name:'Branch',
        icon: './assets/media/icons/duotune/general/gen025.svg',
        tooltip: 'Walking Customers'
      },

      {
        link: 'agent',
        name:'Agent',
        icon: './assets/media/icons/duotune/general/gen025.svg',
        tooltip: 'Walking Customers'
      },
      {
        link: 'agent-commission',
        name:'Agent\'s Commission',
        icon: './assets/media/icons/duotune/general/gen025.svg',
        tooltip: 'Walking Customers'
      },
      
    ]
  }

];

export { asideMenues, AsideMenu };
