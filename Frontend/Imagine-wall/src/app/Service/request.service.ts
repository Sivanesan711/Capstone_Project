import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestUs } from '../Model/request';


@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private baseUrl = 'http://localhost:8080/v1/rqust/requests';

  constructor(private http: HttpClient) { }



  getClass(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  // tslint:disable-next-line:typedef
  createClass(Class: RequestUs) {
    return this.http.post(this.baseUrl, Class);
  }

  // tslint:disable-next-line:ban-types
  updateClass(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteClass(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }


  getClassList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  // tslint:disable-next-line:typedef
  getAllClasssList() {
    return this.http.get(this.baseUrl);
  }

}
