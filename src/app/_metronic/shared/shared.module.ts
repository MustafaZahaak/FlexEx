import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {KeeniconComponent} from './keenicon/keenicon.component';
import {CommonModule} from "@angular/common";
import { NgxSpinnerModule } from "ngx-spinner";


@NgModule({
  declarations: [
    KeeniconComponent
  ],
  imports: [
    CommonModule,
    NgxSpinnerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    KeeniconComponent,
    NgxSpinnerModule
  ]
})
export class SharedModule {
}
