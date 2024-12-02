import { Component } from '@angular/core';
import { regRoutes } from '../../reg.route.model';
import { BehaviorSubject, first } from 'rxjs';
import { ApiService } from 'src/app/modules/core';

@Component({
  selector: 'app-staff-update',
  templateUrl: './staff-update.component.html',
  styleUrl: './staff-update.component.scss'
})
export class StaffUpdateComponent {

  staffRoutes: any = regRoutes;
  updateStaffStatus$: BehaviorSubject<string> = new BehaviorSubject<string>('notUpdate');

  constructor(
    private _apiService: ApiService,
  ) { }


  updateStaff(data: any) {
    console.log("beofre updateing", data);
    this._apiService.postWithToken(this.staffRoutes.updateStaff(), data)
      .pipe(first())
      .subscribe(
        {
          next: (response) => {
            console.log('Form submitted for update:', response);
            this.updateStaffStatus$.next('updated');
          },
          error: (error) => {
            console.log('Error:', error);
            this.updateStaffStatus$.next('error');
          }
        }
      );
  }
}
