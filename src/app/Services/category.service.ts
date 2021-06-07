import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../Models/Category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

//protocolos http
export class CategoryService {
  apiURL: String = 'http://localhost:3000';

  constructor(
    private http: HttpClient) {}

  create(formData): Observable<any> {
    const url = `${this.apiURL}/category/create`;
    return this.http.post<Category>(url, formData);
  }

  getAll() {
    return this.http.get(`${this.apiURL}/category/getAll`);
  }
}
