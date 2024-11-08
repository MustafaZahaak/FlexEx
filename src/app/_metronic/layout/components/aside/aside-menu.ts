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
    name: "Transactions",
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
  }

];

export { asideMenues, AsideMenu };
