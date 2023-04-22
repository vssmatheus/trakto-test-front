import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable()
export class ApiService {
  private baseApiUrl = environment.BASE_API_URL;

  constructor(private readonly _httpClient: HttpClient) {}

  public get<R>(endPoint: string, params?: HttpParams): Observable<R> {
    return this._httpClient.get<R>(`${this.baseApiUrl}/${endPoint}`, {
      params,
    });
  }

  public post<R, B>(
    endPoint: string,
    body: B,
    params?: HttpParams
  ): Observable<R> {
    return this._httpClient.post<R>(`${this.baseApiUrl}/${endPoint}`, body, {
      params,
    });
  }
}
