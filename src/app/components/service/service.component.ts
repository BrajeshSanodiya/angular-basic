import { Component } from '@angular/core';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-service',
  imports: [],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {

productList:any;

studentData :{
    name: string;
    age: number;
    email: string;
}[]|undefined;

  constructor(private studentService:StudentService){}

  ngOnInit(){
    this.studentData=this.studentService.getStudentData();
    this.studentService.getProductList().subscribe((data:any)=>{
      console.log(data);
      this.productList=data.products
    })
    
  }



}
