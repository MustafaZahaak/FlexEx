import { Component, Input, Output } from '@angular/core';
import { ColDef, ICellRendererParams } from 'ag-grid-community';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from 'src/app/modules/core';
import { agencyAccountsRoutes } from '../../ag-accounts.route.model';
import { PaginationService } from 'src/app/modules/core/services/pagination.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationModalComponent } from 'src/app/modules/shared/component/confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-bank-list',
  templateUrl: './bank-list.component.html',
  styleUrl: './bank-list.component.scss'
})
export class BankListComponent {

  protected modalRef: any;
  public tableName: any = 'Bank List';
  public fromName: any = 'Bank';
  public addLink: any = '/agency-accounts/bank-add';
  public updateLink: any = '/agency-accounts/bank-update/';
  public bankData$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  @Input() bankDeleteObservable: Observable<any[]>;


  columnDefs: ColDef[] = [
    { headerName: 'No', field: 'id', sortable: true, filter: true, width: 100 },
    { headerName: 'Register Number', field: 'id', sortable: true, filter: true, width: 150 },
    { headerName: 'Name', field: 'name', sortable: true, filter: true, cellClass: 'text-primary', width: 150 },
    { headerName: 'Phone', field: 'phones', sortable: true, filter: true, width: 150 },
    
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

  public bankDefaultColDef: ColDef =
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
    this.fetchBank();
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

  fetchBank() {
    this._apiService.get(agencyAccountsRoutes.listBank(this._pgService.getDefaultPagination()))
      .subscribe({
        next: (response: any) => {
          if (response) {
            this.bankData$.next(response.data);
          }
        },
        error: (failed: any) => {
          console.log(failed);
        }
      });
  }

  deleteBank(sId: any) {

    this.modalRef = this.modalService.open(ConfirmationModalComponent, { size: 'lg', centered: true });
    this.modalRef.componentInstance.confirmation.subscribe((res: any) => {
      (res == 'confirm') ? this.doDelete(sId) : this.modalRef.dismissAll();
    });

  }

  doDelete(sId: number) {
    this._apiService.delete(agencyAccountsRoutes.deleteBank(sId))
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
