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

@NgModule({
  declarations: [
    IndividualListComponent,
    IndividualComponent
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
    ReactiveFormsModule 
  ]
})
export class RegModule { }
