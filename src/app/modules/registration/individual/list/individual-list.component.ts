import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { ApiService } from 'src/app/modules/core';

// import 'ag-grid-community/styles/ag-grid.css';
// import 'ag-grid-community/styles/ag-theme-quartz.css';
// import { saveAs } from 'file-saver';
// import { themeQuartz, iconSetQuartzLight } 



@Component({
  selector: 'app-individual-list',
  standalone: false,
  // imports: [],
  templateUrl: './individual-list.component.html',
  styleUrl: './individual-list.component.scss'
})
export class IndividualListComponent {

  public tableName = 'Individual List';
  public forName = 'Individual';
  public addLink = '/registration/individual';


  columnDefs: ColDef[] = [
    { headerName: 'No', field: 'no', sortable: true, filter: true, },
    { headerName: 'Branch', field: 'branch', sortable: true, filter: true },
    { headerName: 'Reg No', field: 'regNo', sortable: true, filter: true },
    { headerName: 'Customer Name', field: 'customerName', sortable: true, filter: true },
    { headerName: 'Phone Number', field: 'phoneNumber', sortable: true, filter: true },
    { headerName: 'NID Number', field: 'nidNumber', sortable: true, filter: true },
    { headerName: 'Passport Number', field: 'passportNumber', sortable: true, filter: true },
    { headerName: 'Current Address', field: 'currentAddress', sortable: true, filter: true },
    { headerName: 'Registration Date', field: 'registrationDate', sortable: true, filter: true }

  ];

  rowData = [
    { no: 1, branch: 'Main', regNo: '001', customerName: 'John Doe', phoneNumber: '123456789', nidNumber: '1234', passportNumber: 'A1234567', currentAddress: '123 Main St', registrationDate: '2024-01-10' },
    { no: 2, branch: 'Branch A', regNo: '002', customerName: 'Jane Doe', phoneNumber: '987654321', nidNumber: '5678', passportNumber: 'B9876543', currentAddress: '456 Another St', registrationDate: '2024-02-20' },
    { no: 2, branch: 'Branch A', regNo: '002', customerName: 'Jane Doe', phoneNumber: '987654321', nidNumber: '5678', passportNumber: 'B9876543', currentAddress: '456 Another St', registrationDate: '2024-02-20' },
    { no: 2, branch: 'Branch A', regNo: '002', customerName: 'Jane Doe', phoneNumber: '987654321', nidNumber: '5678', passportNumber: 'B9876543', currentAddress: '456 Another St', registrationDate: '2024-02-20' },
    { no: 2, branch: 'Branch A', regNo: '002', customerName: 'Jane Doe', phoneNumber: '987654321', nidNumber: '5678', passportNumber: 'B9876543', currentAddress: '456 Another St', registrationDate: '2024-02-20' },
    { no: 2, branch: 'Branch A', regNo: '002', customerName: 'Jane Doe', phoneNumber: '987654321', nidNumber: '5678', passportNumber: 'B9876543', currentAddress: '456 Another St', registrationDate: '2024-02-20' },
    { no: 2, branch: 'Branch A', regNo: '002', customerName: 'Jane Doe', phoneNumber: '987654321', nidNumber: '5678', passportNumber: 'B9876543', currentAddress: '456 Another St', registrationDate: '2024-02-20' },
    { no: 2, branch: 'Branch A', regNo: '002', customerName: 'Jane Doe', phoneNumber: '987654321', nidNumber: '5678', passportNumber: 'B9876543', currentAddress: '456 Another St', registrationDate: '2024-02-20' },
    { no: 2, branch: 'Branch A', regNo: '002', customerName: 'Jane Doe', phoneNumber: '987654321', nidNumber: '5678', passportNumber: 'B9876543', currentAddress: '456 Another St', registrationDate: '2024-02-20' },
    { no: 2, branch: 'Branch A', regNo: '002', customerName: 'Jane Doe', phoneNumber: '987654321', nidNumber: '5678', passportNumber: 'B9876543', currentAddress: '456 Another St', registrationDate: '2024-02-20' },
    { no: 2, branch: 'Branch A', regNo: '002', customerName: 'Jane Doe', phoneNumber: '987654321', nidNumber: '5678', passportNumber: 'B9876543', currentAddress: '456 Another St', registrationDate: '2024-02-20' },
    { no: 2, branch: 'Branch A', regNo: '002', customerName: 'Jane Doe', phoneNumber: '987654321', nidNumber: '5678', passportNumber: 'B9876543', currentAddress: '456 Another St', registrationDate: '2024-02-20' },
    { no: 2, branch: 'Branch A', regNo: '002', customerName: 'Jane Doe', phoneNumber: '987654321', nidNumber: '5678', passportNumber: 'B9876543', currentAddress: '456 Another St', registrationDate: '2024-02-20' },
    { no: 2, branch: 'Branch A', regNo: '002', customerName: 'Jane Doe', phoneNumber: '987654321', nidNumber: '5678', passportNumber: 'B9876543', currentAddress: '456 Another St', registrationDate: '2024-02-20' },
    { no: 2, branch: 'Branch A', regNo: '002', customerName: 'Jane Doe', phoneNumber: '987654321', nidNumber: '5678', passportNumber: 'B9876543', currentAddress: '456 Another St', registrationDate: '2024-02-20' },
    { no: 2, branch: 'Branch A', regNo: '002', customerName: 'Jane Doe', phoneNumber: '987654321', nidNumber: '5678', passportNumber: 'B9876543', currentAddress: '456 Another St', registrationDate: '2024-02-20' },
    { no: 2, branch: 'Branch A', regNo: '002', customerName: 'Jane Doe', phoneNumber: '987654321', nidNumber: '5678', passportNumber: 'B9876543', currentAddress: '456 Another St', registrationDate: '2024-02-20' },
    { no: 2, branch: 'Branch A', regNo: '002', customerName: 'Jane Doe', phoneNumber: '987654321', nidNumber: '5678', passportNumber: 'B9876543', currentAddress: '456 Another St', registrationDate: '2024-02-20' },
    { no: 2, branch: 'Branch A', regNo: '002', customerName: 'Jane Doe', phoneNumber: '987654321', nidNumber: '5678', passportNumber: 'B9876543', currentAddress: '456 Another St', registrationDate: '2024-02-20' },
    { no: 2, branch: 'Branch A', regNo: '002', customerName: 'Jane Doe', phoneNumber: '987654321', nidNumber: '5678', passportNumber: 'B9876543', currentAddress: '456 Another St', registrationDate: '2024-02-20' },
    { no: 2, branch: 'Branch A', regNo: '002', customerName: 'Jane Doe', phoneNumber: '987654321', nidNumber: '5678', passportNumber: 'B9876543', currentAddress: '456 Another St', registrationDate: '2024-02-20' },
    { no: 2, branch: 'Branch A', regNo: '002', customerName: 'Jane Doe', phoneNumber: '987654321', nidNumber: '5678', passportNumber: 'B9876543', currentAddress: '456 Another St', registrationDate: '2024-02-20' },
    { no: 2, branch: 'Branch A', regNo: '002', customerName: 'Jane Doe', phoneNumber: '987654321', nidNumber: '5678', passportNumber: 'B9876543', currentAddress: '456 Another St', registrationDate: '2024-02-20' },
    { no: 2, branch: 'Branch A', regNo: '002', customerName: 'Jane Doe', phoneNumber: '987654321', nidNumber: '5678', passportNumber: 'B9876543', currentAddress: '456 Another St', registrationDate: '2024-02-20' },
    { no: 2, branch: 'Branch A', regNo: '002', customerName: 'Jane Doe', phoneNumber: '987654321', nidNumber: '5678', passportNumber: 'B9876543', currentAddress: '456 Another St', registrationDate: '2024-02-20' },
    { no: 2, branch: 'Branch A', regNo: '002', customerName: 'Jane Doe', phoneNumber: '987654321', nidNumber: '5678', passportNumber: 'B9876543', currentAddress: '456 Another St', registrationDate: '2024-02-20' },
    { no: 2, branch: 'Branch A', regNo: '002', customerName: 'Jane Doe', phoneNumber: '987654321', nidNumber: '5678', passportNumber: 'B9876543', currentAddress: '456 Another St', registrationDate: '2024-02-20' },
    { no: 2, branch: 'Branch A', regNo: '002', customerName: 'Jane Doe', phoneNumber: '987654321', nidNumber: '5678', passportNumber: 'B9876543', currentAddress: '456 Another St', registrationDate: '2024-02-20' },
    { no: 2, branch: 'Branch A', regNo: '002', customerName: 'Jane Doe', phoneNumber: '987654321', nidNumber: '5678', passportNumber: 'B9876543', currentAddress: '456 Another St', registrationDate: '2024-02-20' },
    { no: 2, branch: 'Branch A', regNo: '002', customerName: 'Jane Doe', phoneNumber: '987654321', nidNumber: '5678', passportNumber: 'B9876543', currentAddress: '456 Another St', registrationDate: '2024-02-20' },
    { no: 2, branch: 'Branch A', regNo: '002', customerName: 'Jane Doe', phoneNumber: '987654321', nidNumber: '5678', passportNumber: 'B9876543', currentAddress: '456 Another St', registrationDate: '2024-02-20' },
    { no: 2, branch: 'Branch A', regNo: '002', customerName: 'Jane Doe', phoneNumber: '987654321', nidNumber: '5678', passportNumber: 'B9876543', currentAddress: '456 Another St', registrationDate: '2024-02-20' },
    { no: 2, branch: 'Branch A', regNo: '002', customerName: 'Jane Doe', phoneNumber: '987654321', nidNumber: '5678', passportNumber: 'B9876543', currentAddress: '456 Another St', registrationDate: '2024-02-20' },
    { no: 2, branch: 'Branch A', regNo: '002', customerName: 'Jane Doe', phoneNumber: '987654321', nidNumber: '5678', passportNumber: 'B9876543', currentAddress: '456 Another St', registrationDate: '2024-02-20' },
    { no: 2, branch: 'Branch A', regNo: '002', customerName: 'Jane Doe', phoneNumber: '987654321', nidNumber: '5678', passportNumber: 'B9876543', currentAddress: '456 Another St', registrationDate: '2024-02-20' },
    { no: 2, branch: 'Branch A', regNo: '002', customerName: 'Jane Doe', phoneNumber: '987654321', nidNumber: '5678', passportNumber: 'B9876543', currentAddress: '456 Another St', registrationDate: '2024-02-20' },
    { no: 2, branch: 'Branch A', regNo: '002', customerName: 'Jane Doe', phoneNumber: '987654321', nidNumber: '5678', passportNumber: 'B9876543', currentAddress: '456 Another St', registrationDate: '2024-02-20' },
    { no: 2, branch: 'Branch A', regNo: '002', customerName: 'Jane Doe', phoneNumber: '987654321', nidNumber: '5678', passportNumber: 'B9876543', currentAddress: '456 Another St', registrationDate: '2024-02-20' },
    { no: 2, branch: 'Branch A', regNo: '002', customerName: 'Jane Doe', phoneNumber: '987654321', nidNumber: '5678', passportNumber: 'B9876543', currentAddress: '456 Another St', registrationDate: '2024-02-20' },
    { no: 2, branch: 'Branch A', regNo: '002', customerName: 'Jane Doe', phoneNumber: '987654321', nidNumber: '5678', passportNumber: 'B9876543', currentAddress: '456 Another St', registrationDate: '2024-02-20' },
    { no: 2, branch: 'Branch A', regNo: '002', customerName: 'Jane Doe', phoneNumber: '987654321', nidNumber: '5678', passportNumber: 'B9876543', currentAddress: '456 Another St', registrationDate: '2024-02-20' },
    { no: 2, branch: 'Branch A', regNo: '002', customerName: 'Jane Doe', phoneNumber: '987654321', nidNumber: '5678', passportNumber: 'B9876543', currentAddress: '456 Another St', registrationDate: '2024-02-20' },
    { no: 2, branch: 'Branch A', regNo: '002', customerName: 'Jane Doe', phoneNumber: '987654321', nidNumber: '5678', passportNumber: 'B9876543', currentAddress: '456 Another St', registrationDate: '2024-02-20' },
    { no: 2, branch: 'Branch A', regNo: '002', customerName: 'Jane Doe', phoneNumber: '987654321', nidNumber: '5678', passportNumber: 'B9876543', currentAddress: '456 Another St', registrationDate: '2024-02-20' },
    { no: 2, branch: 'Branch A', regNo: '002', customerName: 'Jane Doe', phoneNumber: '987654321', nidNumber: '5678', passportNumber: 'B9876543', currentAddress: '456 Another St', registrationDate: '2024-02-20' },
    { no: 2, branch: 'Branch A', regNo: '002', customerName: 'Jane Doe', phoneNumber: '987654321', nidNumber: '5678', passportNumber: 'B9876543', currentAddress: '456 Another St', registrationDate: '2024-02-20' },
    { no: 2, branch: 'Branch A', regNo: '002', customerName: 'Jane Doe', phoneNumber: '987654321', nidNumber: '5678', passportNumber: 'B9876543', currentAddress: '456 Another St', registrationDate: '2024-02-20' },
    { no: 2, branch: 'Branch A', regNo: '002', customerName: 'Jane Doe', phoneNumber: '987654321', nidNumber: '5678', passportNumber: 'B9876543', currentAddress: '456 Another St', registrationDate: '2024-02-20' },
    { no: 2, branch: 'Branch A', regNo: '002', customerName: 'Jane Doe', phoneNumber: '987654321', nidNumber: '5678', passportNumber: 'B9876543', currentAddress: '456 Another St', registrationDate: '2024-02-20' },
    { no: 2, branch: 'Branch A', regNo: '002', customerName: 'Jane Doe', phoneNumber: '987654321', nidNumber: '5678', passportNumber: 'B9876543', currentAddress: '456 Another St', registrationDate: '2024-02-20' },
    { no: 2, branch: 'Branch A', regNo: '002', customerName: 'Jane Doe', phoneNumber: '987654321', nidNumber: '5678', passportNumber: 'B9876543', currentAddress: '456 Another St', registrationDate: '2024-02-20' },
    { no: 2, branch: 'Branch A', regNo: '002', customerName: 'Jane Doe', phoneNumber: '987654321', nidNumber: '5678', passportNumber: 'B9876543', currentAddress: '456 Another St', registrationDate: '2024-02-20' },
    { no: 2, branch: 'Branch A', regNo: '002', customerName: 'Jane Doe', phoneNumber: '987654321', nidNumber: '5678', passportNumber: 'B9876543', currentAddress: '456 Another St', registrationDate: '2024-02-20' },
    { no: 2, branch: 'Branch A', regNo: '002', customerName: 'Jane Doe', phoneNumber: '987654321', nidNumber: '5678', passportNumber: 'B9876543', currentAddress: '456 Another St', registrationDate: '2024-02-20' },
    { no: 2, branch: 'Branch A', regNo: '002', customerName: 'Jane Doe', phoneNumber: '987654321', nidNumber: '5678', passportNumber: 'B9876543', currentAddress: '456 Another St', registrationDate: '2024-02-20' },
    { no: 2, branch: 'Branch A', regNo: '002', customerName: 'Jane Doe', phoneNumber: '987654321', nidNumber: '5678', passportNumber: 'B9876543', currentAddress: '456 Another St', registrationDate: '2024-02-20' },
    { no: 2, branch: 'Branch A', regNo: '002', customerName: 'Jane Doe', phoneNumber: '987654321', nidNumber: '5678', passportNumber: 'B9876543', currentAddress: '456 Another St', registrationDate: '2024-02-20' },
    { no: 2, branch: 'Branch A', regNo: '002', customerName: 'Jane Doe', phoneNumber: '987654321', nidNumber: '5678', passportNumber: 'B9876543', currentAddress: '456 Another St', registrationDate: '2024-02-20' },
    { no: 2, branch: 'Branch A', regNo: '002', customerName: 'Jane Doe', phoneNumber: '987654321', nidNumber: '5678', passportNumber: 'B9876543', currentAddress: '456 Another St', registrationDate: '2024-02-20' },
    { no: 2, branch: 'Branch A', regNo: '002', customerName: 'Jane Doe', phoneNumber: '987654321', nidNumber: '5678', passportNumber: 'B9876543', currentAddress: '456 Another St', registrationDate: '2024-02-20' },
    // Additional rows...
  ];


  ngOnInit() {
    this.fetchIndividuals();
  }

  constructor(
    private _apiService: ApiService,
  ) {

  }




  gridApi: any;
  gridColumnApi: any;

  onGridReady(params: any) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  // Print the Grid
  onPrint() {
    const printContents = document.querySelector('.ag-theme-alpine')?.innerHTML;
    const newWindow = window.open('', '', 'width=900,height=700');
    newWindow?.document.write('<html><head><title>Print Grid</title></head><body>');
    newWindow?.document.write(printContents || '');
    newWindow?.document.write('</body></html>');
    newWindow?.print();
  }

  // Download as CSV
  onDownload() {
    // this.gridApi.exportDataAsCsv();
  }

  // Update a Record (can be customized to actually edit data)
  updateRecord(index: number) {
    console.log(`Update record at index ${index}`);
    // Logic to update the record (could be modal or inline edit)
  }

  // Delete a Record
  deleteRecord(index: number) {
    this.rowData.splice(index, 1);
    this.gridApi.setRowData(this.rowData); // Refresh grid data after deletion
  }

  // Search Field Filter
  onFilterTextBoxChanged(event: any) {
    this.gridApi.setQuickFilter(event.target.value);
  }



  fetchIndividuals() {
    this._apiService.get('/customers?page=1&search=&type=bank&per_page=50&is_bank=true')
      .subscribe({
        next: (data: any) => {
          console.log("data", data);
        },
        error: (failed: any) => {
          console.log(failed);
        }
      });
  }

}
