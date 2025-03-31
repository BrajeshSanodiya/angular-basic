import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-ngfor',
  imports: [NgFor],
  templateUrl: './directive-ngfor.component.html',
  styleUrl: './directive-ngfor.component.css'
})
export class DirectiveNgforComponent {

  users=['brajesh','raj','rajesh','braj','ved','sano']
  students=[
    {name:'brajesh',email:'brajesh@gmail.com', age:37},
    {name:'raj',email:'raj@gmail.com', age:38},
    {name:'rajesh',email:'rajesh@gmail.com', age:25},
    {name:'braj',email:'braj@gmail.com', age:20},
    {name:'ved',email:'ved@gmail.com', age:28},
    {name:'sano',email:'sano@gmail.com', age:32},
  ]

}
