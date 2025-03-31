import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dynamic-home',
  imports: [RouterLink],
  templateUrl: './dynamic-home.component.html',
  styleUrl: './dynamic-home.component.css'
})
export class DynamicHomeComponent {


  users=[
    {id:1, name:'brajesh',email:'brajesh@gmail.com', age:37},
    {id:2, name:'raj',email:'raj@gmail.com', age:38},
    {id:3, name:'rajesh',email:'rajesh@gmail.com', age:25},
    {id:4, name:'braj',email:'braj@gmail.com', age:20},
    {id:5, name:'ved',email:'ved@gmail.com', age:28},
    {id:6, name:'sano',email:'sano@gmail.com', age:32},
  ]

}
