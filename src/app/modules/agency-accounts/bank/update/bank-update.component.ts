import { Component } from '@angular/core';
import { agencyAccountsRoutes } from '../../ag-accounts.route.model';
import { BehaviorSubject, first } from 'rxjs';
import { ApiService } from 'src/app/modules/core';

@Component({
  selector: 'app-bank-update',
  templateUrl: './bank-update.component.html',
  styleUrl: './bank-update.component.scss'
})
export class BankUpdateComponent {

  agRoutes: any = agencyAccountsRoutes;
  bankUpdateStatus$: BehaviorSubject<string> = new BehaviorSubject<string>('notUpdate');

  constructor(
    private _apiService: ApiService,
  ) { }


  updateBank(data: any) {
    this._apiService.postWithToken(this.agRoutes.updateBank(), data)
      .pipe(first())
      .subscribe(
        {
          next: (response) => {
            console.log('Form submitted for update:', response);
            this.bankUpdateStatus$.next('updated');
          },
          error: (error) => {
            console.log('Error:', error);
            this.bankUpdateStatus$.next('error');
          }
        }
      );
  }
}
