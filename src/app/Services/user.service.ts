import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Models/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

//protocolos http
export class UserService {
  apiURL: String = 'http://localhost:3000';

  constructor(
    private http: HttpClient) { }

  create(formData): Observable<any> {
    const url = `${this.apiURL}/user/create`;
    return this.http.post<User>(url, formData);
  }
}
