import { Component } from '@angular/core';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-service-student',
  imports: [],
  templateUrl: './service-student.component.html',
  styleUrl: './service-student.component.css'
})
export class ServiceStudentComponent {

studentData :{
    name: string;
    age: number;
    email: string;
}[]|undefined;

  constructor(private studentService:StudentService){}

  ngOnInit(){
    this.studentData=this.studentService.getStudentData();  
  }


}
