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
        link: 'individual',
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
        link: 'ws',
        name:'walking customer',
        icon: './assets/media/icons/duotune/general/gen025.svg',
        tooltip: 'Walking Customers'
      },
      
    ]
  }

];

export { asideMenues, AsideMenu };
