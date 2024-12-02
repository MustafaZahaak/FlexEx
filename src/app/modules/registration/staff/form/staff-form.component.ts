import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, first, Subscription } from 'rxjs';
import { ApiService } from 'src/app/modules/core';
import { regRoutes } from '../../reg.route.model';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';


type FormMode = 'create' | 'update';

@Component({
  selector: 'app-staff-form',
  templateUrl: './staff-form.component.html',
  styleUrl: './staff-form.component.scss',
})
export class StaffFormComponent {

  @Input() formMode: FormMode;
  @Output() formData: EventEmitter<any> = new EventEmitter<any>();
  @Input() submitStatus$!: BehaviorSubject<string>;
  private submitStatusSubscription: Subscription;


  submitStatus: boolean;
  showPreview: boolean = false;
  formName: string = 'Staff';
  staffRoutes: any = regRoutes;
  public form: FormGroup;
  public spinnerText: string = 'Loading .....';

  constructor(
    private fb: FormBuilder,
    private _spinner: NgxSpinnerService,
    private _toastr: ToastrService,
    private _activatedRoute: ActivatedRoute,
    private _apiService: ApiService
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    this.createForm();
    if (this.formMode == 'update') {
      this.getStaffById();
    }
  }

  createForm() {
    this.form = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      father_name: [''],
      phones: [''],
      address: [''],
      nationality: [''],
      gender: [''],
      marital_status: [''],
      place_of_birth: [''],
      date_of_birth: [''],
      position: ['', Validators.required],
      position_rank: ['', Validators.required],
      salary: [''],
      hire_date: [''],
      fire_date: [''],
      type: ['staff'],

    });
  }

  private populateForm(formValue: any) {
    this.form.patchValue({
      id: formValue.id,
      name: formValue.name,
      father_name: formValue.father_name,
      phones: formValue.pretty_phone,
      address: formValue.address,
      nationality: formValue.nationality,
      gender: formValue.gender,
      marital_status: formValue.marital_status,
      place_of_birth: formValue.place_of_birth,
      date_of_birth: formValue.date_of_birth,
      position: formValue.position,
      position_rank: formValue.position_rank.toString(),
      salary: formValue.salary,
      hire_date: formValue.hire_date,
      fire_date: formValue.fire_date,
      type: "staff",
    });

  }

  getFieldName(field: string): string {
    const fieldNames: { [index: string]: string } = {
      name: 'Name',
      father_name: 'Father Name',
      phones: 'Phones',
      address: 'Address',
      nationality: 'Nationality',
      gender: 'Gender',
      marital_status: 'Marital Status',
      place_of_birth: 'Place of Birth',
      date_of_birth: 'Date of Birth',
      position: 'Position',
      position_rank: 'Position Rank',
      salary: 'Salary',
      hire_date: 'Hire Date',
      fire_date: 'Fire Date',
    };
    return fieldNames[field] || field;
  }

  openPreviewModal(): void {
    if (this.form.valid) {
      this.showPreview = true;
    } else {
      this.form.markAllAsTouched();
    }
  }

  closePreviewModal(): void {
    this.showPreview = false;
  }

  confirmAndSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
    } else {

      (this.formMode == 'update') ?
        this.setSpinnerText = "Submitting Staff Creation Request ....." :
        this.setSpinnerText = "Submitting Staff Update Request .....";

      this._spinner.show();
      this.submitStatus = true;
      this.preparePhones();
      this.formData.emit(this.form.value);

      this.submitStatusSubscription = this.submitStatus$.subscribe((status) => {
        if (status == 'created') {
          this.showCreateSuccess();
        }
        if (status == 'updated') {
          this.showUpdateSuccess();
        }
        if (status == 'error') {
          this.showError();
        }
      });
      this.closePreviewModal();
      this.submitStatus = false;
      this.form.reset();
    }
  }

  preparePhones() {
    let phonesText = this.form.value.phones;
    const phonesArray = [phonesText];
    this.form.patchValue({ 'phones': phonesArray });
  }

  set setSpinnerText(text: string) {
    this.spinnerText = text;
  }

  getStaffById() {
    let sId = this._activatedRoute.snapshot.paramMap.get("sId");
    this.spinnerText = 'Getting the Staff Information';
    this._spinner.show();
    this._apiService.get(this.staffRoutes.getStaffById(sId))
      .pipe(first())
      .subscribe(
        {
          next: (response: any) => {
            this.populateForm(response.data);
            this._spinner.hide();
          },
          error: (error) => {
            console.log('Error:', error);
          }
        }
      );
  }

  ngOnDestroy(): void {
    if (this.submitStatusSubscription) {
      this.submitStatusSubscription.unsubscribe();
    }
  }

  showCreateSuccess() {
    this._toastr.success(
      'The ' + this.formName + ' Creation Was Successfull',
      'Success Full Creation', {
      toastClass: 'ngx-toastr animate__animated animate__fadeInDown',
      positionClass: 'toast-top-right',
      timeOut: 2000,
      progressBar: true
    });
    this._spinner.hide();
  }

  showUpdateSuccess() {
    this._toastr.success(
      'The ' + this.formName + ' Update Was Successfull',
      'Success Full Update', {
      toastClass: 'ngx-toastr animate__animated animate__fadeInDown',
      positionClass: 'toast-top-right',
      timeOut: 2000,
      progressBar: true
    });
    this._spinner.hide();
  }

  showError() {
    this._toastr.warning(
      'The ' + this.formName + ' Operation Wass with Error',
      'Error', {
      toastClass: 'ngx-toastr animate__animated animate__fadeInDown',
      positionClass: 'toast-top-right',
      timeOut: 2000,
      progressBar: true
    });
    this._spinner.hide();
  }

}
