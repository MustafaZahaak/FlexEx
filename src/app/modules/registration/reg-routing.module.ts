import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndividualComponent } from './individual/individual.component';
import { CorporateComponent } from './corporate/corporate.component';
import { WalkingCustomerComponent } from './walking-customer/walking-customer.component';
import { IndividualListComponent } from './individual/list/individual-list.component';
import { StaffAddComponent } from './staff/add/staff-add.component';
import { StaffFormComponent } from './staff/form/staff-form.component';
import { StaffListComponent } from './staff/list/staff-list.component';
import { StaffUpdateComponent } from './staff/update/staff-update.component';


const routes: Routes = [
     {
          path: '',
          // component: TransactionsComponent,
          children: [
               {
                    path: 'individual',
                    component: IndividualComponent,
               },
               {
                    path: 'individual-list',
                    component: IndividualListComponent,
               },
               {
                    path: 'corporate',
                    component: CorporateComponent,
               },
               {
                    path: 'wc',
                    component: WalkingCustomerComponent,
               },
               {
                    path: 'staff',
                    component: StaffFormComponent,
               },
               {
                    path: 'staff-add',
                    component: StaffAddComponent,
               },
               {
                    path: 'staff-list',
                    component: StaffListComponent,
               },
               {
                    path: 'staff-update/:sId',
                    component: StaffUpdateComponent,
               },
               { path: '', redirectTo: 'individual', pathMatch: 'full' },
               { path: '**', redirectTo: 'individual', pathMatch: 'full' },
          ],
     },
];

@NgModule({
     imports: [RouterModule.forChild(routes)],
     exports: [RouterModule],
})
export class RegRoutingModule { }
