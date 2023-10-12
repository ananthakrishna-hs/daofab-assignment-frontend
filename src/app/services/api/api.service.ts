import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IChildrenResponse, IParentsResponse } from '../../models/response.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  getAllParents(limit: number, page: number): Observable<IParentsResponse> {
    const params = new HttpParams().append('limit', limit.toString()).append('page', page.toString());
    return this.http.get<IParentsResponse>('/api/parents', {
      params
    });
  }

  getChildren(parentId: number): Observable<IChildrenResponse> {
    const params = new HttpParams().append('parentId', parentId.toString());
    return this.http.get<IChildrenResponse>('/api/children', {
      params
    });
  }
}
