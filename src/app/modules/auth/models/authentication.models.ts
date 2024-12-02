export interface LoginContext {
  username: string;
  password: string;
}

export interface AuthorizationEntity {
  token(token: any);
  username?: string;
  email: string;
  number:number;
  fullName: string;
  expiresIn: number;
  accessToken: string;
  roles : any[];
  organization_id : number;
}
