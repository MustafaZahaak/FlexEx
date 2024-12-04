export const agencyAccountsRoutes = {
     //Agency Accounts
     createBank: () => `/customers`,
     updateBank: (bId: number) => `/customers`,
     deleteBank: (bId: number) => `/customers/${bId}`,
     getBankById: (bId: number) => `/customers/${bId}?type=bank`,
     listBank: (paginationConfig: any) => `/customers?page=1&search=&type=bank&per_page=${paginationConfig.per_page}&is_bank=false'`,


};