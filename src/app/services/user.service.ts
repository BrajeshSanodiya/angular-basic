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

  addUser(user:Users):Observable<Users>{
    const url='https://json-server-d401a924f117.herokuapp.com/users'
    return this.http.post<Users>(url,user)
  }

  deleteUser(id:string):Observable<Users>{
    const url='https://json-server-d401a924f117.herokuapp.com/users'
    return this.http.delete<Users>(url+"/"+id)
  }

  selectUser(id:string):Observable<Users>{
    const url='https://json-server-d401a924f117.herokuapp.com/users'
    return this.http.get<Users>(url+"/"+id)
  }

  updateUser(user:Users):Observable<Users>{
    const url='https://json-server-d401a924f117.herokuapp.com/users'
    return this.http.patch<Users>(url+"/"+user.id,user)
  }
}
