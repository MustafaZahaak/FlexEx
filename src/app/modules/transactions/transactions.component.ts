// import { Component, Input, OnInit, ViewChild } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { LayoutService } from '../../_metronic/layout';

// type Tabs = 'Sidebar' | 'Header' | 'Toolbar';

// @Component({
//   selector: 'app-transactions',
//    templateUrl: './transactions.component.html',
//   styleUrl: './transactions.component.scss'
// })
// export class TransactionsComponent implements OnInit {
//   activeTab: Tabs = 'Sidebar';
//   model: any;
//   @Input() isDrawer: boolean = false;
//   @ViewChild('form', { static: true }) form: NgForm;
//   configLoading: boolean = false;
//   resetLoading: boolean = false;
//   constructor(private layout: LayoutService) {}

//   ngOnInit(): void {
//     this.model = this.layout.getLayoutConfig(
//       this.layout.getBaseLayoutTypeFromLocalStorage()
//     );
//   }

//   setActiveTab(tab: Tabs) {
//     this.activeTab = tab;
//   }

//   resetPreview(): void {
//     this.resetLoading = true;
//     this.layout.resetBaseConfig();
//   }

//   submitPreview(): void {
//     this.configLoading = true;
//     this.layout.saveBaseConfig(this.model); // it will refresh the page
//   }
// }

import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
 styleUrl: './transactions.component.scss'
})
export class TransactionsComponent implements OnInit {
  @HostBinding('class') class = 'd-flex flex-column flex-lg-row';

  constructor() {}

  ngOnInit(): void {}
}
