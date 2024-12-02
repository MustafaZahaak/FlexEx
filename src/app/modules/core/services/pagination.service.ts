import { Injectable } from '@angular/core';
import { Pagination } from '../model/pagination.model';

@Injectable({
     providedIn: 'root',
})
export class PaginationService<T> {
     constructor() { }

     getDefaultPagination(): Pagination<T> {
          return {
               current_page: 1,
               last_page: 1,
               path: '',
               per_page: 30,
               first_page_url: null,
               last_page_url: null,
               next_page_url: null,
               prev_page_url: null,
          };
     }
}
