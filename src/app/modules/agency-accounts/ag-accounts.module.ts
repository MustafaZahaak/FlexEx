import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgencyAccountsRoutingModule } from './ag-accounts.rotue';
import { DropdownMenusModule, WidgetsModule } from '../../_metronic/partials';
import { SharedModule } from "../../_metronic/shared/shared.module";
import { FormsModule } from '@angular/forms';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { NgbDropdownModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmationModalComponent } from '../shared/component/confirmation-modal/confirmation-modal.component';
import { BankListComponent } from './bank/list/bank-list.component';
import { BankComponent } from './bank/form/bank.component';
import { BankAddComponent } from './bank/add/bank-add.component';
import { BankUpdateComponent } from './bank/update/bank-update.component';

@NgModule({
  declarations: [
    BankComponent,
    BankAddComponent,
    BankListComponent,
    BankUpdateComponent
    
  ],
  imports: [
    CommonModule,
    InlineSVGModule,
    NgbDropdownModule,
    DropdownMenusModule,
    WidgetsModule,
    AgencyAccountsRoutingModule,
    SharedModule,
    FormsModule,
    NgbTooltipModule,
    ReactiveFormsModule,
    // ConfirmationModalComponent,
  ],
  exports: [
    
  ]
})
export class AgencyAccountsModule { }
