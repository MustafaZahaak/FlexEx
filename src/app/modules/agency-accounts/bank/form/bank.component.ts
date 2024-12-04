import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, first, Subscription } from 'rxjs';
import { ApiService } from 'src/app/modules/core';
import { agencyAccountsRoutes } from '../../ag-accounts.route.model';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';


type FormMode = 'create' | 'update';

@Component({
  selector: 'app-bank-form',
  templateUrl: './bank-form.component.html',
  styleUrl: './bank-form.component.scss',
})
export class BankComponent {

  @Input() formMode: FormMode;
  @Output() formData: EventEmitter<any> = new EventEmitter<any>();
  @Input() submitStatus$!: BehaviorSubject<string>;
  private submitStatusSubscription: Subscription;


  submitStatus: boolean;
  showPreview: boolean = false;
  formName: string = 'Bank';
  bankRoutes: any = agencyAccountsRoutes;
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
      this.getBankById();
    }
  }

  createForm() {
    this.form = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      phones: [''],
      address: [''],
      is_bank: [1],
      type: ['bank'],
      last_form_number: ['100'],

    });
  }

  private populateForm(formValue: any) {
    this.form.patchValue({
      id: formValue.id,
      name: formValue.name,
      phones: formValue.pretty_phone,
      address: formValue.address,
      type: formValue.type,
    });

  }

  getFieldName(field: string): string {
    const fieldNames: { [index: string]: string } = {
      name: 'Name',
      phones: 'Phones',
      address: 'Remarks',
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
      
      this.setSpinnerText = "Submitting " + this.formName + " Update Request .....";
      if (this.formMode == 'update') {
        this.setSpinnerText = "Submit  ting " + this.formName + " Creation Request .....";
      }

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

  getBankById() {
    let bId = this._activatedRoute.snapshot.paramMap.get("bId");
    this.spinnerText = 'Getting the ' + this.formName + ' Information';
    this._spinner.show();
    this._apiService.get(this.bankRoutes.getBankById(bId))
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
