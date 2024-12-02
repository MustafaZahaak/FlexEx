export const regRoutes = {
     // Individua Part
     
     //Staff Part
     createStaff: () => `/customers`,
     updateStaff: (sId: number) => `/customers`,
     deleteStaff: (sId: number) => `/customers/${sId}`,
     getStaffById: (sId: number) => `/customers/${sId}?type=staff`,
     listStaff: (paginationConfig: any) => `/customers?page=1&search=&type=staff&per_page=${paginationConfig.per_page}&is_bank=false'`,


};