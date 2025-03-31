import { Component } from '@angular/core';

@Component({
  selector: 'app-cf-for',
  imports: [],
  templateUrl: './cf-for.component.html',
  styleUrl: './cf-for.component.css'
})
export class CfForComponent {
  users=['brajesh','raj','rajesh','braj','ved','sano']
  students=[
    {name:'brajesh',email:'brajesh@gmail.com'},
    {name:'raj',email:'raj@gmail.com'},
    {name:'rajesh',email:'rajesh@gmail.com'},
    {name:'braj',email:'braj@gmail.com'},
    {name:'ved',email:'ved@gmail.com'},
    {name:'sano',email:'sano@gmail.com'},
  ]

  getName(name:string){
    console.log(name);
  }
}
