import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { ModelMapper } from "../mapper/model-mapper";
import { environment } from "../../../../environments/environment";
import { Logger } from "../logger.service";
import { AuthService } from "../../auth";
const logger = new Logger("ApiService");

@Injectable({
  providedIn: "root",
})
export class ApiService {

  constructor(
    private _auth: AuthService,
    private http: HttpClient
  ) { }

  public query<T>(route: string, itemType?: any): Observable<T[]> {
    if (!route) {
      return of([]);
    }

    return (
      this.http
        //.cache()
        .get<T[]>(route, {headers:this.assignHeaders()})
        .pipe(
          map((data: T[]) => {
            // Here we process the Mapping attributes or decorators defined in your Class Models
            return data.map((item: T) => {
              return new ModelMapper<T>(itemType).map(item);
            });
          })
        )
    );
  }

  public get<T>(route: string, itemType?: any): Observable<T> {
    if (!route) {
      return of(<T>[]);
    }

    return this.http
      .get<T>(this.completeServerUrl(route), {
        headers: this.assignHeaders(),
      })
      .pipe(
        map((data: T) => {
          return data;
        })
      );
  }

  public getWithoutToken<T>(route: string, itemType?: any): Observable<T> {
    if (!route) {
      return of(<T>[]);
    }

    return this.http.get<T>(this.completeServerUrl(route)).pipe(
      map((data: T) => {
        return data;
      })
    );
  }

  public post<T>(route: string, data: any): Observable<T> {
    if (!route) {
      return of(<T>[]);
    }
    return this.http.post<T>(this.completeServerUrl(route), data);
  }

  public postWithToken<T>(route: string, data: any): Observable<T> {
    if (!route) {
      return of(<T>[]);
    }
    return this.http.post<T>(this.completeServerUrl(route), data, {
      headers: this.assignHeaders(),
    });
  }
  public putWithToken<T>(route: string, data: any): Observable<T> {
    if (!route) {
      return of(<T>[]);
    }
    return this.http.put<T>(this.completeServerUrl(route), data, {
      headers: this.assignHeaders(),
    });
  }

  public delete<T>(route: any): Observable<T> {
    if (!route) {
      return of(<T>[]);
    }
    return this.http.delete<T>(this.completeServerUrl(route), {
      headers: this.assignHeaders(),
    });
  }
  public deleteById<T>(route: any): Observable<T> {
    if (!route) {
      return of(<T>[]);
    }
    return this.http.delete<T>(this.completeServerUrl(route), {
      headers: this.assignHeaders(),
    });
  }
  public removeTokenAndLogOut<T>(route: any, data: any): Observable<T> {
    if (!route) {
      return of(<T>[]);
    }
    return this.http.delete<T>(`${route}/${data.access_token}/${data.id}`);
  }

  assignHeaders(): any {
    let token = this._auth.getAuthToken;
    return new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .set("Access-Control-Allow-Origin", "*")
      .set('Access-Control-Allow-Credentials', 'true')
      .set("Authorization", "Bearer " + token);
  }

  assignHeadersUploadTest(): any {
    let token = this._auth.getAuthToken;
    return new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .set("Access-Control-Allow-Headers", "Content-Type")
      .set("Access-Control-Allow-Origin", "*")
  }

  completeServerUrl(route: string) {
    return `${environment.serverUrl}${route}`;
  }


  public upload<T>(route: string, data: any): Observable<T> {
    if (!route) {
      return of(<T>[]);
    }

    return this.http.post<T>(this.completeServerUrl(route), data, {
      headers: this.assignHeadersUploadTest(),
    });
  }
  
  public getToDownlad<T>(route: string, data: any, httpOptionsHeader: {}): Observable<T> {
    if (!route) {
      return of(<T>[]);
    }

    return this.http
      .post<T>(this.completeServerUrl(route), data,
        httpOptionsHeader
      )
      .pipe(
        map((data: T) => {
          return data;
        })
      );
  }

}
