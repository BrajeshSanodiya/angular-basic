import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  getStudentData(){
    return [
      {'name':"brajesh", 'age':30, "email":"sano.braj@gmail.com"},
      {'name':"raj", 'age':32, "email":"braj.braj@gmail.com"},
      {'name':"braj", 'age':35, "email":"raj@gmail.com"}
    ]
  }

  getProductList(){
    const url= "https://dummyjson.com/product"
    return this.http.get(url)

  }
}
