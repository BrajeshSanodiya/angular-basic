import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../interfaces/Users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUserList(): Observable<Users[]> {
    const url = 'https://json-server-d401a924f117.herokuapp.com/users';
    return this.http.get<Users[]>(url);
  }
}
