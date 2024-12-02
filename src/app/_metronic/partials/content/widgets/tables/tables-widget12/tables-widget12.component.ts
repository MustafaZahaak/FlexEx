import { ChangeDetectorRef, Component, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tables-widget12',
  styleUrl: './tables-widget12.scss',
  templateUrl: './tables-widget12.component.html',
})
export class TablesWidget12Component implements OnInit {
  constructor(
    private _cdr: ChangeDetectorRef,
    private _router: Router,
  ) { }

  @Input() tableName: string;
  @Input() fromName: string;
  @Input() columnDefs: any;
  @Input() addLink: string = '';
  @Input() updateLink: string = '';
  @Input() defaultColDef: ColDef;
  @Input() rowDataObservable: Observable<any[]>;
  @ViewChild('agGrid') agGrid!: AgGridAngular;
  @Output() deleteStaff: EventEmitter<any> = new EventEmitter<any>();

  public rowData: any[] = [];
  public isDataLoaded: boolean = false;
  public paginationPageSizeSelector: number[] | boolean = [5, 10, 20, 50, 100];

  public sideBar = {
    toolPanels: [
      {
        id: 'columns',
        labelDefault: 'Columns',
        labelKey: 'columns',
        iconKey: 'columns',
        toolPanel: 'agColumnsToolPanel',
        minWidth: 225,
        maxWidth: 225,
        width: 225
      },
      {
        id: 'filters',
        labelDefault: 'Filters',
        labelKey: 'filters',
        iconKey: 'filter',
        toolPanel: 'agFiltersToolPanel',
        minWidth: 180,
        maxWidth: 400,
        width: 250
      }
    ],
    position: 'left',
    defaultToolPanel: 'filters'
  };

  gridApi: any;
  gridColumnApi: any;

  ngOnInit() { }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
    params.api.addEventListener('cellClicked', (event: any) => {
      const clickedElement = event.event.target;

      if (
        (clickedElement.tagName === 'IMG' && clickedElement.parentElement.classList.contains('update-icon')) ||
        clickedElement.classList.contains('update-icon')
      ) {
        this.update(event.data);
      }

      if (
        (clickedElement.tagName === 'IMG' && clickedElement.parentElement.classList.contains('delete-icon')) ||
        clickedElement.classList.contains('delete-icon')
      ) {
        this.onDeleteButtonClick(event.data);
      }
    });
  }

  ngOnChanges(params: GridReadyEvent, changes: SimpleChanges): void {
    this._cdr.detectChanges();
    this.rowDataObservable.subscribe(data => {
      this.gridApi.setGridOption('rowData', data);
      this.gridApi.setGridOption('loading', false);
      this.gridApi.sizeColumnsToFit();
    });
  }

  update(rowData: any): void {
    const rowId = rowData.id;
    this._router.navigate([this.updateLink, rowId]);
  }

  onDeleteButtonClick(rowData: any): void {
    const rowId = rowData.id;
    this.deleteStaff.emit(rowId);
  }

}
