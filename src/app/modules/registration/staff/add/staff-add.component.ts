import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/modules/core';
import { regRoutes } from '../../reg.route.model';
import { BehaviorSubject, first } from 'rxjs';


@Component({
  selector: 'app-staff-add',
  templateUrl: './staff-add.component.html',
  styleUrl: './staff-add.component.scss'
})
export class StaffAddComponent {

  staffRoutes: any = regRoutes;
  createStaffStatus$: BehaviorSubject<string> = new BehaviorSubject<string>('notcreated');

  constructor(
    private _apiService: ApiService,
  ) {

  }

  submit(data: any) {
    this._apiService.postWithToken(this.staffRoutes.createStaff(), data)
      .pipe(first())
      .subscribe(
        {
          next: (success) => {
            console.log('Form submitted:', success);
            this.createStaffStatus$.next('created');
          },
          error: (error) => {
            console.log('Error:', error);
            this.createStaffStatus$.next('error');
          }
        }
      );
  }
}
