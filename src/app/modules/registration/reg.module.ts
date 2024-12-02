import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegRoutingModule } from './reg-routing.module';
import { DropdownMenusModule, WidgetsModule } from '../../_metronic/partials';
import { SharedModule } from "../../_metronic/shared/shared.module";
import { FormsModule } from '@angular/forms';
import { IndividualListComponent } from './individual/list/individual-list.component';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { NgbDropdownModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { IndividualComponent } from './individual/individual.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IndividualAddComponent } from './individual/add/individual-add.component';
import { StaffFormComponent } from './staff/form/staff-form.component';
import { StaffListComponent } from './staff/list/staff-list.component';
import { StaffAddComponent } from './staff/add/staff-add.component';
import { StaffUpdateComponent } from './staff/update/staff-update.component';
import { ConfirmationModalComponent } from '../shared/component/confirmation-modal/confirmation-modal.component';

@NgModule({
  declarations: [
    IndividualListComponent,
    IndividualComponent,
    IndividualAddComponent,
    StaffFormComponent,
    StaffListComponent,
    StaffAddComponent,
    StaffUpdateComponent,
    ConfirmationModalComponent
  ],
  imports: [
    CommonModule,
    InlineSVGModule,
    NgbDropdownModule,
    DropdownMenusModule,
    WidgetsModule,
    RegRoutingModule,
    SharedModule,
    FormsModule,
    NgbTooltipModule,
    ReactiveFormsModule,
  ],
  exports: [
    
  ]
})
export class RegModule { }
