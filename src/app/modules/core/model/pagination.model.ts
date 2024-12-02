
// src/app/models/pagination.model.ts

export interface Pagination<T> {
     current_page: number;          // The current page number
     from?: number;                 // Index of the first item on the current page (optional)
     last_page: number;             // The last page number
     first_page_url?: string | null;       // URL for the first page (optional)
     last_page_url?: string | null;        // URL for the last page (optional)
     next_page_url?: string | null; // URL for the next page (optional, can be null)
     path: string;                  // Base URL path for pagination
     per_page: number;              // Items per page
     prev_page_url?: string | null; // URL for the previous page (optional, can be null)
     to?: number;                   // Index of the last item on the current page (optional)
}
