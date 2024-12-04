import { Component } from '@angular/core';
import { ApiService } from 'src/app/modules/core';
import { agencyAccountsRoutes } from '../../ag-accounts.route.model';
import { BehaviorSubject, first } from 'rxjs';


@Component({
  selector: 'app-bank-add',
  templateUrl: './bank-add.component.html',
  styleUrl: './bank-add.component.scss'
})
export class BankAddComponent {

  agRoutes: any = agencyAccountsRoutes;
  createBankStatus$: BehaviorSubject<string> = new BehaviorSubject<string>('notcreated');

  constructor(
    private _apiService: ApiService,
  ) {

  }

  submit(data: any) {
    this._apiService.postWithToken(this.agRoutes.createBank(), data)
      .pipe(first())
      .subscribe(
        {
          next: (success) => {
            console.log('Form submitted:', success);
            this.createBankStatus$.next('created');
          },
          error: (error) => {
            console.log('Error:', error);
            this.createBankStatus$.next('error');
          }
        }
      );
  }
}
