import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from "rxjs";
import { LayoutService, PageInfoService } from "src/app/_metronic/layout";

type Tabs = "Personal Details" | "Contact Details" | "Profession Details" | "Footer" | "KYC Notes";

@Component({
  selector: 'app-individual',
  // imports: [],
  templateUrl: './individual.component.html',
  styleUrl: './individual.component.scss'
})

export class IndividualComponent {

  public form: FormGroup;
  activeTab: Tabs = "Personal Details";
  activeContactDetailsType: string = 'Passport';
  model: any;

  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoading: boolean;

  configLoading: boolean = false;
  resetLoading: boolean = false;


  constructor(
    private layout: LayoutService,
    private pageInfo: PageInfoService,
    private fb: FormBuilder
  ) {
    this.createForm();
  }


  createForm() {
    this.form = this.fb.group({
      // Personal Details
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: [''],
      fatherName: [''],
      birthPlace: [''],
      dateOfBirth: [''],
      gender: [''],
      maritalStatus: [''],
      creationDate: [''],
      currentAddress: [''],
      permanentAddress: [''],
      status: [''],
      type: [''],
      sanctionScreening: [''],

    });
  }

  getFieldName(field: string): string {

    const fieldNames: { [index: string]: string } = {
      firstName: 'First Name English',
      middleName: 'Middle Name',
      lastName: 'Last Name',
      fatherName: 'Father Name',
      birthPlace: 'Birth Place',
      dateOfBirth: 'Date of Birth',
      gender: 'Gender',
      maritalStatus: 'Marital Status',
      creationDate: 'Creation Date',
      currentAddress: 'Current Address',
      permanentAddress: 'Permanent Address',
      status: 'Status',
      type: 'Type',
      sanctionScreening: 'Sanction Screening'
    };

    return fieldNames[field] || field;
  }



  setActiveTab(tab: Tabs) {
    this.activeTab = tab;
  }

  public setActiveContactType(active: string) {
    this.activeContactDetailsType = active;
  }

  resetPreview(): void {
    this.resetLoading = true;
    this.layout.refreshConfigToDefault();
  }

  submitPreview(): void {
    this.configLoading = true;
    this.layout.setConfig(this.model);
    // location.reload();

    if (this.form.valid) {
      console.log('Form Submitted', this.form.value);
      // Further processing like submitting data to a server can be done here.
    }
  }

  saveForm(): void {
    this.isLoading$.next(true);
    setTimeout(() => {
      this.isLoading$.next(false);
      // this.cdr.detectChanges();
    }, 1500);
  }
}
