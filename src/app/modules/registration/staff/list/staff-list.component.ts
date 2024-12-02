import { Component, Input, Output } from '@angular/core';
import { ColDef, ICellRendererParams } from 'ag-grid-community';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from 'src/app/modules/core';
import { regRoutes } from '../../reg.route.model';
import { PaginationService } from 'src/app/modules/core/services/pagination.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationModalComponent } from 'src/app/modules/shared/component/confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrl: './staff-list.component.scss'
})
export class StaffListComponent {

  protected modalRef: any;
  public tableName: any = 'Staff List';
  public fromName: any = 'Staff';
  public addLink: any = '/registration/staff-add';
  public updateLink: any = '/registration/staff-update/';
  public staffData$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  @Input() staffDeleteObservable: Observable<any[]>;


  columnDefs: ColDef[] = [
    { headerName: 'No', field: 'id', sortable: true, filter: true, width: 100 },
    { headerName: 'Register Number', field: 'id', sortable: true, filter: true, width: 150 },
    { headerName: 'Name', field: 'name', sortable: true, filter: true, cellClass: 'text-success', width: 150 },
    { headerName: 'Father Name', field: 'father_name', sortable: true, filter: true, width: 150 },
    // { headerName: 'Phones', field: 'pretty_phone', sortable: true, filter: true, width: 200, cellClass: 'text-dark' },
    // { headerName: 'Address', field: 'address', sortable: true, filter: true, width: 200 },
    // { headerName: 'Tazkira No', field: 'tazkira_no', sortable: true, filter: true, width: 150 },
    // { headerName: 'Date of Birth', field: 'date_of_birth', sortable: true, filter: 'agDateColumnFilter', width: 150 },
    // { headerName: 'Position', field: 'position', sortable: true, filter: 'agDateColumnFilter', width: 150 },
    // { headerName: 'Salary', field: 'salary', sortable: true, filter: true, width: 100 },
    // { headerName: 'Hire Date', field: 'hire_date', sortable: true, filter: 'agDateColumnFilter', width: 150 },
    // { headerName: 'Fire Date', field: 'fire_date', sortable: true, filter: 'agDateColumnFilter', width: 150 },
    {
      headerName: 'Actions',
      field: 'actions',
      width: 150,
      cellRenderer: (params: ICellRendererParams) => {
        return `
          <div class="d-flex justify-content-center align-items-center">
          <!-- Update Icon -->
          <span
            class="svg-icon svg-icon-primary svg-icon-2 cursor-pointer update-icon"
            title="Update"
          >
            <img src="./assets/media/icons/duotune/general/gen019.svg" alt="Update Icon" />
          </span>

          <!-- Delete Icon -->
          <span
            class="svg-icon svg-icon-danger svg-icon-2 cursor-pointer delete-icon ms-2"
            title="Delete"
          >
            <img src="./assets/media/icons/duotune/general/gen027.svg" alt="Delete Icon" />
          </span>
        </div>
        `;
      }

    }
  ];

  public staffDefaultColDef: ColDef =
    {
      minWidth: 160,
      resizable: true,
      initialWidth: 100,
      enableValue: true,
      enableRowGroup: true,
      enablePivot: true,
      filter: true,
      sortable: true,
      wrapText: true,
      autoHeight: true,
      wrapHeaderText: true,
      autoHeaderHeight: true,
      floatingFilter: true,
    }

  ngOnInit() {
    this.fetchStaff();
  }

  constructor(
    private _apiService: ApiService,
    private _pgService: PaginationService<any>,
    private modalService: NgbModal,
  ) {
  }

  gridApi: any;
  gridColumnApi: any;

  onGridReady(params: any) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  onFilterTextBoxChanged(event: any) {
    this.gridApi.setQuickFilter(event.target.value);
  }

  fetchStaff() {
    this._apiService.get(regRoutes.listStaff(this._pgService.getDefaultPagination()))
      .subscribe({
        next: (response: any) => {
          if (response) {
            this.staffData$.next(response.data);
          }
        },
        error: (failed: any) => {
          console.log(failed);
        }
      });
  }

  deleteStaff(sId: any) {

    this.modalRef = this.modalService.open(ConfirmationModalComponent, { size: 'lg', centered: true });
    this.modalRef.componentInstance.confirmation.subscribe((res: any) => {
      (res == 'confirm') ? this.doDelete(sId) : this.modalRef.dismissAll();
    });

  }

  doDelete(sId: number) {
    this._apiService.delete(regRoutes.deleteStaff(sId))
      .subscribe({
        next: (response: any) => {
          alert("deleted");
        },
        error: (failed: any) => {
          console.log(failed);
        }
      });
  }


}
