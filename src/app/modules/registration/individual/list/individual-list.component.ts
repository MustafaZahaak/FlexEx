import { Component } from '@angular/core';

@Component({
  selector: 'app-individual-list',
  standalone: false,
  // imports: [],
  templateUrl: './individual-list.component.html',
  styleUrl: './individual-list.component.scss'
})
export class IndividualListComponent {

  public tableName = 'Individual List';
  // public tableFieldsName = ['No', 'RegNo', 'Customer Name', 'Phone', 'Tazkira', 'Address', 'Reg Date'];

  public tableFieldsName: { [key: string]: any } = {
    'No': 'id',
    'RegNo': 'regNo',
    'Customer': 'name',
    'Phone': 'phone',
    'Tazkira': 'tazkiraNo',
    'Address': 'address',
    'Reg Date': 'regDate',
  };

  public customers = [
    {
      branch: 'B-0001',
      regNo: 1134,
      name: '1134 - Khoshal Khoshal NA',
      phone: '0767292272',
      tazkiraNo: '3299646',
      passportNo: '',
      address: 'Kabul, Afghanistan',
      regDate: '2022-10-30',
    },
    {
      branch: 'B-0001',
      regNo: 1135,
      name: '1135 - Mohammad Wais NA',
      phone: '0783172517',
      tazkiraNo: '1398-0700-04220',
      passportNo: '',
      address: 'Kabul',
      regDate: '2022-10-30',
    },
    // Add other customers similarly
  ];

  ngOnInit() {
    console.log(this.tableFieldsName['RegNo']); 
    
  }

}
