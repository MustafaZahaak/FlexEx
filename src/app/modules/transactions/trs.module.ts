import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionsRoutingModule } from './trs-routing.module'; 
import { TransactionsComponent } from './transactions.component';
import { DropdownMenusModule, WidgetsModule } from '../../_metronic/partials';
import {SharedModule} from "../../_metronic/shared/shared.module";
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
     TransactionsComponent,
  ],
  imports: [
    CommonModule,
    TransactionsRoutingModule,
    DropdownMenusModule,
    WidgetsModule,
    SharedModule,
    FormsModule 
  ]
})
export class TrsModule {}
