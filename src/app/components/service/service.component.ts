import { Component } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Products } from '../../interfaces/Products';

@Component({
  selector: 'app-service',
  imports: [],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {

productList:Products|undefined;

studentData :{
    name: string;
    age: number;
    email: string;
}[]|undefined;

  constructor(private studentService:StudentService){}

  ngOnInit(){
    this.studentData=this.studentService.getStudentData();
    this.studentService.getProductList().subscribe((data:Products)=>{
      console.log(data);
      this.productList=data
      console.log(this.productList);
    })
    
  }



}
