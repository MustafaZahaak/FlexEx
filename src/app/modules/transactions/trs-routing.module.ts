import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { A2aComponent } from './a2a/a2a.component';
import { TransactionsComponent } from './transactions.component';


const routes: Routes = [
     {
          path: '',
          component: TransactionsComponent,
          children: [
               {
                    path: 'a2a',
                    component: A2aComponent,
               },
               {
                    path: 'send',
                    component: A2aComponent,
               },
               { path: '', redirectTo: 'a2a', pathMatch: 'full' },
               { path: '**', redirectTo: 'a2a', pathMatch: 'full' },
          ],
     },
];

@NgModule({
     imports: [RouterModule.forChild(routes)],
     exports: [RouterModule],
})
export class TransactionsRoutingModule { }
