import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankListComponent } from './bank/list/bank-list.component';
import { BankUpdateComponent } from './bank/update/bank-update.component';
import { BankAddComponent } from './bank/add/bank-add.component';


const routes: Routes = [
     {
          path: '',
          children: [
               // {
               //      path: 'cashin-hand',
               //      component: IndividualComponent,
               // },
               {
                    path: 'banks',
                    component: BankListComponent,
               },
               {
                    path: 'bank-add',
                    component: BankAddComponent,
               },
               {
                    path: 'bank-update/:bId',
                    component: BankUpdateComponent,
               },
               // {
               //      path: 'expenses',
               //      component: CorporateComponent,
               // },
               // {
               //      path: 'incomes',
               //      component: WalkingCustomerComponent,
               // },
               // {
               //      path: 'assets',
               //      component: StaffFormComponent,
               // },
               // {
               //      path: 'liabilities',
               //      component: StaffAddComponent,
               // },
               { path: '', redirectTo: 'individual', pathMatch: 'full' },
               { path: '**', redirectTo: 'individual', pathMatch: 'full' },
          ],
     },
];

@NgModule({
     imports: [RouterModule.forChild(routes)],
     exports: [RouterModule],
})
export class AgencyAccountsRoutingModule { }
