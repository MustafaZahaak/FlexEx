export class AuthModel {
  authToken: string;
  refreshToken: string;
  expiresIn: Date;
  roles: any[];
  organization_id: number;
  data: {
    status: string;
    access_token: string;
  }

  setAuth(auth: AuthModel) {
    this.authToken = auth.authToken;
    this.refreshToken = auth.refreshToken;
    this.expiresIn = auth.expiresIn;
    this.roles = auth.roles;
  }
}
