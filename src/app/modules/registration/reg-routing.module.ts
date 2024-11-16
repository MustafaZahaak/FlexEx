import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndividualComponent } from './individual/individual.component';
import { CorporateComponent } from './corporate/corporate.component';
import { WalkingCustomerComponent } from './walking-customer/walking-customer.component';
import { IndividualListComponent } from './individual/list/individual-list.component';


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
